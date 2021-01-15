import styled from 'styled-components';

export const Container = styled.div`
    background: #FFFFFF;
    padding: 0px 16px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    > img{
        width: 110px;
    }

    > a{
        text-decoration: none;
        font-size: 14px;
        color: #3c3b4c;
    }


    > input[type=text] {
        width: 55%;
        height: 46px;
        background: #fbfbf8;
        border-radius: 500px;
        box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.8);
        padding: 0px 60px;

        ::placeholder{
            font-size: 15px;
        }
    }

    > button + button{
        font-weight: bold;
        background: #2896a9;
        color: #ffffff;
        border-radius: 4px;
        width: 100px;
        height: 40px;
        padding: 0px 12px;

    }

    > button{
        font-size: 14px;

        margin-right: -25px;
        font-weight: bold;
        background: #ffffff;
        color: #0f7c90;
        border-radius: 4px;
        border: 1px solid #2896a9;
        width: 100px;
        height: 40px;
        padding: 0px 12px;
    }

`;
