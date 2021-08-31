// Book Component

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <div className="book">
      <div className="img-container">
        <img src={img} alt="book" className="img" />
      </div>
      <h2 className="title">{title}</h2>
      <h4 className="author">{author}</h4>
    </div>
  );
};

export default Book;
