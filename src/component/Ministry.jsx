import React from 'react'

const ministries = [
    {
        name: "Worship Team",
        id: "wt",
        form: "",
        src: "https://scontent.fmnl33-3.fna.fbcdn.net/v/t39.30808-6/419870894_2157315701272243_6747960498399339119_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1reCCb7WIYwQ7kNvgFu0sZb&_nc_ht=scontent.fmnl33-3.fna&oh=00_AYC7by7VWmihxqv7ufX_QceBcsUNVGmVQ7HZXWGCPjkBOg&oe=669F9D43"
    },
    {
        name: "Communication Team",
        id: "ct",
        form: "",
        src: "https://scontent.fmnl33-5.fna.fbcdn.net/v/t39.30808-6/419917812_2157316594605487_4970233366465305792_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9mXh1z4mZFUQ7kNvgGe3Qhx&_nc_ht=scontent.fmnl33-5.fna&oh=00_AYAlku5dv6MPUiwBli-AFt_VW8ioF1TSsL6c66i8ffusSg&oe=669FBA91"
    },
    {
        name: "Women of Worth",
        id: "wow",
        form: "",
        src: "https://scontent.fmnl33-6.fna.fbcdn.net/v/t39.30808-6/346052100_1250245229191448_8579670501672203261_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=j9m38_vq1lUQ7kNvgHsNbfa&_nc_ht=scontent.fmnl33-6.fna&oh=00_AYBVLYTCwkA8uwh0NghjxF12qk53kMILpJqO6OqoAuTaUw&oe=669FB4F7"
    },
    {
        name: "Pastoral Team",
        id: "pt",
        form: "",
        src: "https://scontent.fmnl33-6.fna.fbcdn.net/v/t39.30808-6/343212106_768221714915864_7664162517929807718_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=GYqGnm52MhwQ7kNvgGNnBV-&_nc_ht=scontent.fmnl33-6.fna&oh=00_AYDwjqXvmBHFp_LUAGqZ1dpmRBlrd9LhstftntMW-zlDGg&oe=669FBC29"
    },
    {
        name: "Kids Ministry",
        id: "km",
        form: "",
        src: "https://scontent.fmnl33-5.fna.fbcdn.net/v/t39.30808-6/342391433_178456735085719_5137668234195100091_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-xyeNz4JJ7kQ7kNvgFN9xiR&_nc_ht=scontent.fmnl33-5.fna&oh=00_AYA44fia8VOYElVQohdAhZncQzEtPej2Ws8QvoUU8NrFVA&oe=669FA0F2"
    },  
    {
        name: "Missionary",
        id: "mission",
        form: "",
        src: "https://scontent.fmnl33-1.fna.fbcdn.net/v/t39.30808-6/321436686_863129198140878_5477641349615972367_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9QbEv9rNxeoQ7kNvgFlx_w-&_nc_ht=scontent.fmnl33-1.fna&oh=00_AYAfP-nL_BnOU7OrCkSIHiMhE7zHGo2JHYgDCLRWh78g6A&oe=669FCD9F"
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
                        className='w-full h-full p-5 absolute top-0 left-0 z-10 text-zinc-50 text-shadow font-extrabold hover:backdrop-blur-sm hover:text-freedom-ligh-blue flex flex-col items-center justify-center transition ease-linear'
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