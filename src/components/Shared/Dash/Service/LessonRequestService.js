import api from "../../../../services/api";

export function getLessonRequests(userId, role, lessonRequestId) {
    if (role === "TEACHER") {
        return getLessonRequestsForTeacher()
    } else if (role === "STUDENT") {
        return getLessonForStudent()
    } else if (lessonRequestId) {
        return getLessonRequestById()
    }
}

function getLessonRequestsForTeacher(teacherId) {
    api.get("/lesson-request", { params : { teacherId: teacherId} })
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error)
            return null
        })
}

function getLessonForStudent(studentId) {
    api.get("/lesson-request", { params : { studentId: studentId} })
        .then( (response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error)
            return null
        })
}

function getLessonRequestById(lessonRequestId) {
    api.get("/lesson-request", { params : { lessonRequestId: lessonRequestId} })
        .then( (response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error)
            return null
        })
}