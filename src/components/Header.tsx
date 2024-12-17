import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
    display: flex;
    margin: 0;
    height: 60px;
    width: 100vw;
    background-color: rgba(9, 26, 58, 0.7);
    position: fixed;
    top: 0;
    z-index: 1000;
`;

const Container = styled.div`
    margin: auto;
    font-weight: 500;
    padding: 12px;
    display: flex;
    align-items: center;
    font-size: 16px;
    justify-content: space-between;
    width: 100%;
`;

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
`;

const ButtonHeader = styled.button`
    margin-left: 10px;
    padding: 10px 18px;
    font-family: "Press Start 2P", system-ui;
    font-size: 16px;
    font-weight: 500;
    background-color: rgb(210, 94, 76);
    color: rgb(255, 255, 255);
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

function Header() {
    const navigate = useNavigate();
    return (
        <HeaderWrapper>
            <Container>
                <ButtonsContainer>
                    <ButtonHeader onClick={() => navigate('/')}>Главная</ButtonHeader>
                    <ButtonHeader onClick={() => navigate('/about')}>Подробнее</ButtonHeader>
                    <ButtonHeader onClick={() => navigate('/team')}>Наша команда</ButtonHeader>
                </ButtonsContainer>
                <ButtonHeader onClick={() => navigate('/price')}>Цены</ButtonHeader>
            </Container>
        </HeaderWrapper>
    );
}

export default Header;
