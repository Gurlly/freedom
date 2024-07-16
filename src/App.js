
// Components
import Nav from './component/Nav';
import Footer from './component/Footer';
import CarouselComponent from './component/CarouselComponent';
import ServiceButtons from './component/ServiceButtons';
import About from './component/About';
import Ministry from './component/Ministry';
import Contact from './component/Contact';
import FadeIn from './component/FadeIn';

import { Icon } from 'react-icons-kit'
import {alertCircle} from 'react-icons-kit/feather/alertCircle'

function App() {

  return (
    <div className="App min-w-full min-h-dvh flex flex-col">

      <header className="w-full p-4 bg-amber-200 border-b border-stone-800 sticky top-0 left-0 z-50">
        <nav className="md:container md:mx-auto p-0 xl:px-10">
          <Nav/>
        </nav>
      </header>

      <main className="w-full p-5 md:py-10 xl:py-24 flex-1 bg-gradient-to-bl from-zinc-100 via-blue-50 to-blue-100">
        <section id="home" className="md:container md:mx-auto p-0 xl:px-10 mb-10 md:mb-16 lg:mb-24">
          <CarouselComponent/>
        </section>

        <section className="md:container md:mx-auto p-0 xl:px-10 mb-10 md:mb-16 lg:mb-24">
          <ServiceButtons/>
        </section>

        <section id="about" className="md:container md:mx-auto p-0 xl:px-10 mb-10 md:mb-16 lg:mb-24">
          <About/>
        </section>

        <section id="join" className="md:container md:mx-auto p-0 xl:px-10 text-stone-800 mb-10 md:mb-16 lg:mb-24">
          <div className='w-full flex justify-center mb-10 md:mb-16 lg:mb-24'>
            <h1 className='text-2xl lg:text-3xl px-10 py-4 rounded-lg drop-shadow-lg border-2 bg-zinc-100 font-serif font-semibold'>Join a Ministry</h1>
          </div>
          <div className='w-full mb-2 lg:mb-3 flex justify-end'>
            <span className='tooltip tooltip-left' data-tooltip="Click to join a ministry!">
              <button><Icon icon={alertCircle} size={20} /></button>
            </span>
          </div>
          <Ministry/>
        </section>

        {/** Divider Line */}

        <section id="contact" className="md:container md:mx-auto p-0 xl:px-10">
          <div class="divider mb-10 md:mb-16 lg:mb-24"></div>
          <FadeIn>
            <Contact/>
          </FadeIn>
        </section>
      </main>

      <footer className="w-full p-6 bg-blue-500">
        <div className="md:container md:mx-auto p-0 xl:px-10">
          <Footer/>
        </div>
      </footer>

    </div>
  );
}

export default App;
