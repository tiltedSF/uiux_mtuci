import { useState, useEffect } from 'react';
import './About.css';

const catApiUrl = 'https://api.thecatapi.com/v1/images/search?limit=1';
const textApiUrl = 'https://baconipsum.com/api/?type=meat-and-filler';
const apiKey = 'live_LqG0OOe8rQuEbrMs0tohElFFY2BvtV0TKoYGF0qW5TluArY5CQ5M6RNHJthXt8n';

const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
};

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
            <div className='text-container-about-title'>
                <div className='container-about-title'>
                    <div className='pixel-48'>AI - это много что</div>
                </div>
                <div className='smr-18'>
                <p>AI становится все более важной частью нашей повседневной жизни. От помощников по дому до сложных систем в медицине и финансах, AI меняет то, как мы взаимодействуем с миром.</p>
                <p>AI помогает нам автоматизировать рутинные задачи, делая нашу жизнь проще и эффективнее. Виртуальные помощники, такие как Siri и Alexa, помогают нам управлять нашим расписанием, напоминать о важных делах и даже контролировать умный дом. В медицине AI используется для диагностики заболеваний, разработки лекарств и даже проведения операций с высокой точностью.</p>
                <p>В финансовой сфере AI анализирует огромные объемы данных для выявления мошенничества, управления инвестициями и предоставления персонализированных финансовых советов. В образовании AI помогает создавать индивидуальные учебные планы, адаптированные под потребности каждого ученика, и предоставляет доступ к обучению в любое время и в любом месте.</p>
                <p>Присоединяйся к нашему AI сообществу и открой для себя новые возможности! Вместе мы можем сделать мир лучше и удобнее для всех.</p>
                </div>
            </div>
            <div className='box-for-images-first'>
                {imageUrl && <img src={imageUrl} alt="Cat Image" className='image-kitten' />}
                <button onClick={loadNewImage} className='text-image'>Нажми, чтоб получить котика из AI</button>
            </div>

            <div className='text-container-about-first'>
                <div className='container-about-title'>
                    <div className='pixel-48'>Картиночки</div>
                </div>
                <div className='smr-28'>
                    <p>С помощью AI мы можем создавать уникальные изображения, которые не только радуют глаз, но и могут использоваться в различных областях, таких как дизайн, маркетинг и искусство.</p>
                    <p>Нажми на кнопку справа, чтобы получить новое изображение котика и увидеть, как AI может удивлять и вдохновлять.</p>
                </div>
            </div>

            <div className='box-for-images-scnd'>
                <div className='image-text'>
                    <p className='smr-18'>{truncateText(text, maxTextLength)}</p>
                </div>
                <button onClick={loadNewText} className='text-image'>Нажми, чтоб получить текст из AI</button>
            </div>

            <div className='text-container-about-scnd'>
                <div className='container-about-title'>
                    <div className='pixel-48'>Текстики</div>
                </div>
                <div className='smr-28'>
                    <p>AI не только помогает нам с изображениями, но и создает уникальный контент.</p>
                    <p>От статей до стихов, AI может генерировать текст, который вдохновляет и информирует.</p>
                    <p>Попробуй сгенерировать новый текст прямо сейчас слева!</p>
                </div>
            </div>
        </div>
    );
}

export default About;
