import { Container, CalendarContainer } from "./styles";
import React, { useState, useEffect } from "react";
import { useUserContext } from "../../context/userContext";
import { useLocation } from "react-router-dom";
import WeekCalendar from "react-week-calendar";
import * as moment from 'moment';
import Bar from "../Shared/Bar"
import api from "../../services/api";
export default function RequestTeacher() {
	const { user } = useUserContext();
	const [params, setParams] = useState(null);
	const location = useLocation();
	let [teacher, setTeacher] = useState(null);
	let [awsUser, setAwsUser] = useState(null);
	let [teacherId, setTeacherId] = useState(null);
	let [lessons, setLessons] = useState([]);
	let [classe, setClass] = useState([]);
	let [uid, setUid] = useState(0);


	useEffect(() => {
		console.log("useEffect awsUser",awsUser);
		if(user) {
		fetchUser(user.uid);
	}
	},[]);

	useEffect(()=> {
		const queryParams = new URLSearchParams(location.search);
		console.log(queryParams);
		const teacherId = queryParams.get("teacherId");
		setTeacherId(teacherId);
	},[]);

	useEffect(()=> {
		if(teacherId) {
			getTeacherById(teacherId);
			getLessonsByTeacherId(teacherId);
		}
	},[user,teacherId])


	const getTeacherById = (teacherId) => {
		console.log("getUserTeacherById " + teacherId);
		api
			.get("/user?userId=" + teacherId)
			.then(({ data }) => {
				setTeacher(data);
				console.log(data);
			})
			.catch((error) => {
				console.error("error", error);
			});
	};


	const getLessonsByTeacherId = (teacherId) => {
		api
			.get("/lesson-request?teacherId=" + teacherId).then(res => {
				console.log("getLessonsByTeacherId", res);
				parseLesson(res.data);
			}).catch((e) => {
				console.error(e);
			});

	};

	const parseLesson = (lessonsToParse = []) => {
		console.log(lessonsToParse);
		let lastUid = 0;
		Array.from(lessonsToParse).forEach(lesson => {
			let includeLesson = {
				lastUid: lastUid,
				start: moment(lesson.startDate),
				end: moment(lesson.endDate),
				value: lesson.status == 'ACCEPTED'? 'Ocupado' : 'Reservado'
			}
			lastUid ++;
			setLessons(lessons => [...lessons, includeLesson]);
		})
		setUid(lastUid);
		console.log("after parse");
		console.log(lessons);
		
	};


	function fetchUser(userRemoteId) {
		// let payload = { userRemoteId: userRemoteId }
		 api
		.post("/login", { "userRemoteId": userRemoteId })
		.then((res)  => {
			console.log("aws user", res);
			if(res && res.data)
			setAwsUser(res.data[0]);
		})
		.catch((error) => {
			console.log(error)
		})
	}


	class StandardCalendar extends React.Component {

		constructor(props) {
		  super(props);
		  this.state = {
			lastUid: uid,
			selectedIntervals: []
		  }
		}
	  
		handleEventRemove = (event) => {
		  const {selectedIntervals} = this.state;
		  const index = selectedIntervals.findIndex((interval) => interval.uid === event.uid);
		  if (index > -1) {
			selectedIntervals.splice(index, 1);
			this.setState({selectedIntervals});
		  }
	  
		}
	  
		handleEventUpdate = (event) => {
		  const {selectedIntervals} = this.state;
		  const index = selectedIntervals.findIndex((interval) => interval.uid === event.uid);
		  if (index > -1) {
			selectedIntervals[index] = event;
			this.setState({selectedIntervals});
		  }
		}
	  
		handleSelect = (newIntervals) => {
		  const {lastUid, selectedIntervals} = this.state;
		  const intervals = newIntervals.map( (interval, index) => {
	  
			return {
			  ...interval,
			  uid: lastUid + index
			}
		  });
	  
		  this.setState({
			selectedIntervals: selectedIntervals.concat(intervals),
			lastUid: lastUid + newIntervals.length
		  })
		}
	  
		render() {
		  return <WeekCalendar
		  numberOfDays={5}
		  dayFormat={"DD/MM"}
		  scaleUnit={60}
		  scaleFormat={"HH"}
		  modalComponent={ModalCalendar}
		  selectedIntervals = {this.state.selectedIntervals}
		  onIntervalSelect = {this.handleSelect}
		  onIntervalUpdate = {this.handleEventUpdate}
		  onIntervalRemove = {this.handleEventRemove}
		  />
		}
	}

	class ModalCalendar extends React.Component {


		handleSave = () => {
			console.log(this)
			let { value } = this.input;
			let { start, end } = this.props;
			let formattedStart = start.format('YYYY-MM-DDTHH:mm:ss');
			let formatedEnd = end.format('YYYY-MM-DDTHH:mm:ss');
			console.log("handleSave", awsUser);
			let postData = {
				studentId: awsUser.userId,
				teacherId: teacherId,
				startDate: formattedStart,
				endDate: formatedEnd,
				subject: teacher.subject[0],
				hourlyPrice: 70.00
				//subject: teacher.subject[0],
				//hourlyPrice: teacher.hourlyPrice,
			}
			console.log("post", postData);
			api
			.post("/lesson-request", postData)
			.then(({ data }) => {
				console.log(data);
			})
			.catch((error) => {
				console.error("error", error);
			});


		};

		render() {
			const { value, start, end } = this.props;
			return (
				<div className="customModal">
					<div className="customModal__text">
					{`Das ${start.format('HH:mm')} as ${end.format('HH:mm')}`}
					</div>
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

    return(
      <div>
		Funciona
		<div>
        	{teacher? teacher.firstName : null} {teacher? teacher.role : null} {teacher? teacher.photoUrl: null}
            <CalendarContainer>
              <div>
            <h3>Consulte os horários disponível para o professor</h3>          
            </div>
             <WeekCalendar
             numberOfDays={7}
             dayFormat={'DD/MM'}
             scaleUnit={60}
             scaleFormat={'HH'}
             selectedIntervals={lessons}
             modalComponent={ModalCalendar}
             ></WeekCalendar>
        </CalendarContainer>
        </div>
        </div>
    )
}