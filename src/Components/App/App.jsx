import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import NavigationComponent from "../NavigationComponent/NavigationComponent";
const EventsPage = lazy(() => import("../../Pages/EventsPage/EventsPage"));
const ParticipantsComponent = lazy(() =>
  import("../../Components/ParticipantsComponent/ParticipantsComponent")
);
const EventRegistrationComponent = lazy(() =>
  import("../EventRegistrationComponent/EventRegistrationComponent")
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
              element={<ParticipantsComponent />}
            />
            <Route
              path="/:eventId/reistration"
              element={<EventRegistrationComponent />}
            />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
