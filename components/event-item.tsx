import Link from "next/link";

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
        <li>
            <img src={'/' + image} />
            <div>
                <h2>{title}</h2>
                <div>
                    <time>{eventDate}</time>
                </div>
                <div>
                    <time>{eventAddress}</time>
                </div>
            </div>
            <div>
                <Link href={exportLink}>Expore Event</Link>
            </div>
        </li>
    )
}

export default EventItem;