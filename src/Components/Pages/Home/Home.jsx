import Header from "../../Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../Footer";

function Home() {
  return (
    <div>
      <Header />
      <div className="container-sm ">
        <main className="d-flex justify-content-between align-items-center pb-5">
          <div className="__project_intro d-flex flex-column gap-3">
            <div>
              <h1 className="grey-text">Project</h1>
              <p className="fw-bold fs-1">Lorum</p>
            </div>
            <div className="__navigation d-flex gap-4">
              <button className="my-2 border-0 px-3 py-2">
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button className="my-2 border-0 px-3 py-2">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            <div>
              <p className="grey-text nav-text">
                01 <span>/</span> 02
              </p>
            </div>
          </div>
          <div className="">
            <img src="main-img.png" alt="" className="__main-image" />
          </div>
        </main>
        <section id="" className="d-flex flex-column justify-content-between">
          <div className="pb-2">
            <h1 className="grey-text">Main Focus/Mission Statement</h1>
          </div>
          <div className="numbering d-flex justify-content-between gap-5 pt-5 pb-5">
            <div className="first_one d-flex align-items-center gap-3">
              <h1 className="grey-text">1</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur, lectus et facilisis placerat.
              </p>
            </div>
            <div className="first_one d-flex align-items-center gap-3">
              <h1 className="grey-text">2</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur, lectus et facilisis placerat.
              </p>
            </div>
          </div>
        </section>
        {/* Our Projects section */}
        {/* <section id="our_projects">
          <div className="pt-5">
            <h1 className="grey-text">Our Projects</h1>
          </div>
          <div className="pics_section">
            <div class="container text-center">
              <div className="row">
                <div className="col-6">
                  <img src="first_two.png" alt="" />
                </div>
                <div className="col-6">
                  <img src="second_one.png" alt="" />
                </div>
              </div>
              <div className="row">
                <div class="col">
                  <img src="third1.png" alt="" />
                </div>
                <div className="col">
                  <img src="third2.png" alt="" />
                </div>
                <div className="col">
                  <img src="third3.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section
          id="contact_us"
          className="d-flex flex-column justify-content-between gap-5">
          <h1 className="grey-text">Contact Us</h1>
          <div className="form_section d-flex justify-content-between gap-5">
            <form action="" className="d-flex flex-column gap-4">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Phone Number" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Interested In" />
              <textarea name="" placeholder="Message" id=""></textarea>
            </form>
            <img src="contact_us.png" alt="" />
          </div>
          <div>
            <button className="contact_btn mb-5">
              SEND EMAIL <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
