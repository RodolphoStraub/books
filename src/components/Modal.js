function Modal(props) {
  return (
    <div className='modalbg'>
      <button className="close"
        onClick={props.onClose}> x </button>
      <div className='modal'>
        <div className="modalContent">
          <div className="pictures">
            <img
              className='imageUrl'
              src={props.imageUrl}
              alt={props.alt}
            />
            <div className="authors">
              {
                props.author.map(function (item) {
                  return (
                    <div>
                      <img
                        className='authorImage'
                        key={item.image}
                        src={item.image}
                        alt={item.name}
                      />
                      <h4>{item.name}</h4>
                    </div>
                  )
                })
              }

            </div>
          </div>

          <div className="sinopse">
            <h3>{props.title}</h3>
            <div className="text">{props.sinopse}</div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Modal;