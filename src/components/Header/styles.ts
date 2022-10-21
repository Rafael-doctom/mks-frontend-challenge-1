import styled from 'styled-components'

export const Container = styled.div`

    background-color: #0F52BA;
    position:fixed;
    left:0;
    right:0;
    top:0;
    height:100px;
    color: #fff;
`

export const Cart = styled.button`
    border-radius:8px;
    background-color:#fff;
    border:none;
    width:90px;
    height:45px;
    cursor: pointer;
    color:#000;
    font-weight:700;
    font-size:18px;
    display:flex;
    justify-content: space-around;
    align-items:center;
    padding:0 15px;
`

export const Header = styled.header`

    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 28px 65px;
    height:100%;
`

export const Logo = styled.div`

    display:flex;
    align-items:center;

    p {

        font-weight:600;
        font-size:40px;
        text-align:center;
        margin-right:8px;
    }

    span {

        font-weight:300;
        font-size:20px;     
        margin-top:8px;   
    }
`