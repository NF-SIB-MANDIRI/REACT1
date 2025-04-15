import { Link } from "react-router";

export default function ProductList() {
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
    </>
  )
}