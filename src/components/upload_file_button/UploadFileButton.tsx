import styled from "styled-components"
import { FlexWrapper } from "../FlexWrapper"
import { Button } from "../Button"
import React from "react"

type Props = {
    children?: string
    onChange: (value: File) => void
}

export const UploadFileButton = ({ children, onChange }: Props) => {

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files?.length) {
            onChange(e.currentTarget.files[0])
        }
    }

    return <FlexWrapper width="auto" height="auto">
        <input type='file' id='upload_user_image' hidden={true} onChange={onInputChange} />
        <Button as={UploadFileLabel} htmlFor="upload_user_image">{children}</Button>
    </FlexWrapper>
}


const UploadFileLabel = styled.label`
    width: auto;
    padding: 10px 15px 10px 15px;
`