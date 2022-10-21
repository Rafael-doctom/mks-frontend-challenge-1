import styled from 'styled-components';

export const ModalItemContainer = styled.div`

    width:auto;
    height:95px;
    border-radius:8px;
    background-color:#fff;
    display:flex;
    align-items:center;
    padding:19px 23px;
    margin-bottom:30px;
`

export const ItemImage = styled.div`

    width:46px;
    height:47px;
    background-color:red;

`

export const ItemTitle = styled.p`

    font-weight:400;
    font-size:13px;
    max-width:110px;
    margin: 0 20px;

`

export const ItemQuantityContainer = styled.div`

    display:flex;
    flex-direction:column;

    p {

        font-weight:400;
        font-size:10px;
    }
`

export const ItemQuantity = styled.div`

    /* width:50px;
    height:19px; */
    width:60px;
    height: 22px;
    border-radius:5px;
    border: 1px solid #BFBFBF;
    margin-top:4px;
    margin-right:40px;
    display:flex;
    align-items:center;
    justify-content: space-around;
  
`
export const Quantity = styled.span`
    font-weight:400;
    font-size:8px;
    border-left: 1px solid #BFBFBF;
    border-right: 1px solid #BFBFBF;
    padding:0 8px;
`
export const QuantityButton = styled.button`

    background:none;
    font-weight:400;
    font-size:12px;
`

export const ItemPrice = styled.span`

    font-weight:700;
    font-size:14px;

`
