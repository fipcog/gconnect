import styled from "styled-components";
import { theme } from "../style/Theme";

export const SiteWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 1170px;
    width: 100%;
    height: 100vh;

    margin: 0 auto;
    padding: 15px;

    background-color: ${theme.colors.secondaryBgr};

    overflow: hidden;
`