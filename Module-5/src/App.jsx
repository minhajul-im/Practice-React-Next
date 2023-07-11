import Page from "./layout/Page";

const App = () => {
  // all data
  const data = {
    title: "Assignment of Ostad",
    mainTitle: "The content section should contain a button and a text area.",
    button: "Click me",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, voluptas Lorem ipsum dolor, sit amet 
    consectetur adipisicing elit.Architecto adipisci placeat
    assumenda pariatur! Dignissimos laboriosam nulla aliquid
    qui nihil et.`,
    linkedin: [`https://www.linkedin.com/in/minhajul-im/`, "Linkedin"],
    github: [`https://github.com/minhajul-im`, "Github"],
    facebook: [`https://www.facebook.com/minhajul.im`, "Facebook"],
  };

  return (
    <div>
      <Page data={data} />
    </div>
  );
};

export default App;
