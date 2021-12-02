import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getHero } from "../actions/hero";

const Hero = ({ admin = false }) => {
  const dispatch = useDispatch();
  let classDefinition = {};

  useEffect(() => {
    dispatch(getHero());
  }, [dispatch]);

  const hero = useSelector((state) => state.heroReducer.hero);
  let { title, catchphrase, description } = hero;

  // if (title == null || catchphrase == null || description == null) {
  //   (title = "FRSEA Auvergne-Rhône-Alpes"),
  //     (catchphrase = "Promouvoir les métiers de l'Agriculture"),
  //     (description =
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi labore inventore facilis. Ea nihil assumenda ipsam quam reiciendis aliquid sunt qui corporis in culpa molestiae doloremque rerum reprehenderit, minima quod.");
  // }

  !admin
    ? (classDefinition = {
        global: "hero",
        title: "hero__title",
        catchphrase: "hero__catchphrase",
      })
    : (classDefinition = {
        global: "hero-admin",
        title: "hero-admin__title",
        catchphrase: "hero-admin__catchphrase",
        content: "hero-admin__content",
      });

  return (
    <section>
      <div className={classDefinition.global} id='hero'>
        <div className={classDefinition.title}>
          {admin && <label>Titre actuel :</label>}
          <h1>{title}</h1>
        </div>
        <div className={classDefinition.catchphrase}>
          {admin && <label>Sous-Titre actuel :</label>}
          <h3>{catchphrase}</h3>
        </div>
        {!admin ? (
          <Link href={`/formations`}>
            <a target='_blank' rel='noopener noreferrer'>
              <div className='button'>
                <h3>Trouvez une formation</h3>
                <p className='bold'>Voir le programme</p>
              </div>
            </a>
          </Link>
        ) : (
          <>
            <div className='line'></div>
            <div className={classDefinition.content}>
              {admin && <label>"Qui sommes-nous ?" :</label>}
              <p>{description}</p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;
