import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';
import { useState } from 'react';



const meta: Meta<typeof Pagination> = {
    title: 'Social/Pagination',
    component: Pagination,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // changePage: {
        //     action: 'clicked'
        // }
    },
    args: {
        // pagesAmount: 100
    }
};

export default meta;
type Story = StoryObj<typeof Pagination>;

const ServiceComponent = (amount: number, startPage: number) => {
    const [currentPage, setCurrentPage] = useState<number>(startPage)
    return <Pagination currentPage={currentPage} changePage={(pNum: number) => setCurrentPage(pNum)} pagesAmount={amount}/>
}

export const listOf_100: Story = {
    render: () => ServiceComponent(100, 1)
};

export const listOf_4: Story = {
    render: () => ServiceComponent(4, 3)
};

