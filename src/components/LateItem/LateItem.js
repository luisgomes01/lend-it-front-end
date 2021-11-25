import styled from "styled-components";

export const Container = styled.div`
  max-width: 325px;
  width: 100%;
  border: 2px solid #c4c4c4;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 20px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px 20px;

    .header-container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h2 {
        font-size: 1.5rem;
        color: #095194;
        font-family: "Titillium Web", sans-serif;
        margin-right: 0.5rem;
      }
      .icons-container {
        display: flex;
        align-items: center;
        button {
          background: none;
          border: none;
          color: #00b0f0;
          font-weight: 900;
          cursor: pointer;
        }
      }
    }

    .body-container {
      width: 100%;
      font-weight: bold;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      p {
        margin-top: 0.5rem;
      }
    }
    .footer-container {
      margin-top: 10px;
    }
  }
`;
