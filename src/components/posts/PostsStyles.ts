import styled from "styled-components"
import { theme } from "../../style/Theme"
import { Button } from "../Button"


const Posts = styled.section`
    display: flex;
    flex-direction: column;

    padding: 0 70px 0 20px;
    overflow: hidden;
`

const SectionTitlt = styled.h2`
    margin-bottom: 20px;
`
const TextArea = styled.textarea`
    width: 100%;
    height: 80px;

    margin-bottom: 20px;
    padding: 5px 10px;

    font-size: 1em;

    border: none;
    border-radius: 10px;
    background-color: ${theme.colors.accent};
    outline-color: ${theme.colors.primaryBgr};
`

const PostBtn = styled(Button)`
    align-self: flex-end;
    margin-bottom: 20px;
`

export const S = {
    Posts,
    SectionTitlt,
    TextArea,
    PostBtn,
}