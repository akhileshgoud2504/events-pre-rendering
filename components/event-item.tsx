import EventItemClass from './event-item.module.css';
import AddressIcon from './icons/address-icon';
import ArrowRightIcon from './icons/arrow-right-icon';
import DateIcon from './icons/date-icon';
import Button from './ui/button';

const EventItem = (props:any) => {
    const { title, image, date, location, id } = props;

    const eventDate = new Date(date).toLocaleDateString('en-US',{
        day:'numeric',
        month: 'long',
        year: 'numeric'
    });
    
    const eventAddress = location.replace(', ','\n');
    const exportLink = `/events/${id}`;

    return(
        <li className={EventItemClass.item}>
            <img src={'/' + image} />
            <div className={EventItemClass.content}>
                <div className={EventItemClass.summary}>
                    <h2>{title}</h2>
                    <div className={EventItemClass.date}>
                        <DateIcon />
                        <time>{eventDate}</time>
                    </div>
                    <div className={EventItemClass.address}>
                        <AddressIcon />
                        <time>{eventAddress}</time>
                    </div>
                </div>
                <div className={EventItemClass.actions}>
                    <Button link={exportLink}>
                    <span>Expore Event</span>
                    <span className={EventItemClass.icon}><ArrowRightIcon /></span>
                    </Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem;