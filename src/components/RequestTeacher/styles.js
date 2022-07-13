import style from "styled-components";

export const Container = style.div
  `display: flex;
 float:left;
 flex-direction: column;
 justify-content: space-between;`

export const CalendarContainer = style.div`
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    height: 100%;

    h3{
        text-align: center;
        margin: 2%
    }

    .calendar-container{
        width: 100%;
        padding: 1%;
    }

    .dayCell {
        &:hover {
          background-color: rgba(148, 68, 158, 0.8);
        }
      }

      .event {
        color: white;
        background-color: gray;
      }

      .customModal__button {
        background-color: #94449e;
        border: 1px solid #94449e;
      
        &:hover, &:focus {
          cursor: pointer;
          background-color: @modal-button-bg-color-hover;
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
        background-color: red;
    }
      
      `