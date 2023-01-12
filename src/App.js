import { useState } from "react"
import { bookBiografiaData, bookFantasyData, bookListData, bookFictionData, bookContosData, createBook } from "./booksData"
import BookList from "./components/BookList"
import Header from "./components/Header"
import Livros from "./components/Livros"
import Modal from "./components/Modal"

function App() {
  const [currentBook, setCurrentBook] = useState()
  return (
    <>
      <Header />
      {
        currentBook && <Modal
          imageUrl={currentBook.imageUrl}
          alt={currentBook.alt}
          title={currentBook.title}
          author={currentBook.author}
          sinopse={currentBook.sinopse}
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
                  key={item.id}
                  {...item}
                  onClick={() => setCurrentBook(item)}
                />
              )
            })
          }
        </Livros>

        <Livros
          title="Ficção e Suspense" >
          {
            bookFictionData.map(function (item) {
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
          title="Contos" >
          {
            bookContosData.map(function (item) {
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
          title="Biografia" >
          {
            bookBiografiaData.map(function (item) {
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


      </main>
    </>
  )
}

export default App;