
import { FaCalendarAlt } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { FaCommentDots } from 'react-icons/fa';
import { FaGift } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

import FourSLContent from './FourSLContent';

const Modals = () => {

    const ModalLinks = [
        {
            name: "Schedule",
            id: "serviceSchedule",
            icon: <FaCalendarAlt className='text-3xl' />,
            content: [
                <p key="pateros" className='flex justify-between'><span className='me-3 font-semibold'>Pateros:</span> 9:00am - 11:00am</p>,
                <p key="taguig" className='flex justify-between'><span className='me-3 font-semibold'>Taguig:</span> 9:00am - 11:00am</p>,
                <p key="caloocan" className='flex justify-between'><span className='me-3 font-semibold'>Caloocan:</span> 9:00am - 11:00am</p>,
            ]
        },
        {
            name: "Join a Group",
            id: "dGroup",
            icon: <FaUsers className='text-3xl' />,
            content: <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSczXCt7z4dtcSVRYM2BqQQWopXJ3S3ji_GfDWSV8VxYFOFpaQ/viewform?embedded=true" title='D-Group Google' className='w-full h-[40rem]'>Loading…</iframe>
        },
        {
            name: "Talk to Us",
            id: "talkToUs",
            icon: <FaCommentDots className='text-3xl' />,
            content: [
                <h2 key="pateros-taguig" className='font-bold mb-3'>Pateros and Taguig:</h2>,
                <p key="email-1" className='flex justify-between text-ellipsis overflow-hidden'><span className='me-3'>Email:</span> <a href="mailto:freedom.center@gmail.com" className='text-blue-600 underline'>freedom.center@gmail.com</a></p>,
                <p key="tel-1" className='flex justify-between text-ellipsis overflow-hidden'><span className='me-3'>Telephone:</span> <a href="tel:+63996 934 7564" className='text-blue-600 underline'>0996-934-7564</a></p>,
                <h2 key="caloocan" className='font-bold my-3'>Caloocan:</h2>,
                <p key="email-2" className='flex justify-between text-ellipsis overflow-hidden'><span className='me-3'>Email:</span> <a href="mailto:freedom.center@gmail.com" className='text-blue-600 underline'>freedom.center@gmail.com</a></p>,
                <p key="tel-2" className='flex justify-between text-ellipsis overflow-hidden'><span className='me-3'>Telephone:</span> <a href="tel:+63996 934 7564" className='text-blue-600 underline'>0996-934-7564</a></p>,
            ]
        },
        {
            name: "Tithes",
            id: "tithes",
            icon: <FaGift className='text-3xl' />,
            content: <img src="https://lh3.googleusercontent.com/drive-viewer/AKGpihYwLI0S6B-rP7fozWDXoVd4BexKCP_9iJdsh_TP5fs8RJIt5b7YHaHnTq3LaIXPFP-VK0cm74Dh5Wc5_LdqCQjF8ZFD3AWcsSY=s1600-rw-v1" alt="Gcash Payment" className='rounded-lg' />
        },
        {
            name: "4SL",
            id: "fourSL",
            icon: <FaHeart className='text-3xl' />,
            content: <FourSLContent/>
        }
    ]

  return (
    <>
        {
            ModalLinks.map(modal => (
                <div key={modal.id} className={modal.name === '4SL' ? 'col-span-2 md:col-span-1' : ''}>
                    <label
                    className="w-full p-2 flex flex-col items-center"
                    htmlFor={modal.id}
                    >
                        <div className='rounded-full p-4 mb-2 border bg-amber-100 text-violet-700 hover:bg-amber-200 hover:text-violet-800 transition-colors ease-linear delay-75 cursor-pointer'>
                            {modal.icon}
                        </div>
                        <h3 className='font-semibold text-center cursor-pointer hover:underline underline-offset-4'>{modal.name}</h3>
                    </label>
                    <input className="modal-state" id={modal.id} type="checkbox" />
                    <div className="modal">
                        <label className="modal-overlay"></label>
                        <div className={`modal-content w-5/6 max-h-[90%] ${modal.id === "dGroup" ? "max-w-[95%] md:max-w-2xl" : ""} p-0 flex flex-col bg-zinc-100 border border-zinc-800`}>
                            <div className='flex justify-between items-center p-4 border-b-2 bg-blue-500 border-stone-800'>
                                <h2 className="text-xl font-bold text-zinc-100">{modal.name}</h2>
                                <label htmlFor={modal.id} className=" cursor-pointer text-xl hover:font-semibold">✕</label>
                            </div>
                            <div className='p-4'>
                                {modal.content}
                            </div>
                        </div>
                    </div>
                </div>  
            ))
        }
    </>
  )
}

export default Modals