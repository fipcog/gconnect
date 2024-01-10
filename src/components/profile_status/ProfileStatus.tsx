import React from "react";
import { ReactNode } from "react";
import { S } from "./ProfileStatusStyles";

type PropsType = {
    status: string
    changeProfileStatus : (status: string) => void
}

type StateType = {
    isActive: boolean
    status: string
}

export class ProfileStatus extends React.Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props)
        this.state = {
            isActive: false,
            status: this.props.status ?? ''
        }
    }

    setIsActive = (isActive: boolean) => {
        this.setState({isActive: isActive})
    }

    onBlurHandler = (status: string) => {
        this.props.changeProfileStatus(status)
        this.setIsActive(false)
    }

    render(): ReactNode {
        const status = this.state.isActive ?
            <input type={'text'}
                                value={this.state.status} 
                                onChange={e => this.setState({status: e.currentTarget.value})}
                                onBlur={() => this.onBlurHandler(this.state.status)}
                                autoFocus={true}
            />
            :
            <span onDoubleClick={() => this.setIsActive(true)}>{this.props.status ? this.props.status : 'Set your status' }</span>

        return <S.SatusContainer >
                {status}
            </S.SatusContainer>
    }
}