function Modal(props) {
  return (
    <div className='modalbg'>
      <div className='modal'>
        <img
          src={props.imageUrl}
          alt={props.alt}
        />
        {
          props.authorImage.map(function (item) {
            return (
              <img
                key={item}
                src={item}
                alt={props.author}
              />
            )
          })
        }
        <h3>{props.title}</h3>
        <h4>{props.author}</h4>
        <p>{props.sinopsia}</p>
      </div>
    </div>
  )
}


export default Modal;