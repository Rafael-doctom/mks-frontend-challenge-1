import styled from 'styled-components'
import Colors from '../../theme/colors'

export const FooterContainer = styled.footer`

    height:34px;
    position:sticky;
    bottom:0;
    width:100%;
    background-color:${Colors.background.gray};
    color:${Colors.background.black};
    font-weight:400;
    font-size:12px;
    display:flex;
    align-items:center;
    justify-content:center;
`