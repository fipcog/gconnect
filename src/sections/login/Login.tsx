import { FC } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";
import S from './LoginStyles'


export type LoginValues = {
    email: string
    password: string
    rememberMe: boolean
}
type LoginType = {
    isLogged: boolean
    onSubmit: (email: string, password: string, rememberMe: boolean) => void
}

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Type your email'),
    password: Yup.string().required('Type your password').min(3, 'Password is too short'),
})

export const Login: FC<LoginType> = ({ onSubmit, isLogged }) => {
    const { handleSubmit, getFieldProps, touched, errors, resetForm } = useFormik<LoginValues>({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: (values) => {
            onSubmit(values.email, values.password, values.rememberMe)
            console.log(values)
            resetForm()
        },
        validationSchema
    })

    return <form onSubmit={handleSubmit}>
        {isLogged && <Redirect to={'/profile'} />}
        <h1 style={{ color: 'black' }}>Log in</h1>
        <div>
            <p>To log in get registered
                <a href={'https://social-network.samuraijs.com/'}
                    target={'_blank'} rel="noreferrer"> here
                </a>
            </p>
            <p>or use common test account credentials:</p>
            <p><b>Email:</b> free@samuraijs.com</p>
            <p><b>Password:</b> free</p>
        </div>
        <fieldset>
            <div>
                <input type={'email'} placeholder="Email" autoComplete="off" {...getFieldProps('email')} />
                {touched.email && errors.email && <span>{errors.email}</span>}
            </div>
            <div>
                <input type={'password'} placeholder="Password" {...getFieldProps('password')} />
                {touched.password && errors.password && <span>{errors.password}</span>}
            </div>
            <label>
                <input type="checkbox" id={'login_form_remember_checkbox'} {...getFieldProps('rememberMe')} />
                Remember me
            </label>
            <button type={'submit'} className={'login_btn'}>Login</button>
        </fieldset>
    </form >
}