import styled from 'styled-components';
import welcomeimg from '../../img/welcomeimg.png'

export const WelcomePageStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .title {
      p{
        font-family: "Antic Slab", serif;
        font-size: 2.5rem;
      }
  } 

  .nunca-esquece {
    width: 100%;
    height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 5rem;
    background-image: url("${welcomeimg}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 60%;

    .acessar{
      flex-basis: 50%;
      
      p{
        font-size: 4rem;
        font-family: "Antic Slab", serif;
        text-align: center;
      }

      .organize-se{
        display: flex;
        justify-content: center;

        button{
          width: 10rem;
          height: 4rem;
          padding: 0 0.7rem;
          margin-top: 1rem;
          background: #00b0f0;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border: none;
          border-radius: 5px;
          font-weight: 700;
          font-size: 1.2rem;
          color: #fff;

          :hover{
            transform: scale(1.1);
            background-color: #095194;
            transition: .2s ease-in-out;
          }
        }
      }
    }  
  }

  .sobre {
    margin-top: 40px;
    background: #fff;
    width: 100%;
    height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 80%;

      .left-content {
        width: 50%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        justify-content: start;

        .about-text {
          text-align: justify;
          font-size: 1.5rem;
          padding: 0 10%;

          p{
            text-indent: 2rem;
            line-height: 2rem;
            +p{  
              margin-top: 4rem;
            }
          }
        }
      }

      .right-content {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 50%;
      }
    }
  }
`

