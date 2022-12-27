import Router, { useRouter } from "next/router";
import EventList from "../components/event-list";
import EventSearch from "../components/event-search";
import { getFeaturedEvents } from "../helper/api-utils";

export default function Home(props:any) {

  const findEvents= (year:any,month:any)=>{
    const fullPath = `/events/${year}/${month}`;
    Router.push(fullPath);
  }

  return (
    <div>
      <EventSearch onSearch={findEvents} />
      <EventList items={props?.events} />
    </div>
  )
}

export async function getStaticProps(){
  const featuredEvents = await getFeaturedEvents();
  return{
    props:{
      events: featuredEvents
    }
  }
}
