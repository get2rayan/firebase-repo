import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react";
import { fireStorage } from "../firebase/config";

const useStorage = (file)=>{

    const[progress, setProgress]=useState(0)
    const[error, setError]=useState(null)
    const[url, setUrl]=useState(null)    
    
    useEffect(()=> {
        const storageRef = ref(fireStorage, file.name)
        const uploadTask = uploadBytesResumable(storageRef, file)
    
        uploadTask.on('state_changed', 
            (snapshot)=>{
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                setProgress(progress)                
            },
            (error)=>{
                console.log('error is : ' + error)
                setError(error)
            },
            async ()=>{
                const url=await getDownloadURL(uploadTask.snapshot.ref)
                setUrl(url)
            }        
        )
    }, [file])
    //console.log(`useStorage returning [${progress}, ${url}, ${error}]`)
    return [progress, url, error]
}

export default useStorage;