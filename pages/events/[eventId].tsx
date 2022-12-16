import { useRouter } from "next/router";
import { Fragment } from "react";
import EventContent from "../../components/event-details/event-content";
import EventLogistics from "../../components/event-details/event-logistics";
import EventSummary from "../../components/event-details/event-summary";
import { getEventById } from "../../utils/events-data";

export default function EventDetailPage() {
  const eventId = useRouter().query.eventId;

  const event = getEventById(eventId);
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