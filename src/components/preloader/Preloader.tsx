import styled from 'styled-components'
import preloader from '../../assets/preloader.svg'

export const Preloader: React.FC = () => {
    return <StyledPreloader style={{width:'100%'}}><img src={preloader} alt="loading" style={{width: 50}}/></StyledPreloader>
}

const StyledPreloader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 50px;
`