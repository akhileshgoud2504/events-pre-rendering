import Router, { useRouter } from "next/router";
import EventList from "../components/event-list";
import EventSearch from "../components/event-search";
import { getFeaturedEvents } from "../utils/events-data";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  const findEvents= (year:any,month:any)=>{
    const fullPath = `/events/${year}/${month}`;
    Router.push(fullPath);
  }

  return (
    <div>
      <EventSearch onSearch={findEvents} />
      <EventList items={featuredEvents} />
    </div>
  )
}
