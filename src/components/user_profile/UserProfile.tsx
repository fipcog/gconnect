import React from 'react';
import { S } from './UserProfileStyles';
import defaultImage from '../../assets/defaultUserAvatarImage.png';
import { FlexWrapper } from '../FlexWrapper';
import { UserImage } from '../user_Image/UserImage';
import { ProfileType } from '../../reducers/profileReducer';
import ProfileStatusContainer from '../profile_status/ProfileStatusContainer';
import { Button } from '../Button';
import styled from 'styled-components';
import { UploadFileButton } from '../upload_file_button/UploadFileButton';

type PropsType = {
    profile: ProfileType
    isUsersPage: boolean
    uploadUserImage: (image: File) => void
}

export const UserProfile: React.FC<PropsType> = ({ profile, isUsersPage, uploadUserImage }) => {
    return (
        <FlexWrapper height='200px' margin='40px 0 40px 0' padding='0 0 0 40px'>
            <FlexWrapper width='auto' height='auto' margin='0 50px 0 0' direction='column' gap='10px' justify='center'>
                <UserImage width='150px' height='150px' image={profile?.photos.large || defaultImage} />
                {isUsersPage && <UploadFileButton onChange={uploadUserImage} >Upload Image</UploadFileButton>}
            </FlexWrapper>
            <FlexWrapper direction='column' width='auto'>
                <S.UserName>{profile?.fullName}</S.UserName>
                <ProfileStatusContainer />
                <span>Date of birth: 10 june 1995</span>
                <S.UserAddress>
                    <span>City: Mocked City</span>
                    <span>Address: Minsk, Mockstreet, 101 </span>
                    <span>Web Site: <a href=''>http://mysite.com</a></span>
                </S.UserAddress>
            </FlexWrapper>
        </FlexWrapper>
    )
}
