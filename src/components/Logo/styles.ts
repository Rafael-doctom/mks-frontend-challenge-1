import styled from 'styled-components'

export const LogoContainer = styled.div`

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

