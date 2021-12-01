import styled from "styled-components";

export const Container = styled.div`
  .modal{
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

    .modal-container{
      max-width: 800px;
      width: 100%;
      background-color: #ffff;
      border: solid 3px #c4c4c4;
      border-radius: 1.5rem;
      display: flex;
      flex-direction: column;
      padding: 10px 15px 20px 15px;

      .modal-header{
        display: flex;
        flex-direction: row-reverse;
        
        .button-cancel{
          position: absolute;
          margin: 0.8rem;
          background: none;
          border: none;
          font-size: 2.1rem;
          color: #00b0f0;
          cursor: pointer;
        }
        .modal-title{
          display: flex;
          justify-content: flex-start;
          font-size: 1.5rem;
          margin: 20px;
          width: 100%;
          
          input{
            width: 90%;
            border: none;
            border-bottom: solid 1px #c4c4c4;
            font-size: 1.5rem;
            color: #095194;
            font-family: "Titillium Web", sans-serif;

            :focus {
                  border: none;
                  outline: 0;
                }
          }
        }
      }
      .modal-body{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

          .left-modal-content,
          .right-modal-content {
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0px 10px;

              label {
                margin-top: 1rem;
                align-self: flex-start;
              }

              input {
                padding: 15px;
                align-self: center;
                width: 100%;
                height: 2.7rem;
                margin-top: 0.9rem;
                border-radius: 6px;
                border: solid 3px #c4c4c4;

                :focus {
                  border-color: #00b0f0;
                  outline: 0;
                }
              }

              .save-button{
                height: 5.9rem;
                width: 100%;
                display: flex;
                align-items: flex-end;
                justify-content: flex-end;
              } 
          }
      }
    }
  }
  
`