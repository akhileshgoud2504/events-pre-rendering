import { useRouter } from "next/router"
import EventList from "../../components/event-list";
import { getFilteredEvents } from "../../helper/api-utils";

export default function FilteredEvents(props: any) {
    if(props.hasError){
      return <p>Invalid Filter</p>
    }
    const filteredEvents = props.events;

    if(!filteredEvents || !filteredEvents.length){
      return <p>No Events Found</p>;
    }

    return <EventList items={filteredEvents}/>
}


export async function  getServerSideProps(context:any) {
  const {params} = context;
  const filteredData = params.filteredEvents;
  const numYear: any = filteredData[0];
    const numMonth:any = filteredData[1];
    if(isNaN(numYear) || isNaN(numMonth) || numYear>2023 || numYear<2021 || numMonth<1 || numMonth>12){
      return{
        props: {
          hasError: true
        }
      }
    }
    const filteredEvents = await getFilteredEvents({
      year: numYear,
      month: numMonth
    });
    return{
      props:{
        events: filteredEvents
      }
    }
}