import React from "react";
import * as Constants from '../constants';
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

export const ImageGrid = ({ setSelectedImg }) => {
    console.log('ShowFiles executing...')
    const [imgLst]=useFirestore(Constants.FirestoreDB_CollectionName)
    
    const onClickImageHandler=(e)=>{
        //console.log(e.target.getAttribute('src'))
        setSelectedImg(e.target.getAttribute('src'))
    }
    
    return(
        <div className='img-grid'>
        { 
            imgLst && imgLst.map(item=>
            (   <motion.div className='img-wrap' key={item.id} 
                    initial={{ opacity: 0.5, scale: 1.5 }}
                    animate={{ opacity: 0.8, scale : 1 }}
                    transition= {{ duration: 1 }}
                    >
                    <img src={ item.url } alt='' onClick={onClickImageHandler}/>
                </motion.div>)
            )
        }
        </div>
    )
}