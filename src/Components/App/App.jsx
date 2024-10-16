import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
// import WarperLayout from "../WarperLayout/WarperLayout";
const EventsPage = lazy(() => import("../../Pages/EventsPage/EventsPage"));
const EventRegistrationPage = lazy(() =>
  import("../../Pages/EventRegistrationPage/RegestrationForEventPage")
);
const ParticipantsPage = lazy(() =>
  import("../../Pages/ParticipantsPage/ParticipantsPage")
);

const NotFoundPage = lazy(() =>
  import("../../Pages/NotFoundPage/NotFoundPage")
);
// import HeaderStyled from "../HeaderStyled/HeaderStyled";
import { GlobalStyles } from "../../GlobalStyles";

function App() {
  return (
    <>
      <main>
        <GlobalStyles />
        <Suspense fallback="Page loading...">
          <Routes>
            <Route path="/" element={<EventsPage />} />
            <Route
              path="/:eventId/participants"
              element={<ParticipantsPage />}
            />
            <Route
              path="/:eventId/registration"
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
