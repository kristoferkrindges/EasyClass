<<<<<<< HEAD
import { Container,CalendarContainer } from "./styles";
import React, {useState,useEffect} from 'react';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import WeekCalendar from 'react-week-calendar';
import api from "../../services/api"
export default function RequestTeacher(){
    const [params,setParams] = useState(null);
    const location = useLocation();
    let [teacher, setTeacher] = useState([])
    let [lessons, setLessons] = useState([])
    let [classe, setClass] = useState([])
    let dataConvert = [];

    useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    console.log(queryParams);
    const teacherId = queryParams.get('teacherId')
    setParams(teacherId)
    //getTeacherById(teacherId)
    getLessonTeacherById(teacherId)
    })
=======
import { Container } from "./styles";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useParams, useLocation } from "react-router-dom";
import WeekCalendar from "react-week-calendar";
import api from "../../services/api";
import Navbar from "../Shared/Navbar";

export default function RequestTeacher() {
	const [params, setParams] = useState(null);
	const location = useLocation();
	let [teacher, setTeacher] = useState([]);
	let [lessons, setLessons] = useState([]);
	let [classe, setClass] = useState([]);
>>>>>>> 8ca413f60a80abb2c49e80035bd5ab31ba515cc5

	useEffect(() => {
		const queryParams = new URLSearchParams(location.search);
		console.log(queryParams);
		const teacherId = queryParams.get("teacherId");
		setParams(teacherId);
		getTeacherById(teacherId);
	});

<<<<<<< HEAD
      const getLessonTeacherById = (teacherId) => {
        /*console.log("getLessonTeacherById " + teacherId)
        api.get("/lesson?teacherId=" + teacherId).then(({data})=>{
        dataConvert = data.map(val => {
           return {start: val.startDate, end: val.endDate};
          });
          setLessons(dataConvert)
            console.log(dataConvert)
        }).catch((error) => {
            console.error('error',error);
          });*/
          this.dataConvert.push(
            {start: moment(new Date(2022,5,16,11)).format('DD/MM/YYYY HH:mm'), end: moment(new Date(2022,5,16,12)).format('DD/MM/YYYY HH:mm')},
            {start: moment(new Date(2022,5,16,15)).format('DD/MM/YYYY HH:mm'), end: moment(new Date(2022,5,16,16)).format('DD/MM/YYYY HH:mm')}
            )
            console.log(dataConvert);
      };

=======
	const getTeacherById = (teacherId) => {
		console.log("getTeacherById " + teacherId);
		api
			.get("/teacher?teacherId=" + teacherId)
			.then(({ data }) => {
				setTeacher(data);
				console.log(data);
			})
			.catch((error) => {
				console.error("error", error);
			});
	};
>>>>>>> 8ca413f60a80abb2c49e80035bd5ab31ba515cc5

	class ModalCalendar extends React.Component {
		handleSave = () => {
			const { value } = this.input;
			this.props.onSave({
				value,
			});
		};

		renderText() {
			const { start, end } = this.props;
			return (
				<span>{`${start.format("DD/MM HH:mm")} - ${end.format("HH:mm")}`}</span>
			);
		}

<<<<<<< HEAD
    return(
      <div>
          <div>
        <Container>
                <div>
                    Foto
                </div>
                <div>
                    Ver perfil
                </div>
                <div>
                    Mensagens
                </div>
            </Container>
                </div>
            <div>
            <CalendarContainer>
              <div>
            <h3>Consulte os horários disponível para o professor</h3>          
            </div>
             <WeekCalendar
             numberOfDays={7}
             dayFormat={'DD/MM'}
             scaleUnit={60}
             scaleFormat={'HH'}
             selectedIntervals={dataConvert}
             modalComponent={ModalCalendar}
             ></WeekCalendar>
        </CalendarContainer>
        </div>
        </div>
    )
}
=======
		render() {
			const { value } = this.props;
			return (
				<div className="customModal">
					<div className="customModal__text">{this.renderText()}</div>
					<input
						ref={(el) => {
							this.input = el;
						}}
						className="customModal__input"
						type="text"
						placeholder="Observação (Opcional)"
						defaultValue={value}
						size="90"
						width="50%"
						height="30%"
					/>
					<button
						className="customModal__button customModal__button_float_right"
						onClick={this.handleSave}
					>
						Enviar Solicitação
					</button>
				</div>
			);
		}
	}

	return (
		<Container>
			<Navbar></Navbar>
			<span>
				<div>
					<h3>Consulte a disponibilidade do professor abaixo:</h3>
					<div className="calendar-container">
						<WeekCalendar
							numberOfDays={7}
							dayFormat={"DD/MM"}
							scaleUnit={60}
							scaleFormat={"HH"}
							modalComponent={ModalCalendar}
							cellHeight={100}
							scaleHeaderTitle={"Data e Hora"}
						></WeekCalendar>
					</div>
				</div>
			</span>
		</Container>
	);
}
>>>>>>> 8ca413f60a80abb2c49e80035bd5ab31ba515cc5
