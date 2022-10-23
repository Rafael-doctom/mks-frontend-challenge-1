import styled from 'styled-components'
import Colors from '../../theme/colors'

export const ProductItemContainer = styled.div`

    height:285px;
    width:218px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius:8px;
    position:relative;

    @media (max-width:570px){

        width:250px;
        height:328px;
    }
`
export const ProductContent = styled.div`

    display:flex;
    flex-direction:column; 
`

export const ProductImage = styled.div<{url:string}>`

    display:flex;
    justify-content:center;
    align-items:center;
    height:126px;
    width:120px;
    margin:auto;
    background-image:url(${props => props.url});
    background-repeat:no-repeat;
    background-position:center;
    background-size:100%;

    /* mobile */
    @media (max-width:570px) {

        height:158.82px;
        width: 127.8px;
    }
`

export const ProductHeader = styled.div`

    display:flex;
    align-items:center;
    padding:12px 14px;
`

export const ProductTitle = styled.p`

    flex:1;
    font-weight:400;
    font-size:16px;
    color:#373737;
`

export const ProductPriceTag = styled.span`

    background-color:${Colors.background.darkGray};
    color:${Colors.text.white};
    border-radius:5px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:700;
    font-size:15px;
    padding:4px 6px;
    margin-left:2px;
`

export const ProductDescription = styled.p`

    padding:0 14px;
    font-weight:300;
    font-size:10px;
    color:${Colors.text.nightRider};
`

export const BuyButton = styled.button`

    position:absolute;
    bottom:0;
    height:32px;
    width:100%;
    background-color:${Colors.background.darkBlue};
    border-radius:0 0 8px 8px;
    color:${Colors.text.white};
    font-weight:600;
    font-size:14px;
    display:flex;
    justify-content: space-around;
    align-items:center;
    padding:0 50px;

    /* mobile */
    @media (max-width:570px) {

        height:36px;
    }
`