import EventListClass from './event-list.module.css';
import EventItem from "./event-item";

const EventList = (props: any) => {
    const { items } = props;
    return (
        <ul className={EventListClass.list}>
            {items.map((event: any) => {
                return (
                    <EventItem
                        key={event.id}
                        id={event.id}
                        title={event.title}
                        location={event.location}
                        date={event.date}
                        image={event.image}
                    />
                )
            })}
        </ul>
    )
}

export default EventList;