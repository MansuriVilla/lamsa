import "./testimonial.css";
import aiNeuralImg from "../../assets/images/ai_neural_network.png";
import cloudComputingImg from "../../assets/images/cloud_computing_tech.png";
export default function TestimonialSection() {
  const TestmonialData = [
    {
      id: "1",
      name: "John Doe",
      position: "CEO, Company",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: aiNeuralImg,
      alt: "John Doe's review on Lamsa infosolutions.",
    },
    {
      id: "2",
      name: "John Doe 2",
      position: "CEO, Company 2",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: cloudComputingImg,
      alt: "John Doe 2's review on Lamsa infosolutions.",
    },
  ];
  return (
    <>
      <section className="testimonial_section">
        <div className="testimonial_inner">
          <div className="testimonial_top">
            <h2>Testimonials</h2>
          </div>
          <div className="testimonial_bottom">
            <div className="testimonial_cards">
              {TestmonialData.map((data) => (
                <div className="testimonial_card" key={data.id}>
                  <div className="testimonial_card_inner">
                    <div className="testimonial_card_top">
                      <img src={data.image} alt={data.alt} />
                    </div>
                    <div className="testimonial_card_bottom">
                      <h3>{data.name}</h3>
                      <p>{data.position}</p>
                      <p>{data.review}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
