import Hero from "../components/header/Hero";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import TaskContainer from "../components/main/TaskContainer";

export default function App() {
  return (
    <main className='bg-[#1D212B] text-white'>
      <Navbar />
      <Hero />
      <TaskContainer />
      <Footer />
    </main>
  );
}
