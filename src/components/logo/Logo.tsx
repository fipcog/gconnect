import React from "react";
import logo from "../../logo.svg"
import styled from "styled-components";
import { theme } from "../../style/Theme";

export const Logo = () => {
	return (
		<StyledLogo role='banner' aria-label='Логотип-ссылка на начало страницы'>
			J<span>.</span>ConnecT
		</StyledLogo>
	)
}


const StyledLogo = styled.a`
	position: relative;

	font-size: 34px;
	letter-spacing: 5px;
	color: ${theme.colors.color};

	overflow: hidden;
	cursor: pointer;
	transition: .2s;

	span {
		color: ${theme.colors.altColor};
	}

	&::before {
		content: '';
		display: block;
		width: 100%;
		height: 3px;
		position: absolute;
		bottom: 0;
		right: 100%;

		background-color: ${theme.colors.color};
		transition: .2s;
	}

	&:hover {
		&::before {
			right: 0;
		}
	}
`