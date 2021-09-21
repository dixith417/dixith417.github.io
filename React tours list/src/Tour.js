import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const [tours, setTours] = useState([]);
  console.log();
  return (
    <article className="single-tour">
      <img src={image} alt="img" />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : info.substring(0, Math.floor(info.length / 2))}
          <button className="read-more" onClick={() => setReadMore(!readMore)}>
            {!readMore ? "read more" : "read less"}
          </button>
        </p>

        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
