import  React  from 'react';
import { S } from './MainStyles';
import { Profile } from '../profile/Profile';

export const Main: React.FC = () => {
    return(
        <S.Main>
            <Profile/>
        </S.Main>
    )
}