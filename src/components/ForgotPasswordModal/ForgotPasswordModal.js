import styled from 'styled-components'

export const Container = styled.div`
  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    -webkit-transition: all 0.5s 0.5s ease-in-out;
    transition: all 0.5s 0.5s ease-in-out;
    background-color: rgba(0, 0, 0, 0.9);

      .modal-content {
        margin-top: 20rem;
        padding: 10px;
        max-width: 500px;
        width: 100%;
        min-width: 360px;
        height: 200px;
        overflow: auto;

        /* Border */
        border-radius: 5px;
        border: 1px solid #C4C4C4;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background: #ffff;

        /* Position */
        position: absolute;
        top: 5%;
        left: 50%;
        z-index: 2;

        /* Tranform */
        -webkit-transform: translate(-50%, 0);
        -ms-transform: translate(-50%, 0);
        transform: translate(-50%, 0);
        -webkit-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;

        /* Display */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        .modal-header{
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .modal-body{
          input{
            min-width: 450px;
            height: 3rem;
            border-radius: 6px;
            border: solid 3px #c4c4c4;
            padding: 0.2rem 1rem;
            font-size: 16px;
            
            :focus{
              border-color: #00B0F0;
              outline: 0;
            }
          }

        }

        .modal-footer{
          margin-top: 0.6rem;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          
          .button-cancel{
            border: solid 3px #c4c4c4;
            border-radius: 6px;
            background-color: #ffff;
            font-weight: 800px;
            padding: 11.5px 34px;
            margin-right: 0.6rem;

            :hover{
              background-color: #c4c4c4;
              transition: .2s ease-in-out;
            }
          }
        }
      }
  }

  .esquecer-senha{
    border: none;
    background: none;
    cursor: pointer;
    color: #00B0F0;
  } 
`;