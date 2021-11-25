import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  width: 100%;
  border: 2px solid #c4c4c4;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 20px;
  
  .container {
    display: flex;
    flex-direction: column;
    padding: 15px 20px;
    font-weight: bold;

    .header-container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .name-object-container{
        font-size: 1.5rem;
        color: #095194;
        font-family: "Titillium Web", sans-serif;
      }
      
      .icons-container {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        button {
          background: none;
          border: none;
          color: #00b0f0;
          font-weight: 900;
          cursor: pointer;

          + button {
            margin-left: 1rem;
          }
        }
      }
    }

    .body-container {
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: center;

      .left-body-content {
        width: 75%;
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        .middle-line {
          display: flex;
          justify-content: space-between;
        }
        .last-line {
          display: flex;
          align-items: center;
          margin: 15px 0;
        }
      }

      .button-container {
        width: 25%;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
`;
