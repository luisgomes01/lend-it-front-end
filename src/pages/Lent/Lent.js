import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: calc(100vh - 4.5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    margin-bottom: 1.5rem;
  }

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    gap: 20px;

    .left-content,
    .right-content {
      flex-basis: calc(50% - 20px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 3.5rem;
      
      .left-content-header,
      .right-content-header {
        display: flex;
        align-items: center;
      }
    }

    .left-content {
      max-width: 500px;
    }

    .right-content {
      max-width: 800px;
    }
  }
`;
