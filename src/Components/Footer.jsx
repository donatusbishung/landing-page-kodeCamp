import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faArrowLeft,
  faArrowRight,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <div className="bg-black">
      <div className="container-sm footer-div text-light">
        <div className="img_info_contacts d-flex flex-column flex-md-row flex-lg-row gap-5 justify-content-between pt-5">
          <div>
            <img src="footer-logo.png" alt="" className="img-fluid" />
          </div>
          <div>
            <p className="__footerHeaders">Information</p>
            <p className="__footerParag">Main</p>
            <p className="__footerParag">Gallery</p>
            <p className="__footerParag">Projects</p>
            <p className="__footerParag">Certifications</p>
            <p className="__footerParag">Contacts</p>
          </div>
          <div className="d-flex flex-column gap-3">
            <p className="__footerHeaders">Contacts</p>
            <div className="d-flex gap-3">
              <FontAwesomeIcon icon={faLocationDot} />
              <div>
                <p className="__footerParag __lineHeight">1234 Sample Street</p>
                <p className="__footerParag">Austin Texas 78704</p>
              </div>
            </div>
            <div className="d-flex gap-3">
              <FontAwesomeIcon icon={faPhone} />
              <div>
                <p className="__footerParag ">512.333.2222</p>
              </div>
            </div>
            <div className="d-flex gap-3">
              <FontAwesomeIcon icon={faEnvelope} />
              <div>
                <p className="__footerParag ">sampleemail@gmail.com</p>
              </div>
            </div>
          </div>
          <div>
            <p className="__footerHeaders">Socials</p>
            <div className="d-flex gap-3">
              <i class="fi fi-brands-facebook"></i>
              <i class="fi fi-brands-twitter"></i>
              <i class="fi fi-brands-linkedin"></i>
              <i class="fi fi-brands-pinterest"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
