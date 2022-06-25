import { Container, CalendarContainer } from "./styles";
import React, { useState, useEffect } from "react";
import { useUserContext } from "../../context/userContext";
import { useLocation } from "react-router-dom";
import WeekCalendar from "react-week-calendar";
import * as moment from 'moment';
import api from "../../services/api";
export default function RequestTeacher() {
	const { user } = useUserContext();
	const [params, setParams] = useState(null);
	const location = useLocation();
	let [teacher, setTeacher] = useState(null);
	let [teacherId, setTeacherId] = useState(null);
	let [lessons, setLessons] = useState(null);
	let [classe, setClass] = useState([]);
	let [uid, setUid] = useState(0);


	useEffect(() => {
		checkUser(user);
	});

	useEffect(()=> {
		const queryParams = new URLSearchParams(location.search);
		console.log(queryParams);
		const teacherId = queryParams.get("teacherId");
		setTeacherId(teacherId);
	},[user]);

	useEffect(()=> {
		if(teacherId) {
			getTeacherById(teacherId);
			getLessonsByTeacherId(teacherId);
		}
	},[teacherId])

	const checkUser = (user) => {
		if(user && user.uid)
		setUid(user.uid);
	}

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
		console.log("getLessonsByTeacherId " + teacherId);
		//let dateNow = new Date();
		//let dateNextWeey = new Date();
		//dateNextWeey.setDate(dateNow.getDate() + 7);
		//let formattedDateNow = (moment(dateNow)).format('YYYY-MM-DDTHH:mm:ss+0000');
		//let formatedDateNextWeek = (moment(dateNextWeey)).format('YYYY-MM-DDTHH:mm:ss+0000');
		api
			.get("/lesson-request?teacherId=" + teacherId)

	};

	const parseLesson = (lessons = []) => {
		console.log("parseLesson");
		console.log(lessons);
		let parseLessons = [];
		let lastUid = 0;
		lessons.forEach(lesson => {
			let includeLesson = {
				lastUid: lastUid,
				start: moment(lesson.startDate),
				end: moment(lesson.endDate),
				value: "status da aula"
			}
			lastUid ++;
			parseLessons.push(includeLesson);
		})
		setUid(lastUid);
		setLessons(parseLessons);
		
	};


	class StandardCalendar extends React.Component {

		constructor(props) {
		  super(props);
		  this.state = {
			lastUid: uid,
			selectedIntervals: [
			  {
				uid: 1,
				start: moment({h: 10, m: 5}),
				end: moment({h: 12, m: 5}),
				value: "Booked by Smith"
			  },
			  {
				uid: 2,
				start: moment({h: 13, m: 0}).add(2,'d'),
				end: moment({h: 13, m: 45}).add(2,'d'),
				value: "Closed"
			  },
			  {
				uid: 3,
				start: moment({h: 11, m: 0}),
				end: moment({h: 14, m: 0}),
				value: "Reserved by White"
			  },
			]
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
		  numberOfDays={7}
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
			api
			.post("/lesson-request", {
				studentId: uid,
				teacherId: teacher.teacherId,
				startDate: formattedStart,
				endDate: formatedEnd,
				subject: teacher.subject[0],
				hourlyPrice: teacher.hourlyPrice,
			})
			.then(({ data }) => {
				console.log(data);
			})
			.catch((error) => {
				console.error("error", error);
			});


		};

		renderText() {
			const { start, end } = this.props;
			return (
				<span>{`${start.format("DD/MM HH:mm")} - ${end.format("HH:mm")}`}</span>
			);
		}

		render() {
			const { value } = this.props;
			const { dataConvert } = this.props;//ajustar isso
			console.log(this.props);
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
	}
}