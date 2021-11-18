/* CSS COMPARTILHADO ENTRE AS PÁGINAS LOGIN E REGISTER - SE FOR CONSIDERADO SUJEIRA EU DESFAÇO, SEM PROBLEMAS */
import styled from 'styled-components';

export const PageStyle = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    text-align: center;

    span, a {
        color: #00B0F0;
        font-weight: bold;
        text-decoration: none;
    }

    .page{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 400px;

        .title-page {
            h1 {
                color: #504747;
                font-size: 2.5rem;
            }
            
            p {
                margin-bottom: 1rem;
            }
        } 

        form{
            width: 100%;
            .inputs {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                input {
                    width: 100%;
                    height: 3.5rem;
                    border-radius: 6px;
                    border: solid 3px #c4c4c4;
                    padding: 0.2rem 1rem;
                    font-size: 16px;
            

                    :focus{
                        border-color: #00B0F0;
                        outline: 0;
                    }
                }

                input+input{
                    margin-top: 0.9rem;
                }
            }
        }
    }
`;
