function Livros(props) {
  return (
    <section>

      <div>
        <h2>{props.title}</h2>
        <ul class="book-list">{props.children}</ul>
      </div>
    </section>
  );
}

export default Livros;