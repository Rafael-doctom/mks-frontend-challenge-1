import styled from 'styled-components'

export const ModalCartContainer = styled.aside`
    position:fixed;
    top:0;
    right:0;
    z-index:200;
    background-color:#0F52BA;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    height:100vh;
    width:440px;
`

export const ModalHeader = styled.div`

    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:36px 47px;
`

export const ModalTitle = styled.p`

    max-width:180px;
    font-weight:700;
    font-size:27px;
    color:#fff;
`

export const ModalCloseButton = styled.button`

    background-color:#000;
    color:#fff;
    height:38px;
    width:38px;
    border-radius:50%;
    font-weight:400;
    border:none;
`