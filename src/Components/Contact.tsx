import React from 'react'
import Floating_input from './Floting_input';

const Contact=()=>{
return <div className="px-16 mx-20  my-10 mx-20 mb-28  font-mono my-5" id="Contact">
    <h1 className="text-4xl   mb-10 font-bold text-center text-white text-white  ">
    <span className="text-primaryColor">05.&nbsp;</span>Contact</h1>
<div className='border-primaryColor m-auto  flex flex-col gap-6 p-8 rounded-3xl border w-[70%]'> 
    <div className='text-3xl text-white font-semibold '>
        Let's Connect 
    </div>
    <Floating_input/>

    </div>
</div>

}


export default Contact;