import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 85px;
    background-color: #000000;

    box-sizing:border-box;
    padding: 5px 10px;
    display: flex-end;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    p{
        color: white;
        margin-bottom: 10px;
    }

    input {
        width: 100%;
        height: 45px;
        border-width: 0;
        background-color: #6aa862;
        text-align: right;

        font-size: 20px;
        align: end;
    }

`