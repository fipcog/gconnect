import React from 'react'
import styled from 'styled-components'

type FlexWrapperType = {
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
    gap?: string;
    width?: string;
    height?: string;
}

export const FlexWrapper = styled.div<FlexWrapperType>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};

    max-width: ${props => props.width || "100%"};
    width: 100%;
    height: ${props => props.height || "100%"};
    gap: ${props => props.gap || "inherit"};
`