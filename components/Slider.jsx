import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  const baseUrl = "http://react-responsive-carousel.js.org/assets/";
  const data = [
    {
      id: 1,
      image: `${baseUrl}1.jpeg`,
      title: `Partenaire n°1`,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nobis unde quisquam cumque culpa facilis fugit error aliquid dolores, ex dicta quia aut at in repudiandae dolorem, omnis quibusdam laudantium.",
    },
    {
      id: 2,
      image: `${baseUrl}2.jpeg`,
      title: `Partenaire n°2`,
      text: "Consequuntur nobis unde quisquam cumque culpa facilis fugit error aliquid dolores, ex dicta quia aut at in repudiandae dolorem, omnis quibusdam laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      image: `${baseUrl}3.jpeg`,
      title: `Partenaire n°3`,
      text: "Omnis quibusdam laudantium, lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dicta quia aut at in repudiandae dolorem, Consequuntur nobis unde quisquam cumque culpa facilis fugit error aliquid dolores.",
    },
  ];
  return (
    <section>
      <div className='slider'>
        <div className='slider__title'>
          <h2>Nos Partenaires</h2>
        </div>
        <div className='slider__carousel'>
          <Carousel
            autoPlay
            interval={2500}
            infiniteLoop
            showThumbs={false}
            showStatus={false}
          >
            {data.map((slide) => (
              <div key={slide.id}>
                <h2 className='slide__title'>{slide.title}</h2>
                <p className='slide__text'>{slide.text}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Slider;
