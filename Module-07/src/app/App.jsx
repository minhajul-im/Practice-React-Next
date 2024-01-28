import Navbar from "../components/header/Navbar";
import Hero from "../components/header/Hero";
import TaskContainer from "../components/main/TaskContainer";
import Footer from "../components/footer/Footer";

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
