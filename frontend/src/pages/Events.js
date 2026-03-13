// import { Link } from "react-router-dom";

// const DUMMY_EVENTS = [
//   {
//     id: "e1",
//     title: "Some event",
//   },
//   {
//     id: "e2",
//     title: "Another event",
//   },
// ];

// export default function Events() {
//   return (
//     <>
//       <h1>this is events page.</h1>
//       <ul>
//         {DUMMY_EVENTS.map(event => <li key={event.id} >
//           {/* <Link to={`/events/${event.id}`} key={event.id}>{event.title}</Link> OR CONVERT IT INTO RELATIVE ONE */}
//           <Link to={event.id}>{event.title}</Link>
//           </li>
//         )}
//       </ul>
//     </>
//   );
// }

import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

  // if(data.isError){
  //   return <p>{data.message}</p>
  // }

  return <EventsList events={events} />;
}

export default EventsPage;


//THIS IS OUR LOADER FUNCTION, WE CAN USE ANYTHING IN THIS AS IT RUNS IN BROWSER
//THAT INCLUDES LOCAL STORAGE, COOKIES ETC. BUT YOU CAN'T USE HOOKS INSIDE LOADER FUNCTION.
export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //... deal with the incorrect response later
    // return { isError: true, message: "Could not fetch the data" }
    // throw { message: 'Could not fetch the events' }
    
    throw new Response(JSON.stringify({message: 'Could not fetch the events.'}),{status: 500})
  } else {
    // const resData = await response.json();
    // return resData.events;
    
    // const res = new Response('Any data', { status: 202 })
    // return res;

    return response;

    //REACT ROUTER WILL TAKE ANY VALUE THAT YOU RETURN BY THIS FUNCTIONAND WILL MAKE IT AVAILABLE
    //IN THE PAGE THAT IS BEING RENDERED HERE AND AS WELL AS IN ANY OTHER COMPONENT WHERE YOU NEED IT
    //YOU WON'T GET IT INTO HIGHER LEVEL ROUTES, ONLY IN SAME LEVEL OR LOWER LEVEL
  }
}
