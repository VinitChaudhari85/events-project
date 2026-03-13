// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./pages/Home";
// import Events, { loader as eventsLoader } from "./pages/Events";
// import EventDetail, { loader as eventDetailLoader, action as deleteEventAction } from "./pages/EventDetail";
// import NewEvent from "./pages/NewEvent";
// import EditEvent from "./pages/EditEvent";
// import RootLayout from "./pages/Root";
// import EventsRootLayout from "./pages/EventsRoot";
// import Error from "./pages/Error";
// import { action as manipulateEventAction } from "./components/EventForm";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     // WHENEVER AN ERROR OCCURS ANYWHERE (INCLUDING LOADERS) WHEN THEY'RE THROWN OUT, ERROR ELEMENT WILL SHOW
//     //AND THESE ERRORS BUBBLE UP BUT THE NEAREST ERROR ELEMENT WILL BE SHOWN ON SCREEN
//     errorElement: <Error />,
//     children: [
//       { index: true, element: <Home /> },
//       {
//         path: "events",
//         element: <EventsRootLayout />,
//         children: [
//           // if you want some stuff that must be prepped or executed before going into the page
//           // You can use loader() property which wants a function. This function will be executed by react
//           // Whenever you are about to visit this route
//           {
//             index: true,
//             element: <Events />,
//             loader: eventsLoader, //OUTSOURCED THE LOADER CODE IN THE COMPONENT FILE TO KEEP APP FILE CLEANER
//           },
//           {
//             path: ":eventId",
//             id: 'event-detail',
//             loader: eventDetailLoader,
//             children: [
//               {
//                 index: true,
//                 element: <EventDetail />,
//                 action: deleteEventAction
//                 // loader: eventDetailLoader,
//               },
//               { path: "edit", element: <EditEvent />, action: manipulateEventAction },
//             ],
//           },

//           { path: "new", element: <NewEvent />, action: manipulateEventAction},
//         ],
//       },
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;


import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import EditEventPage from './pages/EditEvent';
import ErrorPage from './pages/Error';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from './pages/EventDetail';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventsRootLayout from './pages/EventsRoot';
import HomePage from './pages/Home';
import NewEventPage from './pages/NewEvent';
import RootLayout from './pages/Root';
import { action as manipulateEventAction } from './components/EventForm';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
