import styled from 'styled-components'

export const ModalContainer = styled.aside`
    position:fixed;
    top:0;
    right:0;
    z-index:200;
    background-color:#0F52BA;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    height:100vh;
    width:460px;
    display:none;
`

export const ModalHeader = styled.div`

    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:70px;
    padding:36px 47px 0 47px;
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

export const ModalContent = styled.div`

    height:40%;
    display:flex;
    flex-direction:column;
    overflow-y:auto;
    padding:0 47px;

`

export const ModalFooter = styled.div`

    position:absolute;
    width:100%;
    bottom:0;

   
    /* background-color:red; */
`

export const Total = styled.div`

    padding:0 47px;
    display: flex;
    justify-content:space-between;
    align-items:center;
    color:#fff;
    font-weight:700;
    font-size:18px;
    margin-bottom:40px;
`

export const BuyButton = styled.button`

    background-color:#000;
    font-weight:700;
    font-size:28px;
    display:inline-block;
    height:100px;
    color: #fff;
    width:100%;


`