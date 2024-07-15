import React from 'react'

import Modals from './Modals'

const ServiceButtons = () => {
  return (
    <>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-5 text-stone-800'>
            <Modals/>
            {/** Schedule Modal */}
            <input className="modal-state" id="schedule" type="checkbox" />
            <div className="modal">
                <label className="modal-overlay" htmlFor="schedule"></label>
                <div className="modal-content w-5/6 max-w-sm p-0 flex flex-col bg-zinc-100">
                    <div className='flex justify-between items-center p-4'>
                        <h2 className="text-xl font-bold">Service Schedule</h2>
                        <label htmlFor="schedule" className=" cursor-pointer text-xl hover:font-semibold">✕</label>
                    </div>
                    <div className='p-4'>
                        <p><span className='me-3 font-semibold'>Pateros:</span> <span className=' float-end'>9:00am - 11:00am</span></p>
                        <p><span className='me-3 font-semibold'>Taguig:</span> <span className=' float-end'>9:00am - 11:00am</span></p>
                        <p><span className='me-3 font-semibold'>Caloocan:</span> <span className=' float-end'>9:00am - 11:00am</span></p>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default ServiceButtons