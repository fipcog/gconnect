import { FC } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";


export type LoginValues = {
    email: string
    password: string
    remember: boolean
}

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Type your email'),
    password: Yup.string().required('Type your password').min(3, 'Password is too short'),
})

export const Login: FC = () => {
    const {handleSubmit, getFieldProps, touched, errors, resetForm} = useFormik<LoginValues>({
        initialValues: {
            email: '',
            password: '',
            remember: false
        },
        onSubmit: (values) => {
            // dispatch(logInTC(values))
            console.log(values)
            resetForm()
        },
        validationSchema
    })

    return <form  onSubmit={handleSubmit} style={{color: 'black'}}>
        <h1 style={{color: 'black'}}>Log in</h1>
        <div>
            <p>To log in get registered
                <a href={'https://social-network.samuraijs.com/'}
                    target={'_blank'}> here
                </a>
            </p>
            <p>or use common test account credentials:</p>
            <p><b>Email:</b> free@samuraijs.com</p>
            <p><b>Password:</b> free</p>
        </div>
        <fieldset>
            <div>
                <input type={'email'} placeholder="Email" autoComplete="off" {...getFieldProps('email')}/>
                {touched.email && errors.email && <span>{errors.email}</span>}
            </div>
            <div>
                <input type={'password'} placeholder="Password" {...getFieldProps('password')}/>
                {touched.password && errors.password && <span>{errors.password}</span>}
            </div>
            <label>
                <input type="checkbox" id={'login_form_remember_checkbox'} {...getFieldProps('remember')}/>
                Remember me
            </label>
            <button type={'submit'} className={'login_btn'}>Login</button>
        </fieldset>
    </form>
}