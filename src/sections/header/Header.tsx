import React from 'react';
import { S } from './HeaderStyles';
import { Logo } from '../../components/logo/Logo';
import { NavLink } from 'react-router-dom';
import { Button } from '../../components/Button';

type PropsType = {
    isAuth: boolean
    logOut: () => void
}

export const Header: React.FC<PropsType> = ({isAuth, logOut}) => {
    return (
        <S.DesctopHeader>
            <Logo/>
            {isAuth ? <Button onClick={logOut}>LogOut</Button> : <NavLink to='/login'>Login</NavLink>}
        </S.DesctopHeader>
    )
}