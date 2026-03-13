// import { useRouteLoaderData, useParams, redirect } from "react-router-dom"; This  was for the older approach, 
// Currently we are not using useParams in the new approach
import { useRouteLoaderData, redirect } from "react-router-dom";
import EventItem from "../components/EventItem"

export default function EventDetail() {
  // const params = useParams();
  const data = useRouteLoaderData('event-detail');

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

export async function action({params, request}) {
  const eventId = params.eventId
  const response = await fetch('http://localhost:8080/events/'+eventId, { method: request.method })
  if(!response.ok){
     throw new Response(JSON.stringify({message: 'Could not delete the event.'}),{status: 500})
  }
  return redirect('/events')
}