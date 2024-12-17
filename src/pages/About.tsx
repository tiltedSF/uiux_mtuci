import { useState, useEffect } from 'react';
import styled from 'styled-components';

const catApiUrl = 'https://api.thecatapi.com/v1/images/search?limit=1';
const textApiUrl = 'https://baconipsum.com/api/?type=meat-and-filler';
const apiKey = 'live_LqG0OOe8rQuEbrMs0tohElFFY2BvtV0TKoYGF0qW5TluArY5CQ5M6RNHJthXt8n';

const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
};

const TextContainerAboutTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: justify;
  height: 580px;
  padding: 25px;
  font-weight: 500;
  font-size: 16px;
  margin-top: 20px;
  margin-left: 25px;
  width: 90vw;
  background-color: rgba(0, 0, 0, 0.5);
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

const ContainerAboutTitle = styled.div`
  background-color: rgba(64, 0, 0, 0.7);
  padding: 15px;
  border-radius: 10px;
`;

const BoxForImagesFirst = styled.div`
  position: relative;
  float: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 5%;
  margin-top: 30px;
`;

const TextContainerAboutFirst = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: justify;
  height: 575px;
  padding: 25px;
  font-weight: 500;
  font-size: 16px;
  margin-top: 30px;
  margin-left: 25px;
  width: 50vw;
  background-color: rgba(0, 0, 0, 0.5);
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

const BoxForImagesScnd = styled.div`
  position: relative;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
  margin-top: 80px;
`;

const TextContainerAboutScnd = styled.div`
  display: flex;
  float: right;
  flex-direction: column;
  align-items: flex-start;
  text-align: justify;
  height: 575px;
  padding: 25px;
  font-weight: 500;
  font-size: 16px;
  margin-right: 25px;
  width: 50vw;
  background-color: rgba(0, 0, 0, 0.5);
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin-top: 5%;
`;

const ImageKitten = styled.img`
  width: 500px;
  height: 500px;
  border: 7px solid rgba(64, 0, 0, 0.7);
  border-radius: 12px;
  z-index: 1;
`;

const TextImage = styled.button`
  margin-top: 5%;
  color: rgb(210, 94, 76);
  font-family: "Press Start 2P", system-ui;
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.8);
  border: 2px solid rgba(0, 0, 0, 0.5);
  padding: 25px;
  border-radius: 50px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    cursor: grab;
  }
`;

const ImageText = styled.div`
  width: 500px;
  height: 500px;
  border: 7px solid rgba(64, 0, 0, 0.7);
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding-left: 20px;
  padding-right: 20px;
`;

function About() {
    const [imageUrl, setImageUrl] = useState('');
    const [text, setText] = useState('');
    const [imageQueryKey, setImageQueryKey] = useState(Date.now());
    const [textQueryKey, setTextQueryKey] = useState(Date.now());

    useEffect(() => {
        const fetchCatImage = async () => {
            try {
                const response = await fetch(catApiUrl, {
                    headers: {
                        'x-api-key': apiKey
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setImageUrl(data[0].url);
            } catch (error) {
                console.error('Error fetching image URL:', error);
            }
        };

        fetchCatImage();
    }, [imageQueryKey]);

    useEffect(() => {
        const fetchText = async () => {
            try {
                const response = await fetch(textApiUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setText(data[0]);
            } catch (error) {
                console.error('Error fetching text:', error);
            }
        };

        fetchText();
    }, [textQueryKey]);

    const loadNewImage = () => {
        setImageQueryKey(Date.now());
    };

    const loadNewText = () => {
        setTextQueryKey(Date.now());
    };

    const maxTextLength = 600;

    return (
        <div>
            <div className='title-container'>
                <div className='pixel-36'>Почему теперь ты в AI?</div>
            </div>
            <TextContainerAboutTitle>
                <ContainerAboutTitle>
                    <div className='pixel-48'>AI - это много что</div>
                </ContainerAboutTitle>
                <div className='smr-18'>
                    <p>AI становится все более важной частью нашей повседневной жизни. От помощников по дому до сложных систем в медицине и финансах, AI меняет то, как мы взаимодействуем с миром.</p>
                    <p>AI помогает нам автоматизировать рутинные задачи, делая нашу жизнь проще и эффективнее. Виртуальные помощники, такие как Siri и Alexa, помогают нам управлять нашим расписанием, напоминать о важных делах и даже контролировать умный дом. В медицине AI используется для диагностики заболеваний, разработки лекарств и даже проведения операций с высокой точностью.</p>
                    <p>В финансовой сфере AI анализирует огромные объемы данных для выявления мошенничества, управления инвестициями и предоставления персонализированных финансовых советов. В образовании AI помогает создавать индивидуальные учебные планы, адаптированные под потребности каждого ученика, и предоставляет доступ к обучению в любое время и в любом месте.</p>
                    <p>Присоединяйся к нашему AI сообществу и открой для себя новые возможности! Вместе мы можем сделать мир лучше и удобнее для всех.</p>
                </div>
            </TextContainerAboutTitle>
            <BoxForImagesFirst>
                {imageUrl && <ImageKitten src={imageUrl} alt="Cat Image" />}
                <TextImage onClick={loadNewImage}>Нажми, чтоб получить котика из AI</TextImage>
            </BoxForImagesFirst>

            <TextContainerAboutFirst>
                <ContainerAboutTitle>
                    <div className='pixel-48'>Картиночки</div>
                </ContainerAboutTitle>
                <div className='smr-28'>
                    <p>С помощью AI мы можем создавать уникальные изображения, которые не только радуют глаз, но и могут использоваться в различных областях, таких как дизайн, маркетинг и искусство.</p>
                    <p>Нажми на кнопку справа, чтобы получить новое изображение котика и увидеть, как AI может удивлять и вдохновлять.</p>
                </div>
            </TextContainerAboutFirst>

            <BoxForImagesScnd>
                <ImageText>
                    <p className='smr-18'>{truncateText(text, maxTextLength)}</p>
                </ImageText>
                <TextImage onClick={loadNewText}>Нажми, чтоб получить текст из AI</TextImage>
            </BoxForImagesScnd>

            <TextContainerAboutScnd>
                <ContainerAboutTitle>
                    <div className='pixel-48'>Текстики</div>
                </ContainerAboutTitle>
                <div className='smr-28'>
                    <p>AI не только помогает нам с изображениями, но и создает уникальный контент.</p>
                    <p>От статей до стихов, AI может генерировать текст, который вдохновляет и информирует.</p>
                    <p>Попробуй сгенерировать новый текст прямо сейчас слева!</p>
                </div>
            </TextContainerAboutScnd>
        </div>
    );
}

export default About;
