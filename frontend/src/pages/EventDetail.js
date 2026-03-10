import { useParams } from "react-router-dom";

export default function EventDetail() {
  const params = useParams();

  return (
    <>
      <h1>This is event detail page.</h1>
      {/* use same identifier as defined in the routes  */}
      {/* we used "eventId" thats why we're putting eventId here if "id" then put id  */}
      <p>Event id: {params.eventId}</p>
    </>
  );
}
