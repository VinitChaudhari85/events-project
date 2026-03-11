import { useLoaderData, useParams } from "react-router-dom";
import EventItem from "../components/EventItem"

export default function EventDetail() {
  const params = useParams();
  const data = useLoaderData();

  return (
    // <>
    //   <h1>This is event detail page.</h1>
    //   {/* use same identifier as defined in the routes  */}
    //   {/* we used "eventId" thats why we're putting eventId here if "id" then put id  */}
    //   <p>Event id: {params.eventId}</p>
    // </>
    <EventItem event={data.event}/>
  );
}

//We have setup dynamic routes here.
export async function loader({request, params}){
  const id = params.eventId
  const response = await fetch('http://localhost:8080/events/' +id)
  if(!response.ok){
     throw new Response(JSON.stringify({message: 'Could not fetch the detail for selected event.'}),{status: 500})
  } else {
    return response;
  }
}