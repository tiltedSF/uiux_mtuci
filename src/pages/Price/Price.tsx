import './Price.css'
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

export const TicketCard = ({subName, nameSub, price, positions1, positions2, positions3, positions4, positions5}: subCardProps) => {
    return (
        <div className={subName}>
            <div className={"name-card-" + subName}>{nameSub}</div>
            <div className='price-card pixel-24'>{price}</div>
                <div className='text-card-container smr-18'>{positions1}</div>
                <div className='text-card-container smr-18'>{positions2}</div>
                <div className='text-card-container smr-18'>{positions3}</div>
                <div className='text-card-container smr-18'>{positions4}</div>
                <div className='text-card-container smr-18'>{positions5}</div>
            {subName !== 'card-standart' && (
            <div className='explore-container'>
                <div className='button-explore'>Оформить!</div>
            </div>
            )}
        </div>
    )
}
function Price() {
    return (
        <div>
            <div className='title-container'>
                <div className='pixel-36'>Выберете подписку !</div>
            </div>
            <div className='card-container'>
                <TicketCard subName='card-standart' 
                            nameSub='Обычная' 
                            price='FREE'
                            positions1='&#10003; Доступ к чату' 
                            positions2='&#10060; Генерация картинок'
                            positions3='&#10060; Умение читать файлы'
                            positions4='- 10 запросов в день'
                            positions5='- Ожидание = 30 мин.' 
                            />    
                <TicketCard subName='card-vip' 
                            nameSub='AI FanClub' 
                            price='100$'
                            positions1='&#10003; Доступ к чату' 
                            positions2='&#10003; Генерация картинок'
                            positions3='&#10060; Умение читать файлы'
                            positions4='- 500 запросов в день'
                            positions5='- Ожидание ~ 1 мин.' 
                            />
                <TicketCard subName='card-exclusive' 
                            nameSub='Sigma PLUS' 
                            price='500$'
                            positions1='&#10003; Доступ к чату' 
                            positions2='&#10003; Генерация картинок'
                            positions3='&#10003; Умение читать файлы'
                            positions4='- Неограниченное кол-во запросов в день'
                            positions5='- Ожидание ~ 30 сек.' 
                            />
            </div>
        </div>       
    )
}
export default Price;