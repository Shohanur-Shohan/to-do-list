
import { HighlightOffOutlined } from "@mui/icons-material";
import { useState } from "react";


const Hero = () => {

    const [list, setList] = useState([])
    const [item, setItem] = useState('');
    // const [btnText, setBtnText] = useState("incomplete");
    
    const addToList = () => {
        // list.push(item);
        // setList([...list]);
        setList([...list,  {text: item, completed: false }]);
        setItem('');
        
    }


    // const itemRemove = (index) => {
    //     const updatedTodos = list.filter((_, i) => i !== index);
    //     setList(updatedTodos);
    //   };
    
    const itemRemove = (index) => {
        const updatedTodos = [...list];
        updatedTodos.splice(index, 1);
        setList(updatedTodos);
      };
      
      
    
    const completeBtn = (index) => {
    const updatedTodos = [...list];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setList(updatedTodos);
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
                            <div key={index}>
                                <div className='flex justify-between w-full px-4 py-3 mt-3 text-lg text-white bg-gray-800 border-gray-700 rounded-md sm:p-4'>
                                    <div className='flex my-auto'>
                                    <p className='mr-4 '>{index}</p>
                                    <p className='text-white '>{element.text}</p>
                                    </div>
                                    <div className='flex my-auto text-right'>                            
                                        <button onClick={()=>{completeBtn(index)}} className='pt-1 pb-1 pl-5 pr-5 border border-green-600 hover:text-black rounded-3xl hover:bg-green-600 '>{element.completed ? 'Completed' : 'incomplete'}</button>
                                        <button onClick={()=>{itemRemove(index)}} className='w-10 ml-2 text-red-800 hover:text-red-400'><HighlightOffOutlined /></button>
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
