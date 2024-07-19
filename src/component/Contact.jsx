import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

import { ValidationError } from '@formspree/react';

import useFreedom from '../hooks/useFreedom';

const Contact = () => {

    const {
        locations,
        location,
        fade,
        state,
        handleSubmit,
        changeLocation
    } = useFreedom();

  return (
    <>
        {/** Drowdown */}
        <div className="dropdown md:mb-3">
            <label className="px-10 mb-3 btn border-2 border-freedom-gray bg-freedom-blue text-zinc-50 font-serif tracking-wide font-semibold" tabIndex="0">{location.name}</label>
            <div className="dropdown-menu dropdown-menu-bottom-right border bg-zinc-50 border-freedom-gray">
                {
                    locations.map(loc => (
                        <a 
                        className="dropdown-item text-sm" 
                        href={`#${loc.id}`}
                        onClick={(e) => {
                            e.preventDefault();
                            changeLocation(loc.id);
                        }}
                        key={loc.id}
                        >
                            {loc.name}
                        </a>
                    ))
                }
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-14 text-stone-800 mb-10 md:mb-16 lg:mb-20">
            <div className="w-full h-[30rem] md:h-[27rem] lg:h-[33rem] xl:h-[35rem] flex flex-col p-4 lg:p-6 rounded-lg shadow shadow-freedom-gray bg-zinc-50">
                <div className="w-full">
                    <div className='grid grid-cols-12 items-center mb-3'>
                        <FaMapMarkerAlt className='mr-4' />
                        <h3 className={`col-start-2 col-end-12 transition-opacity duration-1000 ${fade ? "opacity-100" : "opacity-0"}`}>{location.address}</h3>
                    </div>
                    <div className='grid grid-cols-12 items-center mb-3'>
                        <FaPhone className='mr-4'/>
                        <h3 className={`col-start-2 col-end-12 transition-opacity duration-1000 ${fade ? "opacity-100" : "opacity-0"}`}><a href="tel:+639969347564">0996-934-7564</a></h3>
                    </div>
                    <div className='grid grid-cols-12 items-center mb-3'>
                        <FaEnvelope className='mr-4'/>
                        <h3 className={`col-start-2 col-end-12 transition-opacity duration-1000 ${fade ? "opacity-100" : "opacity-0"}`}><a href="mailto:freedom.center@gmail.com">freedom.center@gmail.com</a></h3>
                    </div>
                </div>
                <div className="w-full flex-1">
                    <iframe 
                    src={location.src}
                    title={`${location.name} Outreach`}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className='w-full h-full border border-stone-800'
                    ></iframe>
                </div>
            </div>
            <form 
            onSubmit={handleSubmit}
            className="w-full h-[30rem] md:h-[27rem] lg:h-[33rem] xl:h-[35rem] p-4 lg:p-6 rounded-lg shadow shadow-freedom-gray bg-zinc-50 flex flex-col gap-y-3"
            >
                <h1 className='font-serif text-2xl font-semibold'>Contact Us:</h1>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Name" 
                    className="rounded-lg" 
                    required 
                    aria-label='Your Name'
                />
                <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                />
                <input 
                type="email" 
                name="email" id="email" 
                placeholder="Email Address" 
                className='rounded-lg' 
                required 
                aria-label='Your Email'
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <input 
                type="text" 
                name="subject" 
                id="subject" 
                placeholder="Subject" 
                maxLength={10} 
                className='rounded-lg mb-2' 
                required 
                aria-label='What is the email subject'
                />
                <ValidationError 
                    prefix="Subject" 
                    field="subject"
                    errors={state.errors}
                />
                <textarea placeholder='Message...' name="message" id="message" className='w-full h-full rounded-lg resize-none mb-4' required aria-label='Send a Message'></textarea>
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" className='w-40 font-serif font-semibold self-start btn bg-freedom-ligh-blue btn-md text-zinc-50'>Send</button>
            </form>
        </div>
    </>
  )
}

export default Contact