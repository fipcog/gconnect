import  React  from 'react';
import { S } from './MainStyles';
import { Profile } from '../profile/Profile';
import { Dialogs } from '../dialog/Dialogs';

export const Main: React.FC = () => {
    return(
        <S.Main>
            {/* <Profile/> */}
            <Dialogs/>
        </S.Main>
    )
}