import React from 'react'
import styled from 'styled-components'

type FlexWrapperType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
    width?: string
    height?: string
    margin?: string
    padding?: string
}

export const FlexWrapper = styled.div<FlexWrapperType>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};

    width: ${props => props.width || "100%"};
    height: ${props => props.height || "100%"};
    gap: ${props => props.gap || "inherit"};

    padding: ${props => props.padding || "0"};
    margin: ${props => props.margin || "0"};
`