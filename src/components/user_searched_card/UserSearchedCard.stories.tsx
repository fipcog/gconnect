import type { Meta, StoryObj } from '@storybook/react';
import { UserSearchedCard } from './UserSearchedCard';


const meta: Meta<typeof UserSearchedCard> = {
    title: 'Social/UserSearchedCard',
    component: UserSearchedCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        followUser: {
            action: 'clicked'
        },
        unfollowUser: {
            action: 'clicked'
        }
    },
};

export default meta;
type Story = StoryObj<typeof UserSearchedCard>;

export const followed: Story = {
    args: {
        user: {
            id:'2', avatarURL:'https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png', 
            followed: true, 
            status: 'I am looking for a job...', 
            fullName: 'Sergey Volga', 
            location: {city: 'Minsk', country: 'Belarus'}}
    }
};

export const unfollowed: Story = {
    args: {
        user: {
            id:'1', 
            avatarURL:'https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png', 
            followed: false, 
            status: 'I am looking for a job...', 
            fullName: 'Alex Nekrasov', 
            location: {city: 'Minsk', country: 'Belarus'},
        }
    }    
};
