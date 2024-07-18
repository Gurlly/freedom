
import { AiOutlinePlus } from 'react-icons/ai';
import { FiMinus } from 'react-icons/fi';

import FadeIn from './FadeIn'

import useFreedom from '../hooks/useFreedom';


const About = () => {

  const {
    accordionItems,
    changeActiveItem
  } = useFreedom();

  return (
    <>
        <div className="max-h-max grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 md:mb-14 xl:mb-24">
          <div 
          className="p-3 md:p-5 lg:p-8 xl:p-10 text-stone-800 border rounded-lg shadow-md shadow-stone-400 bg-slate-50 md:text-lg lg:text-xl">
            <FadeIn>
              <h1 className="font-serif text-2xl md:text-4xl lg:text-6xl font-extrabold mb-4 lg:mb-6">
                Welcome to Freedom!!
              </h1>
            </FadeIn>
            <FadeIn>
              <p className="text-justify mb-3 lg:mb-5 text-stone-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
                exercitationem. Ut excepturi similique ipsam? Eius ea aliquam labore
                explicabo voluptates culpa ducimus saepe autem aliquid. Dolorem
                minima doloremque nisi alias!
                <br />
                <br />
                Commodi aspernatur nostrum iste excepturi, ut unde accusantium
                aliquam consectetur nemo corporis cupiditate ducimus rem, sunt in
                tempore voluptatibus necessitatibus quidem praesentium.
              </p>
            </FadeIn>
          </div>
          <FadeIn>
            <div className="w-full h-full hidden lg:block">
              <img 
              src="https://scontent.fcrk3-1.fna.fbcdn.net/v/t39.30808-6/449520234_2269535776716901_1251191491298226156_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=XYdHlGK0KzEQ7kNvgEsXf9Y&_nc_ht=scontent.fcrk3-1.fna&oh=00_AYDykIUTsVq7_oebElkPO4MW72QPo5alhz4X6FxJpyV0Xw&oe=669BAD79"
              alt="about freedom"
              className="w-full h-full rounded-lg object-cover object-center"
              />
            </div>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-8">
            {
            accordionItems.map((acc) => (
                <div key={acc.id}>
                    <img
                    src={acc.src}
                    alt={acc.title}
                    className="w-full h-64 object-cover object-center rounded-t-md"
                    />
                    <div className="accordion-group accordion-group-hover">
                        <div className="accordion shadow-lg shadow-zinc-300">
                            <input type="checkbox" id={acc.id} className="accordion-toggle" />
                            <label 
                            htmlFor={acc.id} 
                            className={`accordion-title flex-row justify-between items-center ${acc.active ? "text-amber-300" : "text-zinc-100"} bg-stone-900 hover:bg-stone-800 transition-colors ease-linear delay-75`}
                            onClick={()=>changeActiveItem(acc.id)}
                            >
                                {acc.title}       
                                {acc.active ? <FiMinus/> : <AiOutlinePlus/>}   
                            </label>
                            <div className="accordion-content text-content2 border-0 bg-zinc-100">
                                <div className="min-h-0">
                                    {acc.content}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>


    </>
  );
};

export default About;
