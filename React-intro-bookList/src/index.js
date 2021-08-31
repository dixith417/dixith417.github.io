import reactDom from "react-dom";
import { bookDt } from "./data";
import Book from "./Book";
import "./index.css";

// Main App
// Book List
const BookList = () => {
  return (
    <section className="center">
      {bookDt.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
};

reactDom.render(<BookList />, document.querySelector("#root"));
