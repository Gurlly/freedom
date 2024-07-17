import React from 'react'

const ministries = [
    {
        name: "Worship Team",
        id: "wt",
        form: "",
        src: "https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.30808-6/302409710_1809046816099135_358845626151579073_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=FldHIWW385MQ7kNvgGQaQyh&_nc_ht=scontent.fcrk3-2.fna&oh=00_AYDCX87ICJ-UM-kglYtBim8N_9Bcu0SNY8H6QDYUA3RPcg&oe=66997E7F"
    },
    {
        name: "Communication Team",
        id: "ct",
        form: "",
        src: "https://scontent.fcrk3-1.fna.fbcdn.net/v/t39.30808-6/419917812_2157316594605487_4970233366465305792_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1H-uI-Ko9H0Q7kNvgFKukna&_nc_ht=scontent.fcrk3-1.fna&oh=00_AYAYXAD6QX9hxubMmW_hMDsmVFxYoz2Jtq6N17TPCKWp_A&oe=66995B51"
    },
    {
        name: "Women of Worth",
        id: "wow",
        form: "",
        src: "https://scontent.fcrk3-1.fna.fbcdn.net/v/t39.30808-6/346052100_1250245229191448_8579670501672203261_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MnFCpTz5QTgQ7kNvgGbgX1h&_nc_ht=scontent.fcrk3-1.fna&oh=00_AYAhCEhdr9i7Msy4sJhODcauEoVsaLa3LP_JH5Zch4ll4w&oe=669955B7"
    },
    {
        name: "Pastoral Team",
        id: "pt",
        form: "",
        src: "https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.30808-6/343420230_744544204127349_8779161930402154140_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2Zh23rdlGRAQ7kNvgGR6H8A&_nc_ht=scontent.fcrk3-2.fna&oh=00_AYBOfN5DWURltrc8qidhF4Rizd9jvzm4cmay17ALgZy5WQ&oe=669967FA"
    },
    {
        name: "Kids Ministry",
        id: "km",
        form: "",
        src: "https://scontent.fcrk3-1.fna.fbcdn.net/v/t39.30808-6/321827277_492814942981485_3138112409899717830_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=fPkLSnWPQZQQ7kNvgFtN-i5&_nc_ht=scontent.fcrk3-1.fna&oh=00_AYCnxcNLqMe5wfDWe8HVdk-04EDr7gROyHnXRHOZmGvYNQ&oe=669954D1"
    },  
    {
        name: "Missionary",
        id: "mission",
        form: "",
        src: "https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.30808-6/441021601_2230935037243642_4337376505896511895_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=E67EmCKhvmkQ7kNvgFW88t6&_nc_ht=scontent.fcrk3-2.fna&oh=00_AYBKmY0w0LfGg2IGVBqvlVLDeDEJx91qY8t8YcINA4M1Dg&oe=66995646"
    }
]

const Ministry = () => {
  return (
    <>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10'>
            {
                ministries.map(ministry => (
                    <div className='w-full h-72 md:h-80 relative rounded-lg shadow-md shadow-stone-600' key={ministry.id}>
                        <div className='w-full h-full absolute top-0 left-0 z-0 rounded-lg'>
                            <img className='w-full h-full object-cover object-center aspect-square rounded-lg' src={ministry.src} alt={ministry.name} />
                        </div>
                        <a 
                        className='w-full h-full p-5 absolute top-0 left-0 z-10 text-white text-shadow font-extrabold hover:backdrop-blur-sm hover:text-sky-400 flex flex-col items-center justify-center transition ease-linear'
                        href="/"
                        >
                            <h1 className='w-full text-3xl xl:text-4xl text-center'>{ministry.name}</h1>
                        </a>
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default Ministry