
import useFourSL from "../hooks/useFourSL";

const FourSLContent = () => {

    const {
        page,
        currentPage,
        pages,
        prevPage,
        nextPage
    } = useFourSL();

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