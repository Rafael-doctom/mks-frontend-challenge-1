import styled from "styled-components";

export const ProductsContainer = styled.main`

    height:100vh;
    display:grid;
    align-content: center;
    justify-content: center;
    grid-template-columns: auto auto auto auto;
    gap:30px 22px;

    div {

        height:280px;
        width:220px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        border-radius:8px;
        position:relative;
        display:flex;
        flex-direction:column;

    
        span {

            position:absolute;
            bottom:0;
            height:32px;
            width:100%;
            background-color:#0F52BA;
            border-radius:0 0 8px 8px;
            cursor: pointer;   
        }
    }
`