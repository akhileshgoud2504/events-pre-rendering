import EventList from "../../components/event-list";
import { getAllEvents } from "../../helper/api-utils";

export default function AllEvents(props: any) {
    return (
      <div>
        <EventList items={props.events} />
      </div>
    )
}

export async function getStaticProps(){
  const featuredEvents = await getAllEvents();
  return{
    props:{
      events: featuredEvents
    }
  }
}