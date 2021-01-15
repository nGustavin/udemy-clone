import styled from 'styled-components';

export const Container = styled.div`
    height: 406px + 97px;
    width: 100%;
    background: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .footerButtons{
        width: 100%;
        height: 97px;
        padding: 24px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 265px;
        border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);

        > div{
            display: flex;
            align-items: center;
            justify-content: center;

            .simbol{
                width: 48px;
                height: 48px;
                background: #f2fbfc;
                border-radius: 24px;
                margin: 0px 16px 0px 0px;

                display: flex;
                align-items: center;
                justify-content: center;
            }

            .Info{
                display: flex;
                flex-direction: column;
                gap: 5px;
                > span {
                    font-size: 16px;
                    font-weight: bold;
                    color: #3c3b4c;
                }

                > h1 {
                    font-weight: normal;
                    font-size: 16px;
                    color: #3c3b4c;
                }
            }
        }
    }
`;

export const SearchBox = styled.div`
    width:  440px;
    height: 222px;
    padding: 24px;
    background: white;
    position: absolute;
    top: 15%;
    left: 18%;
    border-radius: 3px;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    
    > h1 {
        font-size: 40px;
        color: #3c3b4c;
    }

    > p {
        font-size: 19px;
        color: #3c3b4c;
    }

    input{
        width: 100%;
        height: 50px;
        background-color: transparent;
        box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.4);
        padding: 0px 20px;
        border-radius: 4px;

        ::placeholder{
            font-size: 16px;
        }
    }
`
