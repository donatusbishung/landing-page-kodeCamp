import Header from "../../Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faArrowLeft,
  faArrowRight,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../Footer";

function Projects() {
  const projectData = [
    {
      image: "projectImg/image 30.png",
      header: "Sample Project",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      image: "projectImg/image 32.png",
      header: "Sample Project 2",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      image: "projectImg/image 33.png",
      header: "Sample Project 3",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  return (
    <div>
      <Header />
      <div className="container-sm d-flex flex-column gap-5">
        <div className="mt-5">
          <h1 className="grey-text">Our</h1>
          <p className="fw-bold fs-1">Projects</p>
        </div>
        <div className="d-flex flex-column gap-5">
          {projectData.map((data) => (
            <div className="d-flex flex-column flex-lg-row">
              <img src={data.image} alt="Image" className="image-fluid" />
              <div className="light_grey_bg p-4 d-flex flex-column gap-5">
                <h1 className="grey-text project_header">{data.header}</h1>
                <p className="projects_parag">{data.paragraph}</p>
                <div>
                  <button className="project_btn border-0">
                    VIEW MORE <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </div>
            </div>
          ))}
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

export default Projects;
