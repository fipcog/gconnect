import React from 'react';
import { S } from './HeaderStyles';
import { Logo } from '../../components/logo/Logo';
import { NavLink } from 'react-router-dom';



export const Header: React.FC = () => {
    return (
        <S.DesctopHeader>
            <Logo/>
            <NavLink to='/login'>Login</NavLink>
        </S.DesctopHeader>
    )
}