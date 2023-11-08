import styled from "styled-components"
import { theme } from "../../style/Theme"
import { Button } from "../Button"


const Posts = styled.section`
    display: flex;
    flex-direction: column;

    padding: 0 70px 0 20px;
    overflow: hidden;
`

const SectionTitlte = styled.h2`
    margin-bottom: 20px;
`

export const S = {
    Posts,
    SectionTitlte,
}