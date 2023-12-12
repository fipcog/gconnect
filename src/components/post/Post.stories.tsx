import type { Meta, StoryObj } from '@storybook/react';
import { Post } from './Post';



const meta: Meta<typeof Post> = {
    title: 'Social/Post',
    component: Post,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
        image: 'https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png',
        children: 'Hello World!!',
    }
};

export default meta;
type Story = StoryObj<typeof Post>;

export const main: Story = {

};

