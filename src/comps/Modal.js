import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImg, setSelectedImg })=>{

    const onBackdropClickHandler=(e)=>{
        if(e.target.classList.contains('backdrop'))
            setSelectedImg(null)
    }
    return(
        <div className='backdrop' onClick={onBackdropClickHandler}>
            <motion.img src={ selectedImg } alt="backdrop pic"
                initial={{ scale: 0.8, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}/>
        </div>
    )
}

export default Modal;