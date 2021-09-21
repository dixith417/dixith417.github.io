import React, { useState, useEffect } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tour = await response.json();
      setIsLoading(false);
      setTours(tour);
      // console.log(tour);
    } catch (error) {
      console.log(error);
    }
  };
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (tours.length === 0) {
    return (
      <main>
        <h2>No tours available :/</h2>
        <button className="btn" onClick={fetchTours}>
          refresh
        </button>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
