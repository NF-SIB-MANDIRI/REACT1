function App() {

  return (
    <>
      <div className="container">
      {/* Header */}
      <header
  className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 sticky-top bg-white shadow-sm rounded-4 mx-auto px-4"
  style={{ width: '100%', backdropFilter: 'blur(6px)', transition: 'all 0.3s ease' }}
>
<div className="col-md-3 mb-2 mb-md-0">
      <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
        <i className="fa-solid fa-book" style={{ color: "#74C0FC" }}></i>
        <span className="ms-2 fs-4">bookstore</span>
      </a>
    </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#home" className="nav-link px-2">Home</a></li>
            <li><a href="#book" className="nav-link px-2">Book</a></li>
            <li><a href="#team" className="nav-link px-2">Team</a></li>
            <li><a href="#contact" className="nav-link px-2">Contact</a></li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>

        {/* Hero */}
        <div className="container my-5" id="home">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Find Your Favorite Books Here!</h1>
              <p className="lead">Enjoy the experience of browsing thousands of book collections from various genres, ranging from fiction, non-fiction, to rare and latest books.
              Get inspiration, knowledge, and entertainment with just one click.</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Buy Now</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Detail</button>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                <img className="rounded-lg-3" src="https://tse2.mm.bing.net/th?id=OIP.aDRvT-GdCn5y3L-sCBxyNQHaEK&pid=Api&P=0&h=180" alt="" width="720"/>
            </div>
          </div>
        </div>

        {/* Product List */}
        <section className="py-5 text-center container mb-10" id="book">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Best Seller</h1>
              <p className="lead text-body-secondary">"Ketika Laut Bercerita" is a novel by Leila S. Chudori that tells the story of a student activist named Biru Laut who disappeared during the New Order era because of his struggle against injustice.</p>
              <p>
                <a href="#detail" className="btn btn-primary my-2 m-2">Views</a>
                <a href="#detail" className="btn btn-secondary my-2">Other Book</a>
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-body-tertiary mb-10">
          <div className="container">

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id="detail">
              <div className="col">
                <div className="card shadow-sm">
                <img src="https://down-id.img.susercontent.com/file/id-11134207-7qul9-ljoz0m0j56ay04" className="card-img-top" alt="Ketika Laut Bercerita" width="100%" height="225" style={{ objectFit: 'cover' }} />
                <div className="card-body">
                    <p className="card-text">Laut Bercerita tells the story of a student activist who disappeared during Indonesia’s authoritarian era, filled with pain and silent resistance.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                <img src="https://down-id.img.susercontent.com/file/4b4efcd98e5c438de7de2b07bd60c0d0" className="card-img-top" alt="Ketika Laut Bercerita" width="100%" height="225" style={{ objectFit: 'cover' }} />
                  <div className="card-body">
                    <p className="card-text">Matahari Minor is a journey of self-discovery and spirituality set in the philosophical Supernova universe.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                <img src="https://down-id.img.susercontent.com/file/id-11134207-7r98u-lpj4j1ndmv8818" className="card-img-top" alt="Ketika Laut Bercerita" width="100%" height="225" style={{ objectFit: 'cover' }} />
                <div className="card-body">
                    <p className="card-text">ILY captures the purity of first love and the pain of letting go. It’s a nostalgic story about growing up and moving on.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card shadow-sm">
                <img src="http://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1451905281i/28446637._UY630_SR1200,630_.jpg" className="card-img-top" alt="Ketika Laut Bercerita" width="100%" height="225" style={{ objectFit: 'cover' }} />
                <div className="card-body">
                    <p className="card-text">Hujan tells of a girl’s emotional recovery after a catastrophic disaster changes her world. Through trauma and hope, she rediscovers strength and purpose.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1552044331i/44304793._UY630_SR1200,630_.jpg" className="card-img-top" alt="Ketika Laut Bercerita" width="100%" height="225" style={{ objectFit: 'cover' }} />
                  <div className="card-body">
                    <p className="card-text">Komet Minor continues the fantasy adventure in the "Bumi" universe, exploring new worlds and challenges.It’s a moving tale of grief, healing, and choosing to move forward.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                <img src="https://lzd-img-global.slatic.net/g/p/f14f403d9a62e0e3b51fe947e7ab2c73.jpg_720x720q80.jpg" className="card-img-top" alt="Ketika Laut Bercerita" width="100%" height="225" style={{ objectFit: 'cover' }} />
                  <div className="card-body">
                    <p className="card-text">Tentang Kamu tells the story of a young lawyer who unravels the mysterious life of Sri Ningsih, a humble woman with a remarkable past filled with love, sacrifice, and resilience.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card shadow-sm">
                <img src="https://down-id.img.susercontent.com/file/2b95491667bab776d83d04adfa27b11c" className="card-img-top" alt="Ketika Laut Bercerita" width="100%" height="225" style={{ objectFit: 'cover' }} />
                <div className="card-body">
                    <p className="card-text">Sesuk features humorous and wise tales of Bibi Gill, filled with warmth and life lessons.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                <img src="https://down-id.img.susercontent.com/file/id-11134207-7rasg-m3q1xj2dmmj480" className="card-img-top" alt="Ketika Laut Bercerita" width="100%" height="225" style={{ objectFit: 'cover' }} />
                  <div className="card-body">
                    <p className="card-text">Aldebaran presents a spiritual journey in search of truth and purpose, wrapped in inspirational fiction.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                <img src="https://down-id.img.susercontent.com/file/id-11134207-7qula-lfoutmlpijgh71" className="card-img-top" alt="Ketika Laut Bercerita" width="100%" height="225" style={{ objectFit: 'cover' }} />
                  <div className="card-body">
                    <p className="card-text">Helo takes readers into the fantasy realm of the Para Leluhur, full of mystery and thrilling quests.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div id="team" className="carousel slide mb-10 mb-5" data-bs-ride="carousel">
          <div className="carousel-indicators">
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.4q1z-u24yuLAQJKXaOXbKQHaHa&pid=Api&P=0&h=180"
              alt="User Icon"
              className="d-block w-100"
              style={{ height: "500px", objectFit: "contain" }}
            />
            </div>
          </div>
        </div>

        <div className="container marketing my-5">
          <div className="row">
            <div className="col-lg-4 text-center">
              <div className="d-flex align-items-center justify-content-center bg-light rounded-circle mx-auto mb-3" style={{ width: "140px", height: "140px" }}>
                <i className="fa-solid fa-circle-user fa-3x" style={{ color: "#74C0FC" }}></i>
              </div>
              <h2 className="fw-normal">Rina Aprilia</h2>
              <p>Fullstack Web Development</p>
              <p><a className="btn btn-secondary" href="https://www.linkedin.com/in/rinaprilia/?trk=eml-email_notification_digest_01-header-0-profile_glimmer">View details &raquo;</a></p>
            </div>

            <div className="col-lg-4 text-center">
              <div className="d-flex align-items-center justify-content-center bg-light rounded-circle mx-auto mb-3" style={{ width: "140px", height: "140px" }}>
                <i className="fa-solid fa-circle-user fa-3x" style={{ color: "#ff8c00" }}></i>
              </div>
              <h2 className="fw-normal">Aprilia Putri</h2>
              <p>Fullstack Web Development</p>
              <p><a className="btn btn-secondary" href="https://www.linkedin.com/in/rinaprilia/?trk=eml-email_notification_digest_01-header-0-profile_glimmer">View details &raquo;</a></p>
            </div>

            <div className="col-lg-4 text-center">
              <div className="d-flex align-items-center justify-content-center bg-light rounded-circle mx-auto mb-3" style={{ width: "140px", height: "140px" }}>
                <i className="fa-solid fa-circle-user fa-3x" style={{ color: "#28a745" }}></i>
              </div>
              <h2 className="fw-normal">Putri Wulandari</h2>
              <p>Fullstack Web Development</p>
              <p><a className="btn btn-secondary" href="https://www.linkedin.com/in/rinaprilia/?trk=eml-email_notification_digest_01-header-0-profile_glimmer">View details &raquo;</a></p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <form className="mb-10" action="">
          <div className="mb-7" id="contact">
            <label htmlFor="exampleInputEmail1" className="form-label" id="contact">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label htmlForfor="exampleFormControlTextarea1" className="form-label">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        

          <div className="container px-4 py-5" id="featured-3">
            <h2 className="pb-2 border-bottom">Contact</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
              <div className="feature col">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                  <i class="fa-brands fa-linkedin"></i>
                </div>
                <h3 className="fs-2 text-body-emphasis">rinaprilia</h3>
                <p> A professional social networking platform for making connections, finding jobs, and showcasing experience and skills.</p>
                <a href= "https://www.linkedin.com/in/rinaprilia/?trk=eml-email_notification_digest_01-header-0-profile_glimmer" className="icon-link">
                  Call to action
                  <svg className="bi" aria-hidden="true"><use xlink:href="#chevron-right"/></svg>
                </a>
              </div>
              <div className="feature col">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                  <i class="fa-brands fa-instagram" ></i>
                </div>
                <h3 className="fs-2 text-body-emphasis">rinapriliia</h3>
                <p>A social media app for sharing photos and videos, popular for visual content, promotion, and interaction with followers.</p>
                <a href="https://www.instagram.com/rinapriliia/" className="icon-link">
                  Call to action
                  <svg className="bi" aria-hidden="true"><use xlink:href="#chevron-right"/></svg>
                </a>
              </div>
              <div className="feature col">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                  <i class="fa-brands fa-github"></i>
                </div>
                <h3 className="fs-2 text-body-emphasis">riliapuw</h3>
                <p>A Git-based code management platform used by developers to store, share and collaborate on programming projects.</p>
                <a href="https://github.com/riliapuw" className="icon-link">
                  Call to action
                  <svg className="bi" aria-hidden="true"><use xlink:href="#chevron-right"/></svg>
                </a>
              </div>
            </div>
          </div> 

        {/* Footer */}
        <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item"><a href="#home" className="nav-link px-2 text-body-secondary">Home</a></li>
              <li className="nav-item"><a href="#book" className="nav-link px-2 text-body-secondary">Book</a></li>
              <li className="nav-item"><a href="#team" className="nav-link px-2 text-body-secondary">Team</a></li>
              <li className="nav-item"><a href="#contact" className="nav-link px-2 text-body-secondary">Contact</a></li>
            </ul>
            <p className="text-center text-body-secondary">&copy; 2025 Rina Aprilia Putri Wulandari</p>
          </footer>
        </div>

      </div>
    </>
  )
}

export default App