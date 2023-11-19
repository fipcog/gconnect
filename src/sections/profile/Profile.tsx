import  React  from 'react';
import { S } from './ProfileStyles';
import profileimage from  '../../assets/wallpaper.jpg';
import Posts from '../../components/posts/Posts';
import { UserProfile } from '../../components/userprofile/UserProfile';


export const Profile: React.FC = () => {
    return (
        <S.Profile>
            <S.ProfileImage src={profileimage}/>
            <UserProfile/>
            <Posts/>
        </S.Profile>
    )
}