import  React  from 'react';
import { Route } from 'react-router-dom';
import { S } from './MainStyles';
import { Profile } from '../profile/Profile';
import Dialogs from '../dialog/Dialogs';
import { News } from '../news/News';
import { Music } from '../music/Music';
import { Settings } from '../settings/Settings';
import UsersContainer from '../users/UsersContainer';
import ProfileContainer from '../profile/ProfileContainer';

export const Main: React.FC = () => {
    return(
        <S.Main>
            <Route path={'/profile/:userId'} render={ () => <ProfileContainer/> }/>
            <Route path={'/dialogs'} render={ () => <Dialogs/> }/>
            <Route path={'/news'} render={ () => <News/>}/>
            <Route path={'/music'} render={ () => <Music/>}/>
            <Route path={'/find_users'} render={ () => <UsersContainer/>}/>
            <Route path={'/settings'} render={ () => <Settings/>}/>
        </S.Main>
    )
}