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
            <Route path={'/Profile'} component={ () => <Profile/> }/>
            <Route path={'/Dialogs'} component={ () => <Dialogs/> }/>
            <Route path={'/News'} component={ () => <News/>}/>
            <Route path={'/Music'} component={ () => <Music/>}/>
            <Route path={'/Settings'} component={ () => <Settings/>}/>
        </S.Main>
    )
}