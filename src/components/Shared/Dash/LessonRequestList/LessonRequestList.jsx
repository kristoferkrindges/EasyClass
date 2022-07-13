import Message from "../../../Student/Posts/Message";
import {useSessionContext} from "../../../../context/SessionContextProvider";
import {useEffect, useState} from "react";
import api from "../../../../services/api";
import Loader from "../../Loader";
// import logo from "../../../assets/logo.jpeg";

export default function LessonRequestList() {

    const [lessonRequests, setLessonRequests] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const {user, awsUser} = useSessionContext();
    useEffect(() => {
        if (!lessonRequests) {
            getLessonRequest(awsUser.userId, awsUser.role)
        }
    })

    async function getLessonRequest(userId, role, lessonRequestId) {
        if (role === "TEACHER") {
            await getLessonRequestsForTeacher(userId)
        } else if (role === "STUDENT") {
            await getLessonForStudent(userId)
        } else if (lessonRequestId) {
            await getLessonRequestById(lessonRequestId)
        }
    }

    async function getLessonRequestsForTeacher(teacherId) {
        api.get("/lesson-request", {params: {teacherId: teacherId}})
            .then((response) => {
                updateLessonRequestSate(response.data)
            })
            .catch((error) => {
                setError(true)
                setLoading(false)
            })
    }

    async function getLessonForStudent(studentId) {
        api.get("/lesson-request", {params: {studentId: studentId}})
            .then((response) => {
                updateLessonRequestSate(response.data)
            })
            .catch((error) => {
                setError(true)
                setLoading(false)
            })
    }

    async function getLessonRequestById(lessonRequestId) {
        api.get("/lesson-request", {params: {lessonRequestId: lessonRequestId}})
            .then((response) => {
                updateLessonRequestSate(response.data)
            })
            .catch((error) => {
                setError(true)
                setLoading(false)
            })
    }

    function updateLessonRequestSate(lessonRequests) {
        setLessonRequests(lessonRequests)
        setLoading(false)
    }

    if (lessonRequests && lessonRequests.len > 0) {
        lessonRequests.map( lessonRequest => {
            return <Message
                subject={lessonRequest.subject}
                name={lessonRequest.teacherId}
                type={lessonRequest.status}
                // logo={logo}
                startDate={lessonRequest.startDate}
                endDate={lessonRequest.endDate}
                time={"10:00"}
            />
        } )
     } else if (loading) {
        return <Loader />
    } else {
        return <h1>Você ainda não tem nenhuma aula marcada</h1>
    }
}