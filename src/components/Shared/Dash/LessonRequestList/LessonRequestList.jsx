import Message from "../../../Student/Posts/Message";
// import logo from "../../../assets/logo.jpeg";

export default function LessonRequestList(props) {

    if(props.lessonRequests.len > 0) {
        props.lessonRequests.map( lessonRequest => {
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
    }
}