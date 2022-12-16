import { useRouter } from "next/router"
import EventList from "../../components/event-list";
import { getFilteredEvents } from "../../utils/events-data";

export default function FilteredEvents() {
    const router = useRouter();
    const filteredDate = router.query.filteredEvents;

    if(!filteredDate){
      return <p className="center">Loading....</p>
    }
    const numYear: any = filteredDate[0];
    const numMonth:any = filteredDate[1];
    if(isNaN(numYear) || isNaN(numMonth) || numYear>2023 || numYear<2021 || numMonth<1 || numMonth>12){
      return <p>Invalid Filter</p>
    }
    const filteredEvents = getFilteredEvents({
      year: parseInt(numYear),
      month: parseInt(numMonth)
    });

    if(!filteredEvents || !filteredEvents.length){
      return <p>No Events Found</p>;
    }

    return <EventList items={filteredEvents}/>
}