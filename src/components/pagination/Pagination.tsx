import React from "react";
import { Button } from "../Button";
import {S} from './PaginationStyles'

type PaginationType = {
    pagesAmount: number
    changePage: (pageNum: number) => void
}
type StateType = {
    portionIndex: number
    amount: number
}

export class Pagination extends React.Component<PaginationType, StateType> {
    constructor(props: PaginationType) {
        super(props)
        this.state = {
            portionIndex: 0,
            amount: 10
        }
    }

    prevPortion = () => {
        if(this.state.portionIndex > 0) {
            this.setState((prevState) => ({portionIndex: prevState.portionIndex - 1}))
        }
    }

    nextPortion = () => {
        if(this.state.portionIndex < (this.props.pagesAmount - this.state.amount) / this.state.amount) {
            this.setState((prevState) => ({portionIndex: prevState.portionIndex + 1}))
        }
    }

    render(): React.ReactNode {

        const pages = []
        for (let i = 1; i <= this.props.pagesAmount; i++) {
            pages.push(i)
        }
        const start = this.state.portionIndex ? (this.state.amount * this.state.portionIndex - 1) : 0
        const end = this.state.amount * this.state.portionIndex + this.state.amount
        const currentPages = pages.slice(start, end)

        return <S.Pagination>
            <li><S.PaginationButton onClick={this.prevPortion}>{'<<'}</S.PaginationButton></li>
            {currentPages.map(pNum => {
                return <li onClick={() => this.props.changePage(pNum)}><S.PageButton>{pNum}</S.PageButton></li>
            })}
            <li><S.PaginationButton  onClick={this.nextPortion}>{'>>'}</S.PaginationButton></li>
        </S.Pagination>
    }
}