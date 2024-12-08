import { useNavigate } from 'react-router-dom';
import './header.css';

function Header() {
    const navigate = useNavigate();
    return (
        <header>
            <div className="container">
                <div className="buttons-container">
                    <button className='button-header' onClick={() => navigate('/')}>Главная</button>
                    <button className='button-header' onClick={() => navigate('/about')}>Подробнее</button>
                    <button className='button-header' onClick={() => navigate('/team')}>Наша команда</button>
                </div>
                <button className='button-header' onClick={() => navigate('/price')}>Цены</button>
            </div>
        </header>
    );
}

export default Header;
