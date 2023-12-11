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
            id:'2',
            photos: {small:'https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png', large: null}, 
            followed: true, 
            status: 'I am looking for a job...', 
            name: 'Sergey Volga', 
        }
    }
};

export const unfollowed: Story = {
    args: {
        user: {
            id:'1', 
            photos: {small:'https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png', large: null},
            followed: false, 
            status: 'I am looking for a job...', 
            name: 'Alex Nekrasov', 
        }
    }    
};
