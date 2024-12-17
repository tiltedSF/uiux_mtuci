import styled from 'styled-components';

const BodyCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
`;

const CardContainer = styled.div`
  display: grid;
  margin: 0;
  width: 100%;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(310px, 310px));
  position: relative;
  justify-content: space-between;
  max-width: 1200px;
  padding: 20px;
  flex-grow: 1;
`;

const Card = styled.div`
  margin: 5%;
  width: fit-content;
  text-align: center;
  border: 2px solid transparent;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CardStandart = styled(Card)`
  border-color: #25df22;
  height: 380px;
  width: 300px;
  box-shadow: 10px 1px 71px -11px #25df22;
  &:hover {
    border-color: #04ff00;
    box-shadow: 10px 1px 71px -11px #04ff00;
  }
`;

const CardVip = styled(Card)`
  border-color: #d6d42b;
  height: 400px;
  width: 400px;
  box-shadow: 10px 1px 71px -11px #d6d42b;
  &:hover {
    border-color: #fffb00;
    box-shadow: 10px 1px 71px -11px #fffb00;
  }
`;

const CardExclusive = styled(Card)`
  border-color: #be0505;
  margin-left: 125px;
  height: 460px;
  width: 500px;
  box-shadow: 10px 1px 71px -11px #be0505;
  &:hover {
    border-color: #ff0000;
    box-shadow: 10px 1px 71px -11px #ff0000;
  }
`;

const NameCard = styled.div`
  margin: auto;
  margin-top: 5%;
  width: fit-content;
  text-align: center;
`;

const NameCardCardStandart = styled.div`
  color: #25df22;
  font-family: "DotGothic16", sans-serif;
  font-size: 36px;
`;

const NameCardCardVip = styled.div`
  color: #d6d42b;
  font-family: "DotGothic16", sans-serif;
  font-size: 36px;
`;

const NameCardCardExclusive = styled.div`
  color: #be0505;
  font-family: "DotGothic16", sans-serif;
  font-size: 36px;
`;

const PriceCard = styled.div`
  margin: auto;
  margin-bottom: 8%;
  width: fit-content;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const TextCardContainer = styled.div`
  margin-left: 5%;
  margin-bottom: 5%;
  width: fit-content;
  text-align: left;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4%;
  margin-bottom: 4%;
`;

const ExploreContainer = styled.div`
  margin-top: 10%;
  text-align: center;
`;

const ButtonExplore = styled.div`
  padding: 11px 22px 8px 22px;
  font-family: "Press Start 2P", system-ui;
  font-size: 16px;
  font-weight: 500;
  display: inline-block;
  color: white;
  text-decoration: none;
  background-color: black;
  border: 2px solid #909090;
  border-radius: 20px;
`;

interface subCardProps {
  subName: string;
  nameSub: string;
  price: string;
  positions1: string;
  positions2: string;
  positions3: string;
  positions4: string;
  positions5: string;
}

export const TicketCard = ({
  subName,
  nameSub,
  price,
  positions1,
  positions2,
  positions3,
  positions4,
  positions5,
}: subCardProps) => {
  const CardComponent =
    subName === 'card-standart'
      ? CardStandart
      : subName === 'card-vip'
      ? CardVip
      : CardExclusive;

  const NameCardComponent =
    subName === 'card-standart'
      ? NameCardCardStandart
      : subName === 'card-vip'
      ? NameCardCardVip
      : NameCardCardExclusive;

  return (
    <CardComponent>
      <NameCardComponent>{nameSub}</NameCardComponent>
      <PriceCard className='pixel-24'>{price}</PriceCard>
      <TextCardContainer className='smr-18'>{positions1}</TextCardContainer>
      <TextCardContainer className='smr-18'>{positions2}</TextCardContainer>
      <TextCardContainer className='smr-18'>{positions3}</TextCardContainer>
      <TextCardContainer className='smr-18'>{positions4}</TextCardContainer>
      <TextCardContainer className='smr-18'>{positions5}</TextCardContainer>
      {subName !== 'card-standart' && (
        <ExploreContainer>
          <ButtonExplore>Оформить!</ButtonExplore>
        </ExploreContainer>
      )}
    </CardComponent>
  );
};

function Price() {
  return (
    <BodyCard>
      <TitleContainer>
        <div className='pixel-36'>Выберете подписку !</div>
      </TitleContainer>
      <CardContainer>
        <TicketCard
          subName='card-standart'
          nameSub='Обычная'
          price='FREE'
          positions1='&#10003; Доступ к чату'
          positions2='&#10060; Генерация картинок'
          positions3='&#10060; Умение читать файлы'
          positions4='- 10 запросов в день'
          positions5='- Ожидание = 30 мин.'
        />
        <TicketCard
          subName='card-vip'
          nameSub='AI FanClub'
          price='100$'
          positions1='&#10003; Доступ к чату'
          positions2='&#10003; Генерация картинок'
          positions3='&#10060; Умение читать файлы'
          positions4='- 500 запросов в день'
          positions5='- Ожидание ~ 1 мин.'
        />
        <TicketCard
          subName='card-exclusive'
          nameSub='Sigma PLUS'
          price='500$'
          positions1='&#10003; Доступ к чату'
          positions2='&#10003; Генерация картинок'
          positions3='&#10003; Умение читать файлы'
          positions4='- Неограниченное кол-во запросов в день'
          positions5='- Ожидание ~ 30 сек.'
        />
      </CardContainer>
    </BodyCard>
  );
}

export default Price;
