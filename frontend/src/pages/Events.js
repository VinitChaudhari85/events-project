import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Some event",
  },
  {
    id: "e2",
    title: "Another event",
  },
];

export default function Events() {
  return (
    <>
      <h1>this is events page.</h1>
      <ul>
        {DUMMY_EVENTS.map(event => <li key={event.id} >
          {/* <Link to={`/events/${event.id}`} key={event.id}>{event.title}</Link> OR CONVERT IT INTO RELATIVE ONE */}
          <Link to={event.id}>{event.title}</Link>
          </li>
        )}
      </ul>
    </>
  );
}
