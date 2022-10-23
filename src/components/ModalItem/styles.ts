import styled from 'styled-components';

export const ModalItemContainer = styled.div`

    width:auto;
    height:95px;
    border-radius:8px;
    background-color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:19px 23px;
    margin: 10px 0 30px 0;
    position:relative;

    /* tablet */
    @media (max-width:1050px) {

        flex-direction:column;
        height:200px;
    }
`

export const RemoveItemButton = styled.button`

    background-color:#000;
    color:#fff;
    height:20px;
    width:20px;
    border-radius:50%;
    font-weight:400;
    position:absolute;
    right:-2%;
    bottom:85%;

    /* tablet */
    @media (max-width:1050px) {

        background-color:#fff;
        color:#000;
        right:5%;
        bottom:90%;
        font-size:30px;
    }
`

export const ItemImage = styled.div<{url:string}>`

    width:40px;
    height:57px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-image:url(${props => props.url});
    background-repeat:no-repeat;
    background-position:center;
    background-size:100%;

    /* tablet */
    @media (max-width:1050px) {

        height:95px;
        width:80px;
    }
`

export const ItemTitle = styled.p`

    font-weight:400;
    font-size:13px;
    max-width:110px;
    margin: 0 20px;

    /* tablet */
    @media (max-width:1050px) {

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

        /* tablet */
        @media (max-width:1050px) {

            display:none;
        }
    }
`

export const ItemQuantity = styled.div`

    width:60px;
    height: 22px;
    border-radius:5px;
    border: 1px solid #BFBFBF;
    margin-top:4px;
    margin-right:40px;
    display:flex;
    align-items:center;
    justify-content: space-around;

    /* tablet */
    @media (max-width:1050px) {

        margin-right:10px;
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
    font-size:8px;
    border-left: 1px solid #BFBFBF;
    border-right: 1px solid #BFBFBF;
    padding:0 8px;
      
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

    /* tablet */
    @media (max-width:1050px) {

        background-color:#373737;
        color:#fff;
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
