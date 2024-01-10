import { useFormik } from "formik"
import React from "react"
import { Button } from "../Button"
import  * as Yup  from 'yup';
import { S } from "./MessageFormStyles";

type MessageForm = {
    onSubmit: (data: string) => void
    placeholder?: string
    width?: string
    padding?: string  
}
const validationSchema = Yup.object().shape({
    message: Yup.string().required("Message can't be ampty")
})

export const MessageForm: React.FC<MessageForm> = ({onSubmit, placeholder, width, padding}) => {
    const {handleSubmit, resetForm, getFieldProps, errors} = useFormik({
        initialValues: {
            message: '',
        },
        onSubmit: (values)=> {
            onSubmit(values.message)
            resetForm()
        },
        // validate: (values) => {
        //     if(!values.message.length) {
        //         errors.message = "Message can't be ampty"
        //     }
        // },
        validationSchema
    })

    return <S.SendMessageForm onSubmit={handleSubmit} width={width} padding={padding}>
        <S.TextArea {...getFieldProps("message")} placeholder={placeholder ?? "Type your message"}/>
        {errors.message && <S.ErrorMassage>{errors.message}</S.ErrorMassage>}
        <S.PostBtn>Send</S.PostBtn>
    </S.SendMessageForm>
}