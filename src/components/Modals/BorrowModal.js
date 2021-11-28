import styled from "styled-components";

export const Container = styled.div`
  .modal {
    width: 100%;
    height: 100%;
    display: flex;
    z-index: 3;
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.35);

    .modal-content {
      width: 80%;
      background-color: #ffff;
      border: solid 3px #c4c4c4;
      border-radius: 30px;
      display: flex;
      flex-direction: column;
      .modal-header-all {
        display: flex;
        flex-direction: row-reverse;
        .button-cancel {
          position: absolute;
          margin: 0.8rem;
          background: none;
          border: none;
          font-size: 2.1rem;
          color: #00b0f0;
        }

        .modal-header {
          display: flex;
          justify-content: center;
          font-size: 1.5rem;
          margin: 20px;
          width: 100%;
        }
      }

      .send-object {
        width: 100%;

        .modal-body {
          width: 100%;
          display: flex;
          justify-content: space-between;

          .modal-body-part {
            padding-left: 50px;
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            h3 {
              color: #00b0f0;
              margin-bottom: 20px;
            }

            label {
              margin-top: 0.9rem;
              align-self: flex-start;
              span {
                color: red;
              }
            }
            input {
              padding: 15px;
              align-self: flex-start;
              width: 85%;
              height: 3.5rem;
              margin-top: 0.9rem;
              border-radius: 6px;
              border: solid 3px #c4c4c4;

              :focus {
                border-color: #00b0f0;
                outline: 0;
              }
            }
            + .modal-body-part {
              border-left: solid 5px #00b0f0;
            }
          }
        }
        .modal-footer {
          width: 93%;
          margin-top: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 1rem 0;
        }
      }
    }
  }
  .button-container {
    position: fixed;
    right: 30px;
    top: 77%;

    .add-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3.5rem;
      height: 3.5rem;
      border: none;
      background-color: #00b0f0;
      font-size: 1.75rem;
      cursor: pointer;
      color: #ffff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 100%;
    }
  }
`;
