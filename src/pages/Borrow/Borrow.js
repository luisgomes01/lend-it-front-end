import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
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
