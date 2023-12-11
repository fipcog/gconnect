import styled from "styled-components"
import { theme } from "../../style/Theme"
import { Button } from "../Button"





const Pagination = styled.ul`
    display: flex;
    align-items: center;
    gap: 10px;

    margin: 0 auto;
    margin-bottom: 60px;
`

const PageButton = styled.a`
    cursor: pointer;
`

const PaginationButton = styled(Button)`
    width: 60px;
`

export const S = {
    Pagination,
    PageButton,
    PaginationButton,
}