import styled from 'styled-components'

export const ModalContainer = styled.aside<{isVisible:boolean}>`

    position:fixed;
    top:0;
    right: ${(props) => (props.isVisible ? '0' : '-100%')};
    z-index:200;
    background-color:#0F52BA;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    height:100vh;
    width:40%;
    transition: all .6s ease;

    /* tablet */
    @media (max-width:800px) {

        width:50%;
    }


    /* mobile */
    @media (max-width:570px) {

      width:85%;
    }
`

export const ModalEmpty = styled.div`

    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    
    h2 {

        font-weight:700;
        font-size:27px;
        color:#fff;

        /* tablet */
        @media (max-width:800px) {

            text-align:center;
        }
    }

    h3 {

        color: #eee
    }
`

export const ModalHeader = styled.div`

    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:60px;
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
    font-size:20px;
    position:absolute;
    top:47px;
    right:47px;

    /* tablet */
    @media (max-width:800px) {

        top:38px;
        right:32px;
    }

    /* mobile */
    @media (max-width:570px) {

        width:45px;
        height:45px;
        color:#0F52BA;
        font-size:34px;
    }
`

export const ModalContent = styled.div`

    height:40%;
    display:flex;
    flex-direction:column;
    overflow-y:auto;
    padding:0 47px;

    /* mobile */
    @media (max-width:570px) {

        padding:none;
    }
`

export const ModalFooter = styled.div`

    position:absolute;
    width:100%;
    bottom:0;
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

    /* tablet */
    @media (max-width:800px) {

        padding:0 32px;
        font-size:28px;
        margin-bottom:20px;
    }
`

export const BuyButton = styled.button`

    background-color:#000;
    font-weight:700;
    font-size:28px;
    display:inline-block;
    height:100px;
    color: #fff;
    width:100%;

    /* mobile */
    @media (max-width:570px) {

        font-size:20px;
        height:65px;
    }
`