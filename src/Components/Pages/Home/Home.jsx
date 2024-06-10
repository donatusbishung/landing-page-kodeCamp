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
      <div className="container-sm __space_from_top">
        <main className="d-flex flex-column-reverse flex-md-row flex-lg-row justify-content-between align-items-center pb-5">
          <div className="__project_intro d-flex  flex-column gap-3">
            <div>
              <h1 className="grey-text mb-0">Project</h1>
              <p className="fw-bold fs-1">Lorum</p>
            </div>
            <div className="__navigation">
              <div className=" d-flex gap-4">
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
          </div>
          <div className="mt-5">
            <img src="main-img.png" alt="" className="__main-image img-fluid" />
          </div>
        </main>
        <section id="about_us" className="light_grey_bg">
          <div className="__about_section p-5 d-flex flex-column flex-lg-row align-items-center gap-5">
            <div className="abt_images d-flex gap-2 align-items-center">
              <div className="d-flex flex-column gap-3">
                <img src="Rectangle 8.png" alt="" className="_img_none" />
                <img
                  src="Rectangle 10.png"
                  alt=""
                  className="img-fluid _img_none"
                />
              </div>
              <div className="img_full">
                <img src="Rectangle 9.png" alt="photo" className="img_full" />
              </div>
            </div>
            <div className="d-flex flex-column gap-3">
              <h1 className="grey-text project_header">About</h1>
              <p className="projects_parag">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <div>
                <button className="project_btn border-0">
                  READ MORE <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="" className="d-flex flex-column justify-content-between">
          <div className="pb-2">
            <h1 className="grey-text mt-5">Main Focus/Mission Statement</h1>
          </div>
          <div className="numbering d-flex flex-column flex-md-row flex-lg-row justify-content-between gap-5 pt-5 pb-5">
            <div className="first_one d-flex align-items-center gap-3">
              <h1 className="grey-text">1</h1>
              <p className="para_small_contact">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur, lectus et facilisis placerat.
              </p>
            </div>
            <div className="first_one d-flex align-items-center gap-3">
              <h1 className="grey-text">2</h1>
              <p className="para_small_contact">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur, lectus et facilisis placerat.
              </p>
            </div>
          </div>
        </section>
        <section
          id="contact_us"
          className="d-flex flex-column justify-content-between gap-5">
          <h1 className="grey-text contact_header mt-5">Contact Us</h1>
          <div className="form_section d-flex flex-column flex-md-row flex-lg-row justify-content-between gap-5">
            <form action="" className="d-flex flex-column gap-4">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Phone Number" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Interested In" />
              <textarea name="" placeholder="Message" id=""></textarea>
            </form>
            <img src="contact_us.png" alt="" className="img-fluid" />
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
