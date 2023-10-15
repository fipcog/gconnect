import  React  from 'react';
import { Route } from 'react-router-dom';
import { S } from './MainStyles';
import { Profile } from '../profile/Profile';
import { Dialogs } from '../dialog/Dialogs';
import { News } from '../news/News';
import { Music } from '../music/Music';
import { Settings } from '../settings/Settings';


export const Main: React.FC = () => {
    return(
        <S.Main>
            <Route path={'/profile'} component={ () => <Profile/> }/>
            <Route path={'/dialogs'} component={ () => <Dialogs/> }/>
            <Route path={'/news'} component={ () => <News/>}/>
            <Route path={'/music'} component={ () => <Music/>}/>
            <Route path={'/settings'} component={ () => <Settings/>}/>
        </S.Main>
    )
}