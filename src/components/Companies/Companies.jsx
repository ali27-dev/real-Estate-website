import "./Companies.css";
export default function Companies() {
  return (
    <div>
      <section className="c-wrapper">
        <div className="c-container flex-center inner-width paddings center">
          <img
            src="./prologis.png"
            alt="the image is about pro-logis company"
          />
          <img
            src="./tower.png"
            alt="the image is about American-Tower company"
          />
          <img
            src="./realty.png"
            alt="the image is about digital-realty company"
          />
          <img src="./equinix.png" alt="the image is about Equinix company" />
        </div>
      </section>
    </div>
  );
}
