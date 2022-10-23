import styled from 'styled-components'
import Colors from '../../theme/colors'

export const Header = styled.header`

    background-color:${Colors.background.darkBlue};
    position:sticky;
    top:0;
    height:100px;
    color:${Colors.text.white};
    z-index:200;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 28px 65px;
    height:100%;

    /* mobile */
    @media (max-width:570px) {

        height:48px;
        padding: 2px 20px;
    }
`

export const Logo = styled.div`

    display:flex;
    align-items:center;

    p {

        font-weight:600;
        font-size:40px;
        text-align:center;
        margin-right:8px;

        /* mobile */
        @media (max-width:570px) {

            font-size:32px;
        }
    }

    span {

        font-weight:300;
        font-size:20px;     
        margin-top:8px;   

        /* mobile */
        @media (max-width:570px) {

            font-size:16px;
        }
    }
`

