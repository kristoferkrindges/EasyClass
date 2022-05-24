
import { Container } from "./styles";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useParams, useLocation } from "react-router-dom";
import WeekCalendar from "react-week-calendar";
import * as moment from 'moment';
import api from "../../services/api";
import logo from "../../imagens/logo.jpeg"
import SideNav from "../Shared/SideNav"
export default function RequestTeacher() {
	const [params, setParams] = useState(null);
	const location = useLocation();
	let [teacher, setTeacher] = useState(null);
	let [lessons, setLessons] = useState(null);
	let [classe, setClass] = useState([]);
	let [uid, setUid] = useState(0);

	useEffect(() => {
		const queryParams = new URLSearchParams(location.search);
		console.log(queryParams);
		const teacherId = queryParams.get("teacherId");
		setParams(teacherId);
		if(!teacher) {
			getTeacherById(teacherId);
			getLessonsByTeacherId(teacherId);
		}

	});

	const getTeacherById = (teacherId) => {
		console.log("getLessonsByTeacherId " + teacherId);
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


	const getLessonsByTeacherId = (teacherId) => {
		console.log("getLessonsByTeacherId " + teacherId);
		let dateNow = new Date();
		let dateNextWeey = new Date();
		dateNextWeey.setDate(dateNow.getDate() + 7);
		let formattedDateNow = (moment(dateNow)).format('YYYY-MM-DDTHH:mm:ss+0000');
		let formatedDateNextWeek = (moment(dateNextWeey)).format('YYYY-MM-DDTHH:mm:ss+0000');
		api
			.get("/lesson?teacherId=" + teacherId + '&after=' + formattedDateNow + '&before=' + formatedDateNextWeek)
			.then(({ data }) => {
				setTeacher(data);
				console.log(data);
			})
			.catch((error) => {
				console.error("error", error);
			});
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

		render() {
			const { value } = this.props;
			console.log(this.props);
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
			<span>
			<SideNav
				logo={logo}
				name={"firstName"}
				type={"Professor"}
				msg={4}
			/>
			</span>
			<span>
				<div>
					<h3>Consulte os horários disponível para o professor</h3>
					<div class="container">
						<div class="row">
							<div className="col-xs-12">
								<StandardCalendar/>
							</div>
						</div>
					</div>
				</div>
			</span>
		</Container>
	);
>>>>>>> e1849ea9e8bb8310ab82d119577dd1dc22f8ec7c
}