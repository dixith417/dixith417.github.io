import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  // console.log(tours);
  return (
    <section>
      <div className="title">
        <h1>Our Tours</h1>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
