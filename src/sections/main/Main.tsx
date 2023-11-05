import  React  from 'react';
import { Route } from 'react-router-dom';
import { S } from './MainStyles';
import { Profile } from '../profile/Profile';
import { Dialogs } from '../dialog/Dialogs';
import { News } from '../news/News';
import { Music } from '../music/Music';
import { Settings } from '../settings/Settings';
import { AppData } from '../../App';

type MainPropsTypes = {
    appData: AppData
}

export const Main: React.FC<MainPropsTypes> = ({appData}) => {
    return(
        <S.Main>
            <Route path={'/profile'} render={ () => <Profile userPosts={appData.profile.userPosts}/> }/>
            <Route path={'/dialogs'} render={ () => <Dialogs dialogsData={appData.dialogs}/> }/>
            <Route path={'/news'} render={ () => <News/>}/>
            <Route path={'/music'} render={ () => <Music/>}/>
            <Route path={'/settings'} render={ () => <Settings/>}/>
        </S.Main>
    )
}