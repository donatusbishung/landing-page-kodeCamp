import Footer from "../../Footer";
import Header from "../../Header";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faArrowLeft,
  faArrowRight,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Gallery() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="container-sm d-flex flex-column gap-5">
        <div className="mt-5">
          <h1 className="grey-text">Photo</h1>
          <p className="fw-bold fs-1">Gallery </p>
        </div>
        <div className="_gallery_img">
          <img src="Rectangle 22.png" alt="" />
          <img src="Rectangle 23.png" alt="" />
          <img src="Rectangle 24.png" alt="" />
          <img src="Rectangle 25.png" alt="" />
          <img src="Rectangle 26.png" alt="" />
          <img src="Rectangle 27.png" alt="" />
          <img src="Rectangle 28.png" alt="" />
          <img src="Rectangle 29.png" alt="" />
          <img src="Rectangle 30.png" alt="" />
          <img src="Rectangle 31.png" alt="" />
        </div>
        <div className="d-flex align-items-center gap-3 mb-5">
          <div>
            <p className="grey-text nav-text">
              01 <span className="fs-2">/</span> 02
            </p>
          </div>
          <div className="__navigation d-flex gap-4">
            <button className="my-2 border-0 px-4 py-1">
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button className="my-2 border-0 px-4 py-1">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
