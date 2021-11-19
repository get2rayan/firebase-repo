import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = ()=>{
    const[imgfile, setFile] = useState(null)
    const[error, setError] = useState('')
    
    const validImageFiles = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif']
        
    const onChangeHandler=(e)=>{
        let inputFile = e.target.files[0];
        // console.log(inputFile)
        if(inputFile && validImageFiles.includes(inputFile.type)){
            setFile(inputFile);
            setError('')
        }   
        else
        {
            setFile(null)
            setError('Please select valid image file')
        }
    }

    return(
        <form>
            <label>
                <input type="file" onChange={onChangeHandler}/>
                <span>+</span>
            </label>
            <div className="output">
            { error && <div className="error">{error}</div>}
            { imgfile && <ProgressBar file={imgfile} setFile={setFile} /> }
            </div>
        </form>
    )
}
export default UploadForm;