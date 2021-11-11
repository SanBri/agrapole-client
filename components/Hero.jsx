const Hero = ({ admin = false }) => {
  let classDefinition = {};

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
      <div className={classDefinition.global}>
        <div className={classDefinition.title}>
          {admin && <label>Titre actuel :</label>}
          <h1>FRSEA Auverge-Rhône-Alpes</h1>
        </div>
        <div className={classDefinition.catchphrase}>
          {admin && <label>Sous-Titre actuel :</label>}
          <h3>Promouvoir les métiers de l&#39;Agriculture</h3>
        </div>
        <div className={classDefinition.content}>
          {admin && <label>Description actuelle :</label>}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            suscipit ullam quam voluptate deleniti, doloremque saepe placeat.
            Libero laudantium quidem maiores mollitia. Eius ullam nam, ipsam
            fugiat ab blanditiis harum? Inventore consectetur quia rem molestias
            obcaecati incidunt sit id perferendis quos. Accusamus repellat
            dignissimos dolorum voluptatem labore neque voluptates, suscipit
            eveniet molestiae quos vitae dolore natus animi numquam architecto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
