import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import NavigationComponent from "../NavigationComponent/NavigationComponent";
const EventsPage = lazy(() => import("../../Pages/EventsPage/EventsPage"));
const SingleEventPage = lazy(() =>
  import("../../Pages/SingleEventPage/SingleEventPage")
);
const ParticipantsComponent = lazy(() =>
  import("../../Components/ParticipantsComponent/ParticipantsComponent")
);
const EventRegistrationComponent = lazy(() =>
  import("../EventRegistrationComponent/EventRegistrationComponent")
);
// const NotFoundPage = lazy(()=>lazy('../../Pages/NotFoundPage/NotFoundPage.jsx'))
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <NavigationComponent />
      </header>
      <main>
        <Suspense fallback="Page loading...">
          <Routes>
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:eventId" element={<SingleEventPage />}>
              <Route path="participants" element={<ParticipantsComponent />} />
              <Route
                path="reistration"
                element={<EventRegistrationComponent />}
              />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <p>This is App</p>
      </main>
    </>
  );
}

export default App;
