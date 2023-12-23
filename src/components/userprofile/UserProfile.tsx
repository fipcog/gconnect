import React from 'react';
import { S } from './UserProfileStyles';
import profileimage from '../../assets/wallpaper.jpg';
import userimage from '../../assets/userimage.jpg';
import { FlexWrapper } from '../../components/FlexWrapper';
import { UserImage } from '../../components/userImage/UserImage';
import { ProfileType } from '../../reducers/profileReducer';

type PropsType = {
    profile: ProfileType
}

export const UserProfile: React.FC<PropsType> = (props) => {
    return (
        <FlexWrapper height='200px' margin='10px 0 0 0'>
            <UserImage width='150px' height='150px' image={userimage} margin='0 50px 0 0' />
            <FlexWrapper direction='column' width='auto'>
                <S.UserName>{props.profile?.fullName}</S.UserName>
                <span>Date of birth: Date</span>
                <S.UserAddress>
                    <span>City: City</span>
                    <span>Address: Address</span>
                    <span>Web Site: http://mysite.com</span>
                </S.UserAddress>
            </FlexWrapper>
        </FlexWrapper>
    )
}