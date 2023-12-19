import React from 'react';
import { S } from './HeaderStyles';
import { Logo } from '../../components/logo/Logo';
import { NavLink } from 'react-router-dom';

type PropsType = {
    isAuth: boolean
    login: () => void
}

export const Header: React.FC<PropsType> = ({isAuth, login}) => {
    return (
        <S.DesctopHeader>
            <Logo/>
            {isAuth ? <span>Logged</span> : <NavLink to='/login'>Login</NavLink>}
        </S.DesctopHeader>
    )
}