import styled from 'styled-components';

const BodyImageCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const ImageBox = styled.div`
  display: grid;
  margin: 0 auto;
  width: 100%;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  position: relative;
  justify-content: space-between;
  max-width: 1200px;
  padding: 20px;
`;

const ImageCard = styled.div`
  position: relative;
  width: 100%;
  justify-content: center;
  text-align: center;
  background-color: rgba(247, 215, 181, 0.95);
  border: 5px solid rgb(9, 26, 58);
  border-radius: 8px;
  aspect-ratio: 3 / 4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TeamRole = styled.div`
  margin-top: 10px;
  width: fit-content;
  text-align: center;
  color: black;
  font-family: "Press Start 2P", system-ui;
  font-size: 24px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 6px;
  object-fit: cover;
`;

const TeamName = styled.div`
  margin-top: 10px;
  width: fit-content;
  text-align: center;
  min-height: 65px;
  color: black;
  font-family: "Press Start 2P", system-ui;
  font-size: 24px;
`;

const TitleContainerTeam = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
  margin-bottom: 2%;
`;

interface TeamCardProps {
  nameTeam: string;
  role: string;
  image: string;
}

export const TeamCard = ({ nameTeam, role, image }: TeamCardProps) => {
  return (
    <ImageCard>
      <TeamRole>{role}</TeamRole>
      <Image src={image} alt="Img" />
      <TeamName>{nameTeam}</TeamName>
    </ImageCard>
  );
};

function Team() {
  return (
    <BodyImageCard>
      <TitleContainerTeam className='russo-36'>
        <div className='pixel-36'>Наша команда</div>
      </TitleContainerTeam>
      <ImageBox>
        <TeamCard nameTeam='Алексеей Сицеевич' role='Носорог' image='./src/assets/team_1.png' />
        <TeamCard nameTeam='Эдриан Тумс' role='Стервятник' image='./src/assets/team_2.png' />
        <TeamCard nameTeam='Максвелл Диллон' role='Электро' image='./src/assets/team_3.png' />
        <TeamCard nameTeam='Норман Озборн' role='Гоблин' image='./src/assets/team_4.png' />
      </ImageBox>
    </BodyImageCard>
  );
}

export default Team;
