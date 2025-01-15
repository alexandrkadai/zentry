import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Features from './components/ Features';

export default function App() {
  return (
    <main className="realtive min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
    </main>
  );
}
