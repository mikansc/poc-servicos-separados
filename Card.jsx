const response = {
  cachorros: {
    filhotes: {
      animais: 5,
      qtd_racao: 60,
      qtd_antipulga: 9,
      anti_parasitario: 5,
    },
    adultos: {
      animais: 5,
      qtd_racao: 60,
      qtd_antipulga: 9,
      anti_parasitario: 5,
    },
  },
  gatos: {
    filhotes: {
      animais: 5,
      qtd_racao: 60,
      qtd_antipulga: 9,
      anti_parasitario: 5,
    },
    adultos: {
      animais: 5,
      qtd_racao: 60,
      qtd_antipulga: 9,
      anti_parasitario: 5,
    },
  },
};

const Card = ({ title, value }) => {
  return (
    <div class="card">
      <span class="title">{title}</span>
      <span class="value">{value}</span>
    </div>
  );
};

const Section = ({ title, image, children }) => {
  return (
    <section class="data-row">
      <h2>{title}</h2>
      <div class="img-container">
        <img src={image} alt={title} />
      </div>
      {children}
    </section>
  );
};

<Card title="Kg de Ração" value="60" />;
<Card title="Antiparasitário" value="5" />;
<Card title="Antipulgas" value="9" />;
<Card title="Cachorros" value="2" />;

const DashboardPage = () => {
  // ...

  return (
    <Section title="Filhote" image="./cachorro.svg">
      <Card title="Kg de ração" value={response.cachorros.adultos.qtd_racao} />
      <Card
        title="Antiparasitário"
        value={response.cachorros.adultos.anti_parasitario}
      />
    </Section>
  );
};
