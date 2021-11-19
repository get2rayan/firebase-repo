import React, {useEffect} from "react";
import useStorage from "../hooks/useStorage";
import * as Constants from '../constants';
import { collection, addDoc } from "@firebase/firestore";
import { firestoreDb, timeStamp } from "../firebase/config";

const ProgressBar = ({ file, setFile }) =>{
    const [progress, url]=useStorage(file)

    // Fn to make url entry in firestore
    const addFileToFirestore=async (url)=>{
        var entry = { url, createdAt: timeStamp.now() }
        await addDoc(collection(firestoreDb, Constants.FirestoreDB_CollectionName), entry)
    }

    useEffect(()=>{
        if(!!url){
            //make url entry in Firestore
            addFileToFirestore(url)
            setFile(null)
        }
    }, [url, setFile])

    return(
        <div>
            { !url && <div>
                <div>uploading... { Math.round(progress) + '%'}</div>
                <div className="progress-bar" style={{ width: progress + '%'}}></div>
            </div> }
            { url && <div>{ url } uploaded...</div> }
        </div>
    )
}

export default ProgressBar;