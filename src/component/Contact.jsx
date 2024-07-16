
import { useEffect, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

import { useForm, ValidationError } from '@formspree/react';

const locations = [
    {
        name: "Pateros",
        id: "pateros",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d608.213656742038!2d121.07605746097586!3d14.546820689441631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c983fe270339%3A0x3f255f02c096e5cf!2sFreedom%20Christian%20Fellowship!5e0!3m2!1sen!2sph!4v1721008223760!5m2!1sen!2sph",
        address: "1 Capt. Musni St. Sta. Ana, Pateros",
        tel: "9969347564"
    },
    {
        name: "Taguig",
        id: "taguig",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241.3920273086892!2d121.0565922350438!3d14.526403019864421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c964b42fd051%3A0x1a880af2784171af!2sOld%20Fisher%20Valley%20School!5e0!3m2!1sen!2sph!4v1721009631407!5m2!1sen!2sph",
        address: "B51, L11 B51, Taguig, 1639 Metro Manila",
        tel: "9969347564"
    },
    {
        name: "North Caloocan",
        id: "caloocan",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1531.2076959982614!2d121.03382213490191!3d14.746401032121813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b04ac6dc2085%3A0xd6059cfc01b55278!2sFreedom%20Christian%20Fellowship%20North%20Caloocan!5e0!3m2!1sen!2sph!4v1721009213003!5m2!1sen!2sph",
        address: "P2WM+GR6, Congressional Rd Ext, Extension, Caloocan, Metro Manila",
        tel: "(02)77560913"
    }
]

const Contact = () => {

    const [location, setLocation] = useState(locations[0]);

    const [state, handleSubmit] = useForm("mnnanzbd");

    const changeLocation = (locID) => {
        const selectedLocation = locations.find(loc => loc.id === locID);
        if (selectedLocation) {
            setFade(false); // Trigger fade-out
            setTimeout(() => {
                setLocation(selectedLocation);
                setFade(true); // Trigger fade-in
            }, 500); // Adjust timeout to match your CSS transition duration
        }
    }

    const [fade, setFade] = useState(false);

    useEffect(() => {
        setFade(true);
    }, [])

  return (
    <>
        {/** Drowdown */}
        <div className="dropdown md:mb-3">
            <label className="btn btn-primary mb-3" tabIndex="0">{location.name}</label>
            <div className="dropdown-menu dropdown-menu-bottom-right">
                {
                    locations.map(loc => (
                        <a 
                        className="dropdown-item text-sm" 
                        href={`#${loc.id}`}
                        onClick={(e) => {
                            e.preventDefault();
                            changeLocation(loc.id);
                        }}
                        >
                            {loc.name}
                        </a>
                    ))
                }
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-14 text-stone-800 mb-10 md:mb-16 lg:mb-20">
            <div className="w-full h-[30rem] md:h-[27rem] lg:h-[33rem] xl:h-[35rem] flex flex-col p-4 lg:p-6 rounded-lg shadow shadow-zinc-800 bg-zinc-50">
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
                    referrerpolicy="no-referrer-when-downgrade"
                    className='w-full h-full border border-stone-800'
                    ></iframe>
                </div>
            </div>
            <form 
            onSubmit={handleSubmit}
            className="w-full h-[30rem] md:h-[27rem] lg:h-[33rem] xl:h-[35rem] p-4 lg:p-6 rounded-lg shadow shadow-zinc-800 bg-zinc-50 flex flex-col gap-y-3"
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
                <button type="submit" className='w-40 self-start btn btn-success btn-md'>Send</button>
            </form>
        </div>
    </>
  )
}

export default Contact