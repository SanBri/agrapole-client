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

  !admin
    ? (classDefinition = {
        global: "hero",
        title: "hero__title",
        catchphrase: "hero__catchphrase",
        content: "hero__content",
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
          <h1>{hero.title}</h1>
        </div>
        <div className={classDefinition.catchphrase}>
          {admin && <label>Sous-Titre actuel :</label>}
          <h3>{hero.catchphrase}</h3>
        </div>
        <div className={classDefinition.content}>
          {admin && <label>Description actuelle :</label>}
          <p>{hero.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
