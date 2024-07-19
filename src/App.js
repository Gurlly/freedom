
// Components
import Nav from './component/Nav';
import Footer from './component/Footer';
import CarouselComponent from './component/CarouselComponent';
import ServiceButtons from './component/ServiceButtons';
import About from './component/About';
import Ministry from './component/Ministry';
import Contact from './component/Contact';
import FadeIn from './component/FadeIn';

import { FiInfo } from 'react-icons/fi';
import { FaFacebookSquare, FaFacebookMessenger } from 'react-icons/fa';

function App() {

  return (
    <div className="App min-w-full min-h-dvh flex flex-col text-freedom-text">

      <header className="w-full p-4 bg-freedom-yellow border-b-2 border-stone-800 sticky top-0 left-0 z-50">
        <nav className="md:container md:mx-auto p-0 xl:px-10">
          <Nav/>
        </nav>
      </header>

      <main className="w-full p-5 md:py-10 xl:py-16 flex-1 bg-gradient-to-r from-white via-sky-100 to-zinc-50">
        <section id="home" className="md:container md:mx-auto p-0 xl:px-10 mb-10 md:mb-16 lg:mb-24">
          <CarouselComponent/>
        </section>

        <section className="md:container md:mx-auto p-0 xl:px-10 mb-10 md:mb-16 lg:mb-24">
          <ServiceButtons/>
        </section>

        <section id="about" className="md:container md:mx-auto p-0 xl:px-10 mb-10 md:mb-16 lg:mb-24">
          <About/>
        </section>

        <section id="join" className="md:container md:mx-auto p-0 xl:px-10 text-freedom-text mb-10 md:mb-16 lg:mb-20">
          <div className='w-full flex justify-center mb-10 md:mb-16 lg:mb-24'>
            <h1 className='text-2xl lg:text-3xl px-10 py-4 rounded-lg drop-shadow-lg border-2 bg-zinc-50 font-serif font-semibold'>Join a Ministry</h1>
          </div>
          <div className='w-full mb-2 lg:mb-3 flex justify-end'>
            <span className='tooltip tooltip-left' data-tooltip="Click to join a ministry!">
              <button><FiInfo size={20}/></button>
            </span>
          </div>
          <Ministry/>
        </section>

        {/** Divider Line */}

        <section id="contact" className="md:container md:mx-auto p-0 xl:px-10">
          <div className="divider mb-10 md:mb-16 lg:mb-24 divide-black"></div>
          <FadeIn>
            <Contact/>
          </FadeIn>
        </section>

        <section className="md:container md:mx-auto p-0 xl:px-10 mb-6 md:mb-9 lg:mb-12 xl:mb-0">
          <div className='w-full flex items-center justify-center gap-x-5 md:gap-x-8'>
            <a className='text-5xl lg:text-6xl text-blue-600 hover:scale-110 transition-transform ease-linear delay-75 duration-75 rounded-lg' href="https://www.facebook.com/FreedomChristianFellowshipPH" target='_blank' rel="noreferrer">
              <FaFacebookSquare/>
            </a>
            <a className='text-5xl lg:text-6xl text-blue-600 hover:scale-110 transition-transform ease-linear delay-75 duration-75 rounded-lg' href="https://www.facebook.com/profile.php?id=100009815023687" target='_blank' rel="noreferrer">
              <FaFacebookMessenger/>
            </a>
          </div>
        </section>
      </main>

      <footer className="w-full p-6 bg-freedom-blue">
        <div className="md:container md:mx-auto p-0 xl:px-10">
          <Footer/>
        </div>
      </footer>

    </div>
  );
}

export default App;
