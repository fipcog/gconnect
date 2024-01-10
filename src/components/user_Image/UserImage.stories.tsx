import type { Meta, StoryObj } from '@storybook/react';
import { UserImage } from './UserImage';



const meta: Meta<typeof UserImage> = {
    title: 'Social/UserImage',
    component: UserImage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        image: 'https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png'
    }
};

export default meta;
type Story = StoryObj<typeof UserImage>;

export const normal: Story = {
    
};


export const big: Story = {
    args: {
        width: '300px',
        height: '300px',
    }
};

export const small: Story = {
    args: {
        width: '20px',
        height: '20px',
    }    
};
