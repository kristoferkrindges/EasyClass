import {createContext, useContext, useState} from "react";
import api from "../../../../services/api";

const LessonRequestContext = createContext({})
export const useLessonRequestContext = () => useContext(LessonRequestContext)

export const LessonRequestContextProvider = ( {children} ) => {
    const [lessonRequests, setLessonRequests] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getLessonRequest = (userId, role, lessonRequestId) => {
        setLoading(true)
        if (role === "TEACHER") {
            getLessonRequestsForTeacher()
        } else if (role === "STUDENT") {
            getLessonForStudent()
        } else if (lessonRequestId) {
            getLessonRequestById()
        }
    };

    function getLessonRequestsForTeacher(teacherId) {
        api.get("/lesson-request", { params : { teacherId: teacherId} })
            .then( (response) => { updateLessonRequestSate(response.data) })
            .catch((error) => { onError(error) })
    }

    function getLessonForStudent(studentId) {
        api.get("/lesson-request", { params : { studentId: studentId} })
            .then( (response) => { updateLessonRequestSate(response.data) })
            .catch((error) => { onError(error) })
    }

    function getLessonRequestById(lessonRequestId) {
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