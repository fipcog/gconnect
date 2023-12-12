import type { Meta, StoryObj } from '@storybook/react';
import { ContactsListItem } from './ContactsListItem';
import { BrowserRouter } from 'react-router-dom';

const navDecorator = (foo:any) => {
    return <BrowserRouter>{foo()}</BrowserRouter>
}

const meta: Meta<typeof ContactsListItem> = {
    title: 'Social/ContactsListItem',
    component: ContactsListItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [navDecorator],
    argTypes: {
    },
    args: {
        image: 'https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png',
        id: 'asdasfsdf',
        name: 'Vladimir',
    }
};

export default meta;
type Story = StoryObj<typeof ContactsListItem>;

export const main: Story = {
    
};


