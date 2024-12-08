import './Team.css'

interface TeamCardProps {
    nameTeam: string;
    role: string;
    image: string;
}

export const TeamCard = ({nameTeam, role, image}: TeamCardProps) => {
    return (
        
        <div className='image-card'>
            <div className='team-role'>{role}</div>
            <img src={image} alt="Img" className='image'/>  
            <div className='image'></div>
            <div className='team-name'>{nameTeam}</div>
        </div>
    )
}

function Team() {
    return (
        <div>
            <div className='title-container russo-36'>
                <div className='pixel-36'>Наша команда</div>
            </div>
            <div className='image-box'>
                <TeamCard nameTeam='Алексеей Сицеевич' role='Носорог' image='./src/assets/team_1.png'/>
                <TeamCard nameTeam='Эдриан Тумс' role='Стервятник' image='./src/assets/team_2.png'/>
                <TeamCard nameTeam='Максвелл Диллон' role='Электро' image='./src/assets/team_3.png'/>
                <TeamCard nameTeam='Норман Озборн' role='Гоблин' image='./src/assets/team_4.png'/>
            </div>
        </div>

    )
}
export default Team;