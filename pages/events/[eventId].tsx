import { useRouter } from "next/router";
import { Fragment } from "react";
import EventContent from "../../components/event-details/event-content";
import EventLogistics from "../../components/event-details/event-logistics";
import EventSummary from "../../components/event-details/event-summary";
import { getAllEvents, getEventById } from "../../helper/api-utils";

export default function EventDetailPage(props:any) {

  const event = props.selectedEvent;
  if(!event){
    return <p>No event found</p>
  }
    return (
      <Fragment>
        <EventSummary title={event.title} />
        <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
        <EventContent><p>{event.description}</p></EventContent>
      </Fragment>
    )
}
export async function getStaticProps(context:any) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);
  return{
    props:{
      selectedEvent: event
    },
    revalidate: 30
  }
}

export async function getStaticPaths() {
    const events = await getAllEvents();
    const paths = events.map(event=>({params:{eventId:event.id}}));
    return{
        paths : paths,
        fallback: true
    }
}