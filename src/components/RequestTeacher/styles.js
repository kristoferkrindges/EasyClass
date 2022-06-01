import style from "styled-components";

export const Container = style.div`
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
        background-color: white;
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
`;
