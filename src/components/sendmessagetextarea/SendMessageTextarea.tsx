import React from "react";
import { S } from "./SendMessageTextareaStyles";

type SendMessageTextareaType = {
    placeholder?: string
    width?: string
    padding?: string
    callback: (text: string) => void
}

type State = {
    value: string
}

export class SendMessageTextarea extends React.Component<SendMessageTextareaType, State> {
    constructor(props:SendMessageTextareaType) {
        super(props)
        this.state = {
            value: '',
        }
    }

    onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>):void => {
        this.setState({
            value: e.currentTarget.value
        })
    }

    render(): React.ReactNode {
        return(
            <S.SendMessageTextarea width={this.props.width} padding={this.props.padding}>
                <S.TextArea value={this.state.value} onChange={this.onChangeHandler} placeholder={this.props.placeholder ? this.props.placeholder : 'Type your minds'}/>
                <S.PostBtn onClick={()=> this.props.callback(this.state.value)}>Send</S.PostBtn>
            </S.SendMessageTextarea>
        )
    }
}