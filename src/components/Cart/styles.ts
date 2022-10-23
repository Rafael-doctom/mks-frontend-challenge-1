import styled from 'styled-components';

export const Cart = styled.button`
    border-radius:8px;
    background-color:#fff;
    width:90px;
    height:45px;
    color:#000;
    font-weight:700;
    font-size:18px;
    display:flex;
    justify-content: space-around;
    align-items:center;
    padding:0 15px;

    /* mobile */
    @media (max-width:570px) {

        font-size:32px;
        width:52px;
        height:26px;
        font-size:12px;
        padding:5px 7px;
    }
`