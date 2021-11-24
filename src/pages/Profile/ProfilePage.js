import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .profile-container{
        max-width: 400px;
        width: 100%;
        height: 65vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        border: solid 1px #c4c4c4;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 30px;

        .header-profile-container{
            img{
                max-width: 200px;
                width: 100%;
                border: solid 3px #00B0F0;
                border-radius: 100%;
            }
        }

        .edit{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 1.2rem;

            .edit-part{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                .edit-part-section{
                    width: 100%;
                    display: flex;
                    justify-content: flex-start;
                    margin: 0.2rem 0;
                    p{
                        color: #00B0F0;
                        span{
                            color: black;
                            margin-left: 0.2rem;
                        }
                    }

                     button{
                        margin-left: 0.7rem;
                        background: none;
                        border: none;
                        color: #00B0F0;
                    }
                }
                

                .input-name,
                .input-email{
                    margin: 0.5rem 0;
                    width: 100%;

                    input{
                        width: 100%;
                        border-radius: 5px;
                        border: solid 2px #c4c4c4;
                        padding: 8px;

                        :focus{
                            border-color: #00B0F0;
                            outline: 0;
                        }
                    }
                }

                .alert-senha{
                    width: 100%;
                    .alert{
                        border-radius: 5px;
                        width: 100%;
                        border: solid 1px #E43333;
                        color: #E43333;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        p{
                        text-align: center;
                        }
                    }
                    
                }
            }
            .edit-footer{
                margin: 1rem 0;
            } 
        }
    }
`