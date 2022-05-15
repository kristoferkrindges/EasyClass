import { Container } from "./styles";
import React, {useState,useEffect} from 'react';
import { useParams, useLocation } from 'react-router-dom';
import WeekCalendar from 'react-week-calendar';
import 'react-week-calendar/dist/style.less';
import api from "../../services/api"
export default function RequestTeacher(){
    const [params,setParams] = useState(null);
    const location = useLocation();
    let [teacher, setTeacher] = useState([])
    let [lessons, setLessons] = useState([])
    let [classe, setClass] = useState([])
    useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    console.log(queryParams);
    const teacherId = queryParams.get('teacherId')
    setParams(teacherId)
    getTeacherById(teacherId)
    })
    const getTeacherById = (teacherId) => {
        console.log("getTeacherById " + teacherId)
        api.get("/teacher?teacherId=" + teacherId).then(({data})=>{
            setTeacher(data)
            console.log(data)
        }).catch((error) => {
            console.error('error',error);
          });
      };
    return(
        <Container>
            <div>
            <h3>Consulte os horários disponível para o professor</h3>
            <div className='calendar-container'>
             <WeekCalendar/>
            </div>
            </div>
            <div>
            </div>
        </Container>
    )
}