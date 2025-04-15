import { Link } from "react-router";

export default function Team() {
  return (
    <>
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
            <p><Link className="btn btn-secondary" to="https://www.linkedin.com/in/rinaprilia/?trk=eml-email_notification_digest_01-header-0-profile_glimmer">View details &raquo;</Link></p>
          </div>

          <div className="col-lg-4 text-center">
            <div className="d-flex align-items-center justify-content-center bg-light rounded-circle mx-auto mb-3" style={{ width: "140px", height: "140px" }}>
              <i className="fa-solid fa-circle-user fa-3x" style={{ color: "#ff8c00" }}></i>
            </div>
            <h2 className="fw-normal">Aprilia Putri</h2>
            <p>Fullstack Web Development</p>
            <p><Link className="btn btn-secondary" to="https://www.linkedin.com/in/rinaprilia/?trk=eml-email_notification_digest_01-header-0-profile_glimmer">View details &raquo;</Link></p>
          </div>

          <div className="col-lg-4 text-center">
            <div className="d-flex align-items-center justify-content-center bg-light rounded-circle mx-auto mb-3" style={{ width: "140px", height: "140px" }}>
              <i className="fa-solid fa-circle-user fa-3x" style={{ color: "#28a745" }}></i>
            </div>
            <h2 className="fw-normal">Putri Wulandari</h2>
            <p>Fullstack Web Development</p>
            <p><Link className="btn btn-secondary" to="https://www.linkedin.com/in/rinaprilia/?trk=eml-email_notification_digest_01-header-0-profile_glimmer">View details &raquo;</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}