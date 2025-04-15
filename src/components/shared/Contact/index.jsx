import { Link } from "react-router";

export default function Contact() {
  return (
    <>
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
            <Link to= "https://www.linkedin.com/in/rinaprilia/?trk=eml-email_notification_digest_01-header-0-profile_glimmer" className="icon-link">
              Call to action
              <svg className="bi" aria-hidden="true"><use xlinkHref="#chevron-right"/></svg>
            </Link>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <i class="fa-brands fa-instagram" ></i>
            </div>
            <h3 className="fs-2 text-body-emphasis">rinapriliia</h3>
            <p>A social media app for sharing photos and videos, popular for visual content, promotion, and interaction with followers.</p>
            <Link to="https://www.instagram.com/rinapriliia/" className="icon-link">
              Call to action
              <svg className="bi" aria-hidden="true"><use xlinkHref="#chevron-right"/></svg>
            </Link>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <i class="fa-brands fa-github"></i>
            </div>
            <h3 className="fs-2 text-body-emphasis">riliapuw</h3>
            <p>A Git-based code management platform used by developers to store, share and collaborate on programming projects.</p>
            <Link to="https://github.com/riliapuw" className="icon-link">
              Call to action
              <svg className="bi" aria-hidden="true"><use xlinkHref="#chevron-right"/></svg>
            </Link>
          </div>
        </div>
      </div> 
    </>
  )
}