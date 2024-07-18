
import { useState, useEffect, useRef } from "react";

import Prayer from '../resources/4SL-Prayer.mp3'


// Page Components
const PageOne = () => {
    return (
        <>
            <div className="flex items-center gap-x-3 mb-3">
                <h1 className="text-4xl font-serif font-bold">1</h1>
                <h2 className="font-medium text-justify">God Loves and Knows You</h2>
            </div>
            <div>
                <h5 className="font-semibold mb-1">God's Love</h5>
                <p className="text-justify mb-3">"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." <span className="text-sky-600">(John 3:16)</span></p>
            </div>
            <div>
                <h5 className="font-semibold mb-1">God's Plan</h5>
                <p className="text-justify mb-4">"Now this is eternal life: that they know you, the only true God, and Jesus Christ, whom you have sent." <span className="text-sky-600">(John 17:3)</span></p>
                <p className="text-justify">What stops us from knowing God personally?</p>
            </div>
        </>
    )
}

const PageTwo = () => {
    return (
        <>
            <div className="flex items-center gap-x-3 mb-3">
                <h1 className="text-4xl font-serif font-bold">2</h1>
                <h2 className="font-medium text-justify">Man is sinful and separated from God</h2>
            </div>
            <div>
                <h5 className="font-semibold mb-1">Man is Sinful</h5>
                <p className="text-justify mb-2">"All have sinned and fall short of the glory of God." <span className="text-sky-600">(Romans 3:23)</span></p>
                <p className="text-justify mb-3">Man was made to be close to God, but his stubbornness led him away, breaking that connection. This stubbornness, shown by rebellion or indifference, is called sin in the Bible.</p>
            </div>
        </>
    )
}

const PageThree = () => {
    return (
        <>  
            <div>
                <h5 className="font-semibold mb-1">Man is Separated</h5>
                <p className="text-justify mb-2">"The wages of sin is death" <span className="text-gray-500">[spiritual separation from God]</span> <span className="text-sky-600">(Romans 6:23)</span></p>
                <img src="https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_tczyMat05hYTnmWjTG0Qn4pTNQe9r6jKzbWIt7hTTvX3XUpRVxt_JInHLpEmM5as36CNWLTVp2KJa9qAlphddWC1fI0gQ31FQhNIlsK3LeIJl2o14Zmg=s0-d" alt="Man Cannot Reach God" className="mx-auto my-8" />
                <p className="text-justify mb-3">"...(Those) who do not know God and do not obey the gospel of our Lord Jesus...will be punished with everlasting destruction and shut out from the presence of the Lord..." <span className="text-sky-600">(2 Thessalonians 1:8,9)</span></p>
            </div>
        </>
    )
}

const PageFour = () => {
    return (
        <>
            <div className="flex items-center gap-x-3 mb-3">
                <h1 className="text-4xl font-serif font-bold">3</h1>
                <h2 className="font-medium text-justify">God gave Jesus Christ to save us from our Sins</h2>
            </div>
            <div>
                <h5 className="font-semibold mb-1">He Died in Our Place</h5>
                <p className="text-justify mb-3">"God demonstrates His own love toward us, in that while we were yet sinners, Christ died for us." <span className="text-sky-600">(Romans 5:8)</span></p>
                <h5 className="font-semibold mb-1">He Rose From the Dead</h5>
                <p className="text-justify mb-2">"Christ died for our sins...He was buried...He was raised on the third day according to the Scriptures...He appeared to Peter, then to the twelve. After that He appeared to more than five hundred..." <span className="text-sky-600">(1 Corinthians 15:3-6)</span></p>
            </div>
        </>
    )
}

const PageFive = () => {
    return (
        <>  
            <div>
                <h5 className="font-semibold mb-1">He is the Only Way to God</h5>
                <p className="text-justify mb-2">"Jesus said to him, 'I am the way, and the truth, and the life; no one comes to the Father, but through Me.'" <span className="text-sky-600">(John 14:6)</span></p>
                <img src="https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_sgJgjfP4s6iPUa0cGfq2dk80riTns_isnIVkQJfURgf8iDjmUjgJMzb_dP3FF_Zzd_DZtP13lM7aeJ5k_R55AeDDofnlRpqihRdLdTsCfnnc6b85gvrdU=s0-d" alt="God reach us Man through Jesus" className="mx-auto my-8" />
                <p className="text-justify mb-3 text-sm">This diagram shows that God reached us by sending Jesus Christ (His Son) to die on the cross for our sins.</p>
            </div>
        </>
    )
}

const PageSix = () => {
    return (
        <>
            <div className="flex items-center gap-x-3 mb-3">
                <h1 className="text-4xl font-serif font-bold">4</h1>
                <h2 className="font-medium text-justify">We must receive Jesus Christ as our Lord and Savior</h2>
            </div>
            <div>
                <h5 className="font-semibold mb-1">We Must Receive Christ</h5>
                <p className="text-justify mb-3">"As many as received Him, to them He gave the right to become children of God, even to those who believe in His name." <span className="text-sky-600">(John 1:12)</span></p>
                <h5 className="font-semibold mb-1">We Receive Christ Through Faith</h5>
                <p className="text-justify mb-2">"By grace you have been saved through faith; and that not of yourselves, it is the gift of God; not as a result of works that no one should boast." <span className="text-sky-600">(Ephesians 2:8,9)</span></p>
            </div>
        </>
    )
}

const PageSeven = () => {
    return (
        <>  
            <div>
                <h5 className="font-semibold mb-1">We Receive Christ by Personal Invitation</h5>
                <p className="text-justify mb-2 text-red-500">"Behold, I stand at the door and knock; if any one hears My voice and opens the door, I will come in to him." <span className="text-sky-600">(Revelation 3:20)</span></p>
                <p className="text-justify mb-3">Receiving Christ means turning away from sin, trusting Him to forgive us, and letting Him lead our lives. It's not enough to just believe or feel emotional; we must choose to accept Him by faith.</p>
            </div>
        </>
    )
}

const PageEight = () => {
    return (
        <>  
            <div>
                <h5 className="font-semibold mb-1">Two representation of lives</h5>
                <img src="https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_tRigGJz21Y8S18SYT9GXGgxx-tmwCdOsiG-5DZX7xVpOxVElfuDodPhmIcayB0eA19AcD4dKtxozJMzf6q-Gv5qPsImo6a2ZUTSVdy4lOx9Yf9qVDbYxcbbQ=s0-d" alt="God reach us Man through Jesus" className="mx-auto my-8" />
                <img src="https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_u6GpG9Ra9e1LAVHQwbL-2bz2JG-1EXYx9h66j53v8V1OJextwVvFBlPM4sDd-L3ynW8aGvWXab68irjwrI-T3Knw7CziNwt2R1_e5KekPIZ57LjVlSO4g6rw=s0-d" alt="God reach us Man through Jesus" className="mx-auto my-8" />
                <p className="text-justify mb-1 text-sm">Which circle represents your life?</p>
                <p className="text-justify mb-3 text-sm">Which circle would you like to have represent your life?</p>
            </div>
        </>
    )
}

const PageNine = () => {

    const audioRef = useRef(null);

    const handlePlay = () => {
        if (audioRef.current) {
        audioRef.current.play();
        }
    };

    return (
        <>  
            <div>
                <h5 className="font-semibold mb-1">You Can Accept Christ Today by Faith Through Prayer</h5>
                <p className="text-justify mb-5">God cares more about your heart's attitude than your words. Here's a suggested prayer:</p>
                <div className="w-full text-center">
                    <button className="border border-stone-800 px-8 py-2 rounded-lg font-semibold bg-amber-300" onClick={handlePlay}>
                        Prayer
                    </button>
                    <audio ref={audioRef}>
                        <source src={Prayer} type="audio/mp3" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
                <p className="text-justify mt-5 mb-2">Did you pray this prayer?</p>
                <p className="text-xs text-justify mb-2 text-gray-500">If it does, pray this prayer right now, and Christ will come into your life, as He promised.</p>
            </div>
        </>
    )
}

const PageTen = () => {
    return (
        <>  
            <div>
                <h5 className="font-semibold mb-1">How to Know That Christ Is in Your Life</h5>
                <p className="text-justify mb-3">
                    Did you receive Christ into your life? According to 
                    <span className=" text-sky-500"> Revelation 3:20</span>, where is Christ right now in relation to you?
                </p>
                <p className="text-justify mb-3">
                    Christ said that He would come into your life and be your friend so you can know Him personally. Would He mislead you?
                </p>
                <p className="text-justify mb-3">
                    On what authority do you know that God has answered your prayer? (The trustworthiness of God Himself and His Word.)
                </p>
            </div>
        </>
    )
}

const PageEleven = () => {
    return (
        <>  
            <div>
                <h5 className="font-semibold mb-1">Eternal Life</h5>
                <p className="text-justify mb-3">
                "The witness is this, that God has given us eternal life, and this life is in His Son. 
                He who has the Son has the life; he who does not have the Son of God does not have the life. 
                These things I have written to you who believe in the name of the Son of God, in order that you may know that you have eternal life."
                <span className="text-sky-600"> (1 John 5:11-13)</span>
                </p>
                <p className="text-justify mb-3">
                Thank God often that Christ is in your life and that He will never leave you <span className="text-sky-600">(Hebrews 13:5)</span>.
                </p>
            </div>
        </>
    )
}

const pages = [
    {
        pageNum: 1,
        content: <PageOne/>
    },
    {
        pageNum: 2,
        content: <PageTwo/>
    },
    {
        pageNum: 3,
        content: <PageThree/>
    },
    {
        pageNum: 4,
        content: <PageFour/>
    },
    {
        pageNum: 5,
        content: <PageFive/>
    },
    {
        pageNum: 6,
        content: <PageSix/>
    },
    {
        pageNum: 7,
        content: <PageSeven/>
    },
    {
        pageNum: 8,
        content: <PageEight/>
    },
    {
        pageNum: 9,
        content: <PageNine/>
    },
    {
        pageNum: 10,
        content: <PageTen/>
    },
    {
        pageNum: 11,
        content: <PageEleven/>
    },
]

const FourSLContent = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [page, setPage] = useState(pages[0])

    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);

    useEffect(() => {
        const newPage = pages.find(page => page.pageNum === currentPage);
        setPage(newPage);
    }, [currentPage])

    return (
        <>
            <div className='w-full h-full'>
                {page.content}
                {
                    currentPage === 1 
                    ? <p 
                    className="mt-3 text-sky-600 underline float-end cursor-pointer" 
                    onClick={() => nextPage()}>
                        Next &rarr;
                    </p>
                    : currentPage === pages.length 
                        ? <p 
                        className="mt-3 text-sky-600 underline float-start cursor-pointer" 
                        onClick={() => prevPage()}>
                            &larr; Back
                        </p>
                        :
                        <div className="mt-3 flex items-center justify-between">
                            <p 
                            className=" text-sky-600 underline cursor-pointer" 
                            onClick={() => prevPage()}>
                                &larr; Back
                            </p>
                            <p 
                            className=" text-sky-600 underline cursor-pointer" 
                            onClick={() => nextPage()}>
                                Next &rarr;
                            </p>
                        </div>
                }
            </div>
        </>
    )
}

export default FourSLContent;