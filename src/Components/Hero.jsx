// import Lists from "./Lists";
import { CheckBoxRounded } from "@mui/icons-material";
import { ClearRounded } from "@mui/icons-material";
import { useRef } from "react";
import { useState } from "react";


const Hero = () => {

    const [text, setText] = useState("");
    

    return (

        <>
        <div className="w-full h-screen px-4 py-10 mx-auto sm:px-6 lg:px-8 lg:py-14 dark:bg-gray-900 dark:border-gray-700">
            <div className="max-w-2xl mx-auto">
                <div className="text-center">
                    <h2 className="mb-10 text-xl font-bold text-gray-800 sm:text-3xl dark:text-white">My ToDo Lists</h2>
                </div>

            {/* todo items */}
                <div>
                    <div className='flex w-full px-4 py-3 mt-3 text-lg text-white border-gray-200 rounded-md sm:p-4 dark:bg-gray-800 dark:border-gray-700 '>
                        <p className='w-3/4 text-white'>hello</p>
                        <div className='w-1/4 text-right'>                            

                            <button className='hover:text-green-500'><CheckBoxRounded /></button>
                            <button className='text-red-800 hover:text-red-400'><ClearRounded /></button>
                        </div>
                    </div>                   
                </div>
                {/* todo items */}


            {/* input */}
                <div className='mt-20'>
                    <h2 className='text-2xl text-center text-white'>Add a todo item</h2>
                    <div className="mt-3 mb-1 sm:mb-1">
                        <input ref='' type="text" className="w-full px-4 py-3 text-lg border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" placeholder="Your new item..."/>
                    </div>
                    <div className="grid mt-2">
                        <button onClick={} className="items-center justify-center gap-2 px-4 py-3 font-semibold text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">Add</button>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
};

export default Hero;