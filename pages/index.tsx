import EventList from "../components/event-list";
import { getFeaturedEvents } from "../utils/events-data"

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  )
}
