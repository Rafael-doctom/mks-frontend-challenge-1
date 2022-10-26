import styled from 'styled-components'
import Colors from '../../theme/colors'

export const ModalItemContainer = styled.div`

    width:auto;
    height:95px;
    border-radius:8px;
    background-color:${Colors.background.white};
    display:flex;
    align-items:center;
    justify-content:center;
    padding:19px 23px;
    margin: 10px 0 30px 0;
    position:relative;

    /* desktop */
    @media (max-width:1250px) {

        flex-direction:column;
        height:200px;
    }
`

export const RemoveItemButton = styled.button`

    background-color:${Colors.background.black};
   
    
    color:${Colors.text.white};
    height:20px;
    width:20px;
    border-radius:50%;
    font-weight:400;
    position:absolute;
    right:-2.55%;
    bottom:85%;

    /* desktop */
    @media (max-width:1250px) {

        background-color:transparent;
        color:${Colors.text.black};
        right:5%;
        bottom:90%;
        font-size:30px;
    }
`

export const ItemImage = styled.div<{url:string}>`

    width:45px;
    height:57px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-image:url(${props => props.url});
    background-repeat:no-repeat;
    background-position:center;
    background-size:100%;

    /* desktop */
    @media (max-width:1250px) {

        height:95px;
        width:80px;
    }
`

export const ItemTitle = styled.p`

    font-weight:400;
    font-size:13px;
    max-width:110px;
    margin: 0 20px;

    /* desktop */
    @media (max-width:1250px) {

        margin-bottom:10px;
    }
`

export const ItemQuantityContainer = styled.div`

    display:flex;
    flex-direction:column;
    text-align:center;
    margin:auto;

    p {

        font-weight:400;
        font-size:10px;
        text-align:left;

        /* desktop */
        @media (max-width:1250px) {

            display:none;
        }
    }
`

export const ItemQuantity = styled.div`

    width:65px;
    height: 22px;
    border-radius:5px;
    border: 1px solid ${Colors.border};
    margin-top:4px;
    margin-right:40px;
    display:flex;
    align-items:center;
    justify-content: space-around;

    /* desktop */
    @media (max-width:1250px) {

        margin:0 10px 0 0;
        height:26px;    
    }

    /* mobile */
    @media (max-width:570px) {

        width:97px;
        height: 34px;
        border-radius:4px;
        margin-right:29px;
    }
`
export const Quantity = styled.span`
    font-weight:400;
    font-size:10px;
    border-left: 1px solid ${Colors.border};
    border-right: 1px solid ${Colors.border};
    padding:0 8px;

    /* desktop */
    @media (max-width:1250px) {

        font-size:14px;
    }
      
    /* mobile */
    @media (max-width:570px) {

        font-size:20px;
        padding:0 12px;
    }

`
export const QuantityButton = styled.button`

    background:none;
    font-weight:400;
    font-size:12px;

    /* mobile */
    @media (max-width:570px) {

        font-size:24px;
    }
`

export const ItemPrice = styled.span`

    font-weight:700;
    font-size:14px;
    display:flex;
    align-items:center;

    /* desktop */
    @media (max-width:1250px) {

        background-color:${Colors.background.darkGray};
        color:${Colors.text.white};
        border-radius:5px;
        display:flex;
        justify-content:center;
        align-items:center;
        font-weight:700;
        font-size:15px;
        padding:4px 6px;
    }

    /* mobile */
    @media (max-width:570px) {

        height:35px;
        width:84px;
        font-size:15px;
    }
`
