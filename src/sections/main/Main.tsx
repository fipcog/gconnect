import  React  from 'react';
import { Redirect, Route } from 'react-router-dom';
import { S } from './MainStyles';
import { Profile } from '../profile/Profile';
import Dialogs from '../dialog/Dialogs';
import { News } from '../news/News';
import { Music } from '../music/Music';
import { Settings } from '../settings/Settings';
import UsersContainer from '../users/UsersContainer';
import ProfileContainer from '../profile/ProfileContainer';
import { Login } from '../login/Login';
import { Error404 } from '../../components/Error404';
import LoginContainer from '../login/LoginContainer';

export const Main: React.FC = () => {
    return(
        <S.Main>
            {/* <Route path={'/'} render={ () => <Redirect to={'/find_users'}/> }/> */}
            <Route path={'/profile/:userId'} render={ () => <ProfileContainer/> }/>
            <Route path={'/dialogs'} render={ () => <Dialogs/> }/>
            <Route path={'/news'} render={ () => <News/>}/>
            <Route path={'/music'} render={ () => <Music/>}/>
            <Route path={'/find_users'} render={ () => <UsersContainer/>}/>
            <Route path={'/settings'} render={ () => <Settings/>}/>
            <Route path={'/login'} render={() => <LoginContainer/>}/>
            <Route path={'/404'} render={() => <Error404/>}/>
            {/* <Route path={'/*'} render={() => <Redirect to={'/404'}/>}/> */}
        </S.Main>
    )
}