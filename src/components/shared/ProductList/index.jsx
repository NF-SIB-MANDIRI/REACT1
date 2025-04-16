import { Link } from "react-router";
import books from "../../../Utils/books";
import { useState } from "react";

export default function ProductList() {
  const [bookList, setBookList] = useState(books);

  const handleAddBook = () => {
    const newBook = {
      id: bookList.length + 1,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      year: 2019,
      description: "The Silent Patient is a psychological thriller that follows Alicia Berenson, a famous painter who shoots her husband and then goes silent.",
      image: "https://tse3.mm.bing.net/th?id=OIP.iL37ud0WaU6GyZB3i_fPPAHaFT&pid=Api&P=0&h=180"
    };
    setBookList([...bookList, newBook]);
  }
  return (
    <>
      <section className="py-5 text-center container mb-10" id="book">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best Seller</h1>
            <p className="lead text-body-secondary">"Ketika Laut Bercerita" is a novel by Leila S. Chudori that tells the story of a student activist named Biru Laut who disappeared during the New Order era because of his struggle against injustice.</p>
            <p>
              <Link to="/books" className="btn btn-primary my-2 m-2">Views</Link>
              <Link to="/books" className="btn btn-secondary my-2">Other Book</Link>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary mb-10">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

            {bookList.map((book) => (
              <div key={book.id} className="col">
                <div className="card shadow-sm">
                <img src={book.image} className="card-img-top" alt={book.title} width="100%" height="225" style={{ objectFit: 'cover' }} />
                <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">
                      {book.description}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <p>{book.author}</p>
                      </div>
                      <small className="text-body-secondary">{book.year}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
      <button onClick={handleAddBook} className="btn btn-success mt-3">
        Tambah Buku Baru
      </button>
    </>
  )
}