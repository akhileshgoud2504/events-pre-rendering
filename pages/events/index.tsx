import { getAllEvents } from "../../utils/events-data";
import EventList from "../../components/event-list";

export default function AllEvents() {
  const allEvents = getAllEvents();
    return (
      <div>
        <EventList items={allEvents} />
      </div>
    )
}