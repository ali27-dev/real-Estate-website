import { MdCall } from "react-icons/md";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import "./Contact.css";

export default function Contect() {
  return (
    <section className="contact-wrapper">
      <div className="paddings inner-width flex-center contact-container">
        {/* left */}
        <div className="contact-left flex-col-start">
          <h3 className="orange-text">Our Contact Us</h3>
          <h2 className="primary-text">Easy to contact us</h2>
          <p className="secondary-text">
            We always ready to help by providijng the best services for you.
            <br />
            We beleive a good place to live can make your life better
          </p>

          {/* contacts-box-start */}
          <div className="flex-col-start contact-modes">
            {/* first-row-start */}
            <div className="flex-start row">
              {/* first-mode-start */}
              <div className="flex-col-center mode">
                {/* for-icon,number and detail-start */}
                <div className="flex-start start">
                  {/* icon */}
                  <div className="icon flex-center">
                    <MdCall size={20} />
                  </div>
                  {/* detail */}
                  <div className="flex-col-start detail">
                    <span className="primary-text detail">Call</span>
                    <span className="secondary-text">+92-342-2392680</span>
                  </div>
                </div>
                {/* for-icon,number and detail-end */}
                <div className="flex-center button">Call Now</div>
              </div>
              {/* first-mode-end */}

              {/* second-mode-start */}
              <div className="flex-col-center mode">
                {/* for-icon,number and detail-start */}
                <div className="flex-start start">
                  {/* icon */}
                  <div className="icon flex-center">
                    <FaGithub size={20} />
                  </div>
                  {/* detail */}
                  <div className="flex-col-start detail">
                    <span className="primary-text detail">GitHub</span>
                    {/* <span className="secondary-text">+92-342-2392680</span> */}
                  </div>
                </div>
                {/* for-icon,number and detail-end */}
                <div className="flex-center button">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    className="flex-center c-link"
                  >
                    Visit Now
                  </a>
                </div>
              </div>
              {/* second-mode-end */}
            </div>
            {/* first-row-end */}

            {/* second-row-start */}
            <div className="flex-start row">
              {/* first-mode-start */}
              <div className="flex-col-center mode">
                {/* for-icon,number and detail-start */}
                <div className="flex-start start">
                  {/* icon */}
                  <div className="icon flex-center">
                    <HiChatBubbleBottomCenterText size={20} />
                  </div>
                  {/* detail */}
                  <div className="flex-col-start detail">
                    <span className="primary-text detail">Chat</span>
                    <span className="secondary-text">+92-342-2392680</span>
                  </div>
                </div>
                {/* for-icon,number and detail-end */}
                <div className="flex-center button">chat Now</div>
              </div>
              {/* first-mode-end */}

              {/* second-mode-start */}
              <div className="flex-col-center mode">
                {/* for-icon,number and detail-start */}
                <div className="flex-start start">
                  {/* icon */}
                  <div className="icon flex-center">
                    <IoLogoLinkedin size={20} />
                  </div>
                  {/* detail */}
                  <div className="flex-col-start detail">
                    <span className="primary-text detail">Linked-In</span>
                    {/* <span className="secondary-text">+92-342-2392680</span> */}
                  </div>
                </div>
                {/* for-icon,number and detail-end */}
                <div className="flex-center button">
                  <a
                    href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
                    target="_blank"
                    className="flex-center c-link"
                  >
                    Visit Now
                  </a>
                </div>
              </div>
              {/* second-mode-end */}
            </div>
            {/* second-row-end */}
          </div>
          {/* contacts-box-end */}
        </div>
        {/* right */}
        <div className="contact-right flex-center">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
