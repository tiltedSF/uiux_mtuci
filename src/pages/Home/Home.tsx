import { useNavigate } from 'react-router-dom'
import './Home.css';

function Home() {
    const navigate = useNavigate()   
    return (
        <div>
            <img src='./src/assets/chill_boy.png' alt='chill_boy' className='image-chill_boy'/>
            <div className="text-container">
                <div className='pixel-96'>МЫ - Первые AI ЧТО-ТО</div>
            </div>
            <div className='text-container'>
                <div className='pixel-24'>
                    Вы везде сылышите про AI, но никогда не поддерживайте разговор об этом, так как считаете, что это не про вас. 
                    <p>Теперь это не так!</p>
                </div>
            </div>
            <div className='button-container'>
                <div className='special-button-home' onClick={()=> navigate('/about')}><div className='pixel-24'>Почему это не так ?</div></div>
            </div>

        </div>
    );
}
export default Home;