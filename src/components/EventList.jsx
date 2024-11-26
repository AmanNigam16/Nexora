import { useEffect, useState } from "react";
import Event from "./Event";
import LoadingSpinner from "./LoadingSpinner";
import WelcomeMessage from "./WelcomeMessage";

const EventList = () => {
  const [fetching, setFetching] = useState(false);
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal } ) // Replace with the actual API URL
      .then((res) => res.json())
      .then((data) => {
        setEventList(data.posts);
        setFetching(false);
      })
      /* .catch((error) => {
        console.error("Error fetching data:", error);
        setFetching(false);
      });
      */
    return () => {
      controller.abort(); 
    };
  }, []);

  return (
    <div className="event-list-container">
      {fetching && <LoadingSpinner />}
      {!fetching && eventList.length === 0 && <WelcomeMessage />}
      {!fetching && eventList.length > 0 && (
        <div className="events-grid">
          {eventList.map((event) => (
            <Event key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventList;
