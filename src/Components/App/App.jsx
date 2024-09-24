import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import NavigationComponent from "../NavigationComponent/NavigationComponent";
const EventsPage = lazy(() => import("../../Pages/EventsPage/EventsPage"));
const EventRegistrationPage = lazy(() =>
  import("../../Pages/EventRegistrationPage/EventRegistrationPage")
);
const ParticipantsPage = lazy(() =>
  import("../../Pages/ParticipantsPage/ParticipantsPage")
);

import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <header>
        <NavigationComponent />
      </header>
      <main>
        <Suspense fallback="Page loading...">
          <Routes>
            <Route path="/" element={<EventsPage />} />
            <Route
              path="/:eventId/participants"
              element={<ParticipantsPage />}
            />
            <Route
              path="/:eventId/reistration"
              element={<EventRegistrationPage />}
            />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
