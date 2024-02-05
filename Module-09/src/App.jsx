import Aside from "./components/Aside";
import Navbar from "./components/Navbar";
import Youtube from "./page/Youtube";

export default function App() {
  return (
    <main>
      <Navbar />
      <section className='flex'>
        <Aside />
        <Youtube />
      </section>
    </main>
  );
}
