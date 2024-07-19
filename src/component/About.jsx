
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
        <div className="max-h-max grid grid-cols-1 gap-8 mb-8 md:mb-14 xl:mb-24">
          <div 
          className="p-3 md:p-5 lg:p-8 xl:p-10 text-stone-800 border rounded-xl shadow-md shadow-freedom-gray bg-zinc-50 md:text-lg lg:text-xl">
            <FadeIn>
              <h1 className="font-serif text-2xl md:text-4xl lg:text-6xl font-extrabold mb-4 lg:mb-6">
                Welcome to Freedom!!
              </h1>
            </FadeIn>
            <FadeIn>
              <p className="text-justify mb-3 lg:mb-5 text-stone-600">
              At Freedom Christian Fellowship, we extend a warm and heartfelt welcome to you. 
              Our church is a place where love, faith, and community come together to create an environment where everyone can feel at home. 
              We are committed to living out the teachings of Jesus Christ, and we invite you to join us on this incredible journey of faith, growth, and service.
              <br/><br/>
              Our diverse and inclusive Christian community is dedicated to worship, spiritual growth, and making a positive impact in the world. 
              Whether you are new to the faith, exploring Christianity, or seeking a new church home, you will find a supportive and loving congregation here.
              <br/><br/>
              Join us for inspiring worship services featuring powerful music, relevant messages, and a warm, inviting atmosphere. 
              At Freedom Christian Fellowship, meaningful relationships are formed, and spiritual growth is nurtured through various small groups, Bible studies, and fellowship opportunities.
              <br/><br/>
              We believe in putting our faith into action and making a difference in our community and beyond. Our outreach and service programs provide opportunities to share the love of Christ through acts of kindness and compassion.
              <br/><br/>
              Come as you are, and experience the warmth and hospitality of Freedom Christian Fellowship. 
              Discover a place where you can grow in your faith, find support and encouragement, and be part of a loving church family. 
              We look forward to welcoming you and walking together on this journey of faith.
              </p>
            </FadeIn>
          </div>
          {
            /**
              <FadeIn>
                <div className="w-full h-full hidden">
                  <img 
                  src="https://scontent.fcrk3-1.fna.fbcdn.net/v/t39.30808-6/449520234_2269535776716901_1251191491298226156_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=XYdHlGK0KzEQ7kNvgEsXf9Y&_nc_ht=scontent.fcrk3-1.fna&oh=00_AYDykIUTsVq7_oebElkPO4MW72QPo5alhz4X6FxJpyV0Xw&oe=669BAD79"
                  alt="about freedom"
                  className="w-full h-full rounded-lg object-cover object-center"
                  />
                </div>
              </FadeIn>
             */
          }
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
                        <div className="accordion shadow-lg shadow-freedom-gray">
                            <input type="checkbox" id={acc.id} className="accordion-toggle" />
                            <label 
                            htmlFor={acc.id} 
                            className={`accordion-title flex-row justify-between items-center ${acc.active ? "text-amber-300" : "text-zinc-100"} bg-freedom-blue hover:text-amber-300 border-0 transition-colors ease-linear delay-75`}
                            onClick={()=>changeActiveItem(acc.id)}
                            >
                                {acc.title}       
                                {acc.active ? <FiMinus/> : <AiOutlinePlus/>}   
                            </label>
                            <div className="accordion-content text-content2 border-0 bg-zinc-50">
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
