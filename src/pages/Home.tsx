import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 5%;
  font-weight: 500;
  font-size: 16px;
  margin-top: 7%;
  width: 55vw;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 2rem;
  padding-left: 4%;
  margin-top: 100px;
`;

const SpecialButtonHome = styled.div`
  margin-left: 20px;
  padding: 15px;
  font-family: "Russo One", sans-serif;
  font-size: 16px;
  font-weight: 500;
  display: inline-block;
  color: white;
  text-decoration: none;
  background-color: black;
  border: 2px solid rgb(210, 94, 76);
  -webkit-box-shadow: 0px 0px 50px 50px rgba(210, 94, 76, 0.7);
  -moz-box-shadow: 0px 0px 50px 50px rgba(210, 94, 76, 0.7);
  box-shadow: 0px 0px 0px 50px 50px rgba(210, 94, 76, 0.7);
  border-radius: 25px;
  cursor: pointer;
  &:hover {
    background: black;
    -webkit-box-shadow: 0px 0px 50px 50px rgba(210, 94, 76, 0.99);
    -moz-box-shadow: 0px 0px 50px 50px rgba(210, 94, 76, 0.99);
    box-shadow: 0px 0px 0px 50px 50px rgba(210, 94, 76, 0.99);
    cursor: grab;
  }
`;

const ImageChillBoy = styled.img`
  position: relative;
  height: 300px;
  float: right;
  margin-right: 15%;
  margin-top: 29%;
  -webkit-transition: all 3s ease;
  transition: all 2s ease;
  &:hover {
    margin-top: -100%;
    -webkit-transition: all 3s ease;
    transition: all 3s ease;
  }
`;

function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <ImageChillBoy src='./src/assets/chill_boy.png' alt='chill_boy' />
            <TextContainer>
                <div className='pixel-96'>МЫ - Первые AI ЧТО-ТО</div>
            </TextContainer>
            <TextContainer>
                <div className='pixel-24'>
                    Вы везде слышите про AI, но никогда не поддерживаете разговор об этом, так как считаете, что это не про вас.
                    <p>Теперь это не так!</p>
                </div>
            </TextContainer>
            <ButtonContainer>
                <SpecialButtonHome onClick={() => navigate('/about')}>
                    <div className='pixel-24'>Почему это не так ?</div>
                </SpecialButtonHome>
            </ButtonContainer>
        </div>
    );
}

export default Home;
