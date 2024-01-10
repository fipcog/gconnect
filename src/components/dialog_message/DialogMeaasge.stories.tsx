import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DialogMessage } from './DialogMeaasge';


const meta: Meta<typeof DialogMessage> = {
    title: 'Social/DialogMessage',
    component: DialogMessage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
    args: {
        image: 'https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png',
        userName: 'Oleg',
        children: 'Hello World!!',
    }
};

export default meta;
type Story = StoryObj<typeof DialogMessage>;

export const main: Story = {
    
};


