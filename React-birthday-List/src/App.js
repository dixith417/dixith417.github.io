import React, { useState } from "react";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  const removeHandler = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople((prevState) => newPeople);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        {people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <article key={id} className="person">
              <div className="img-container">
                <img src={image} alt={name} className="img"></img>
              </div>
              <div className="info">
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
              <button className="btn-remove" onClick={() => removeHandler(id)}>
                remove
              </button>
            </article>
          );
        })}
        <button type="button" className="btn" onClick={() => setPeople([])}>
          Clear All
        </button>
        <button type="button" className="btn" onClick={() => setPeople(data)}>
          Get All
        </button>
      </section>
    </main>
  );
}

export default App;
