import "./Footer.css";
export default function Footer() {
  return (
    <section className="f-wrapper">
      <div className="f-container paddings inner-width flex-center">
        {/* left-side */}
        <div className="f-left flex-col-start">
          <a href="https://github.com/" target="_blank">
            <img src="./logo-ali-2.png" alt="" width={100} />
          </a>
          <p className="secondary-text">
            Our vision is to make all people the best place to live for them.
          </p>
        </div>
        {/* right-side */}
        <div className="f-right ">
          <h3 className="primary-text">Information</h3>
          <p className="secondary-text">145 New York, FL 5467, USA</p>
          <div className="menu flex-center ">
            <a href="#">Property</a>
            <a href="#">Services</a>
            <a href="#">Product</a>
            <a href="#">About Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
