function BookList(props) {
  return (
    <>
      <li onClick={props.onClick}>
        <img
          src={props.imageUrl}
          alt={`Capa livro ${props.alt}`} />
      </li>
    </>
  );
}

export default BookList;