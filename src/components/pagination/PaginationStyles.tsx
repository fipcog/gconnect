import styled from "styled-components"
import { theme } from "../../style/Theme"
import { Button } from "../Button"


type PaginationButtonType = {
    active: boolean
}


const Pagination = styled.ul`
    display: flex;
    align-items: center;
    gap: 10px;

    margin: 0 auto;
    margin-bottom: 60px;
    list-style: none;
`

const PageButton = styled.a<PaginationButtonType>`
    cursor: pointer;
    text-decoration: ${props => props.active ? 'underline' : 'none'};
    font-weight: ${props => props.active ? 'bold' : 'inherit'};
`

const PaginationButton = styled(Button)`
    width: 40px;
`

export const S = {
    Pagination,
    PageButton,
    PaginationButton,
}