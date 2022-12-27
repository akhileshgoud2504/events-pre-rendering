export async function getAllEvents(){
    const response = await fetch('https://events-pre-rendering-default-rtdb.asia-southeast1.firebasedatabase.app/events.json');
    const data = await response.json();
    let events = [];
    for(const key in data){
        events.push({
            id:key,
            ...data[key]
        });
    }
    return events;
}

export async function getFeaturedEvents(){
    const allEvents = await getAllEvents();
    return allEvents.filter((event:any)=>event.isFeatured);
}

export async function getEventById(id:any) {
    const allEvents = await getAllEvents();
    return allEvents.find((event) => event.id === id);
}