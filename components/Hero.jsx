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
  let { description, PDF } = hero;

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
        PDF: "hero-admin__PDF",
      });

  return hero != null ? (
    <section>
      <div className={classDefinition.global} id='hero'>
        <div className='hero-titles'>
          <div className={classDefinition.title}>
            {admin && <label>Titre actuel :</label>}
            <h1>Cultivez votre champ de compétences</h1>
          </div>
          <div className={classDefinition.catchphrase}>
            {admin && <label>Sous-Titre actuel :</label>}
            <h3>avec la FRSEA Auvergne-Rhône-Alpes</h3>
          </div>
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
            <div className={classDefinition.PDF}>
              <label>Fichier PDF actuel :</label>
              <Link href={`/formations`}>
                <a target='_blank' rel='noopener noreferrer'>
                  <p title='Voir le Fichier' style={{ color: "blue" }}>
                    {PDF}
                  </p>
                </a>
              </Link>
            </div>
            <div className='line'></div>
            <div className={classDefinition.content}>
              {admin && <label>"Qui sommes-nous ?" :</label>}
              <p>{description}</p>
            </div>
          </>
        )}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Hero;
