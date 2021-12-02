import { useSelector } from "react-redux";

const About = () => {
  const heroDescription = useSelector(
    (state) => state.heroReducer.hero.description
  );

  return (
    <div className='about'>
      <div className='about-text'>
        <div className='about-text__title'>
          <h2>Qui sommes-nous ?</h2>
        </div>
        <div className='about-text__content'>
          <p>{heroDescription}</p>
        </div>
      </div>
      <div className='about-image'></div>
    </div>
  );
};

export default About;
