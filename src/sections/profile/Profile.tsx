import  React  from 'react';
import { S } from './ProfileStyles';
import profileimage from  '../../assets/wallpaper.jpg';
import { Posts } from '../../components/posts/Posts';
import { UserProfile } from '../../components/userprofile/UserProfile';
import { UserPosts } from '../../reducers/profileReducer';


type ProfilePropsTypes = {
    userPosts: UserPosts
}

export const Profile: React.FC<ProfilePropsTypes> = ({userPosts}) => {
    return (
        <S.Profile>
            <S.ProfileImage src={profileimage}/>
            <UserProfile/>
            <Posts userPosts={userPosts}/>
        </S.Profile>
    )
}