import React from 'react';
import { S } from './HeaderStyles';
import { Logo } from '../../components/logo/Logo';



export const Header: React.FC = () => {
    return (
        <S.DesctopHeader>
            <Logo/>
        </S.DesctopHeader>
    )
}