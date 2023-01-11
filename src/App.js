import { useState } from "react"
import { bookBiografiaData, bookFantasyData, bookListData, bookFictionData, bookContosData } from "./booksData"
import BookList from "./components/BookList"
import Header from "./components/Header"
import Livros from "./components/Livros"
import Modal from "./components/Modal"

function App() {
  const [currentBook, setCurrentBook] = useState()
  console.log(currentBook)

  return (
    <>
      <Header />
      {
        currentBook && <Modal
          imageUrl={currentBook.imageUrl}
          authorImage={currentBook.authorImage}
          alt={currentBook.alt}
          title={currentBook.title}
          author={currentBook.author}
          sinopsia={currentBook.sinopsia}
        />
      }
      <main>
        <Livros
          title="Terror e Horror"
        >

          {
            bookListData.map(function (item) {
              return (
                <BookList
                  key={item.id}
                  {...item}
                  onClick={() => setCurrentBook(item)}
                />
              )
            })
          }
        </Livros>

        <Livros
          title="Fantasia" >
          {
            bookFantasyData.map(function (item) {
              return (
                <BookList
                  {...item}
                />
              )
            })
          }
        </Livros>

        <Livros
          title="Ficção" >
          {
            bookFictionData.map(function (item) {
              return (
                <BookList
                  {...item}
                />
              )
            })
          }
        </Livros>

        <Livros
          title="Contos" >
          {
            bookContosData.map(function (item) {
              return (
                <BookList
                  {...item}
                />
              )
            })
          }
        </Livros>

        <Livros
          title="Biografia" >
          {
            bookBiografiaData.map(function (item) {
              return (
                <BookList
                  {...item}
                />
              )
            })
          }
        </Livros>


      </main>
    </>
  )
}

export default App;