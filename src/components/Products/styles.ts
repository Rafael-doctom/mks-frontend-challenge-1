import styled from 'styled-components'

export const ProductsContainer = styled.main`

    height:100vh; 
    display:grid;
    align-content: center;
    justify-content: center;
    grid-template-columns: auto auto auto auto;
    gap:30px 22px;
    padding:20px 0;

    /* desktop */
    @media (max-width:1020px) {

        grid-template-columns: auto auto auto;
        height:100%;
    }

    /* tablet */
    @media (max-width:800px) {

        grid-template-columns: auto auto;
    }

    /* mobile */
    @media (max-width:570px) {

        grid-template-columns: auto;
    }
`