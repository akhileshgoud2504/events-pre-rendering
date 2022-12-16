import EventItem from "./event-item";

const EventList = (props:any) => {
    const { items } = props;
    return(
        <ul>
            {items.map((event:any)=>{
                return (
                    <li>
                        <EventItem
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            location={event.location}
                            date={event.date}
                            image={event.image}
                        />
                    </li>
                )
            })}
        </ul>
    )
}

export default EventList;