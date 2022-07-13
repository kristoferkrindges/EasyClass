import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	/* justify-content: center; */
	flex-direction: column;
	margin-top: 2%;
	width: 100vh;
	margin-left: 15%;

	h3 {
		font-size: 1.5rem;
		margin-bottom: 4%;
		color: white;
	}

	.dayCell {
		&:hover {
			background-color: rgba(148, 68, 158, 0.8);
		}
	}

	.calendar-container {
		width: 100%;
		padding: 1%;
	}
	.event {
		color: white;
		background-color: #94449e;
	}

	.customModal__button {
		background-color: #94449e;
		border: 1px solid #94449e;

		&:hover,
		&:focus {
			cursor: pointer;
			/* background-color: @modal-button-bg-color-hover; */
		}
	}

	.weekCalendar__overlay_status_selection {
		background-color: rgba(148, 68, 158, 0.5);
	}

	.customCell {
		width: 100%;
		height: 100%;
		text-align: center;
	}

	.customCell_10 {
		color: green;
		&:hover {
			cursor: pointer;
		}
	}

	.customCell_close {
		background-color: gray;
		color: #fff;
	}

	.customModal__button_example {
		width: 100%;
		display: block;
	}

	.customEvent {
		width: 100%;
		height: 100%;
		background-color: none;
	}
`;

export const CalendarContainer = styled.div`
	display: flex;
	width: 100%;
	// justify-content: space-between;
	/* height: 100%; */

	/* .calendar-container {
		width: 100%;
	} */

	.weekCalendar {
		position: relative;
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		overflow: hidden;
		color: #94449e;
		/* padding-left: @scale-width;
		padding-top: @header-height;
		color: @calendar-color; */
		* {
			box-sizing: border-box;
		}
	}

	.weekCalendar__header {
		position: absolute;
		/* height: @header-height;
		line-height: @header-height; */
		z-index: 10;
		top: 0;
		/* padding-left: @scale-width; */
		text-align: center;
		/* font-size: @header-font-size; */
		font-weight: bold;
		/* color: red; */
	}
`;
