import styled from 'styled-components'

export const Container = styled.main`
width: 100%;
height: 100vh;
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

p{
    text-align: center;
    flex-wrap: wrap;
    font-weight: bold;
    span{
        color: #00B0F0;
    }
}
`