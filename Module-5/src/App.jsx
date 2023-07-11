import Page from "./layout/Page";

const App = () => {
  const data = {
    title: "Assignment of Ostad",
    clock: new Date().toLocaleTimeString(),
    mainTitle: "The content section should contain a button and a text area.",
    button: "Click me",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, voluptas Lorem ipsum dolor, sit amet 
    consectetur adipisicing elit.Architecto adipisci placeat
    assumenda pariatur! Dignissimos laboriosam nulla aliquid
    qui nihil et.`,
  };

  return (
    <div>
      <Page data={data} />
    </div>
  );
};

export default App;
