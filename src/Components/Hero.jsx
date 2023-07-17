
import { CheckBoxRounded } from "@mui/icons-material";
import { ClearRounded } from "@mui/icons-material";
import { useState } from "react";


const Hero = () => {

    const [list, setList] = useState([])
    const [item, setItem] = useState("");
    
    const addToList = () => {
        list.push(item);
        setList([...list]);
    }

    const itemRemove = (index) =>{
        list.splice(index, 1);
        setList([...list]);
        
    }
    // const itemCheck = () => {
    //     document.getElementById("complete").innerText = "Completed";
    // }
    const itemCheck = (index) => {
        alert(index + " completed")
      };


    return (

        <>
        <div className="w-full h-screen px-4 py-10 mx-auto bg-gray-900 border-gray-700 sm:px-6 lg:px-8 lg:py-14">
            <div className="max-w-2xl mx-auto">
                <div className="text-center">
                    <h2 className="mb-10 text-xl font-bold text-white sm:text-3xl">My ToDo Lists</h2>
                </div>

            {/* todo item */}
            
            {
                list.length>0?(
                    list.map((element, index) => {
                        return(
                            <div>
                                <div className='flex w-full px-4 py-3 mt-3 text-lg text-white bg-gray-800 border-gray-700 rounded-md sm:p-4 '>
                                    <p className='mr-4'>{index}</p>
                                    <p className='w-3/4 text-white'>{element}</p>
                                    <div className='w-1/4 text-right'>                            
                                        <button id="complete"></button>
                                        <button onClick={()=>{itemCheck(index)}} className='hover:text-green-500'><CheckBoxRounded /></button>
                                        <button onClick={()=>{itemRemove(index)}} className='text-red-800 hover:text-red-400'><ClearRounded /></button>
                                    </div>
                                </div>                   
                            </div>
                        );
                        
                    })
                ):(
                    <div className='flex w-full px-4 py-3 mt-3 text-lg text-white bg-gray-800 border-gray-700 rounded-md sm:p-4 '>
                        <p className='w-full text-white'>Empty</p>
                        
                    </div>
                )
            }

            {/* todo item */}


            {/* input */}
                <div className='mt-20'>
                    <h2 className='text-2xl text-center text-white'>Add a todo item</h2>
                    <div className="mt-3 mb-1 sm:mb-1">
                        <input type="text" onChange={(e)=>setItem(e.target.value)} className="w-full px-4 py-3 text-lg border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white" placeholder="Your new item..."/>
                    </div>
                    <div className="grid mt-2">
                        <button onClick={addToList} className="items-center justify-center gap-2 px-4 py-3 font-semibold text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">Add</button>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
};

export default Hero;

// when i click itemCheck(index) . i want to show a text in that clicked item  inside of complete id . 