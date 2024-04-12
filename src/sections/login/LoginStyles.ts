import { styled } from 'styled-components';
import { theme } from './../../style/Theme';
import { Button } from '../../components/Button';

const LoginForm = styled.div`
  color: ${theme.colors.bodyBgr};
`

const LoginHeader = styled.h1``

const LoginTipContainer = styled.div``

const LoginFieldset = styled.fieldset``

const InputContainer = styled.div``

const LoginInput = styled.input``

const LoginButton = styled(Button)``

const LoginLabel = styled.label``

export const S = {
  LoginForm,
  LoginHeader,
  LoginTipContainer,
  LoginFieldset,
  InputContainer,
  LoginInput,
  LoginButton,
  LoginLabel
}