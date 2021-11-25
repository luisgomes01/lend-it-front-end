import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  .container{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .left-content,
    .right-content{
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      .left-content-header,
      .right-content-header{
        display: flex;
        align-items: center;
      }
        
    }
    .left-content{
      max-width: 500px;
      width: 100%;
      margin
    }

    .right-content{
      max-width: 800px;
      width: 100%;
    }
  }
`