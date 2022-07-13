import {createContext, useContext, useState} from "react";
import api from "../../../../services/api";

const LessonRequestContext = createContext({})
export const useLessonRequestContext = () => useContext(LessonRequestContext)

export const LessonRequestContextProvider = ( {children} ) => {
    const [lessonRequests, setLessonRequests] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getLessonRequest = async (userId, role, lessonRequestId) => {
        setLoading(true)
        if (role === "TEACHER") {
            await getLessonRequestsForTeacher()
        } else if (role === "STUDENT") {
            await getLessonForStudent()
        } else if (lessonRequestId) {
            await getLessonRequestById()
        }
    };

    async function getLessonRequestsForTeacher(teacherId) {
        api.get("/lesson-request", { params : { teacherId: teacherId} })
            .then( (response) => { updateLessonRequestSate(response.data) })
            .catch((error) => { onError(error) })
    }

    async function getLessonForStudent(studentId) {
        api.get("/lesson-request", { params : { studentId: studentId} })
            .then( (response) => { updateLessonRequestSate(response.data) })
            .catch((error) => { onError(error) })
    }

    async function getLessonRequestById(lessonRequestId) {
        api.get("/lesson-request", { params : { lessonRequestId: lessonRequestId} })
            .then( (response) => { updateLessonRequestSate(response.data) })
            .catch((error) => { onError(error) })
    }

    function updateLessonRequestSate(lessonRequests) {
        setLessonRequests(lessonRequests)
        setLoading(false)
    }

    function onError(error) {
        console.log(error)
        setLoading(false)
        setError(true)
    }

    const contextValue = {
        lessonRequests,
        error,
        loading,
        getLessonRequest
    };

    return (
        <LessonRequestContext.Provider value={contextValue}> {children} </LessonRequestContext.Provider>
    );
}