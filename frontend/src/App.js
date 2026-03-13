import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Events, { loader as eventsLoader } from "./pages/Events";
import EventDetail, { loader as eventDetailLoader, action as deleteEventAction } from "./pages/EventDetail";
import NewEvent, {action as newEventAction} from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import RootLayout from "./pages/Root";
import EventsRootLayout from "./pages/EventsRoot";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // WHENEVER AN ERROR OCCURS ANYWHERE (INCLUDING LOADERS) WHEN THEY'RE THROWN OUT, ERROR ELEMENT WILL SHOW
    //AND THESE ERRORS BUBBLE UP BUT THE NEAREST ERROR ELEMENT WILL BE SHOWN ON SCREEN
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          // if you want some stuff that must be prepped or executed before going into the page
          // You can use loader() property which wants a function. This function will be executed by react
          // Whenever you are about to visit this route
          {
            index: true,
            element: <Events />,
            loader: eventsLoader, //OUTSOURCED THE LOADER CODE IN THE COMPONENT FILE TO KEEP APP FILE CLEANER
          },
          {
            path: ":eventId",
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetail />,
                action: deleteEventAction
                // loader: eventDetailLoader,
              },
              { path: "edit", element: <EditEvent /> },
            ],
          },

          { path: "new", element: <NewEvent />, action: newEventAction},
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
