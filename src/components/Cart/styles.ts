import styled from 'styled-components'
import Colors from '../../theme/colors'

export const CartContainer = styled.button`
    border-radius:8px;
    background-color:${Colors.background.white};
    width:90px;
    height:45px;
    color:${Colors.text.black};
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