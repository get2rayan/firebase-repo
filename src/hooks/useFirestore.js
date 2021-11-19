import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { firestoreDb } from "../firebase/config";

const useFirestore = (collectionName)=>{
    // image list to store images from Firestore
    const [imgLst, setImgLst]=useState([])

    useEffect(()=>{
        console.log('UseFirestore useEffect firing...')
        const unsub=onSnapshot(
                        query(collection(firestoreDb, collectionName), orderBy('createdAt', 'desc'))
                                    ,snapshot=>{
                                        //console.log(`snapshot is : ${snapshot}`)
                                        let tempCol=[]
                                        snapshot.docs.forEach(doc=>{
                                            tempCol.push({...doc.data(), id: doc.id})
                                        })
                                        console.log(tempCol)
                                        setImgLst(tempCol)
                                    }
                                )
        return ()=> { console.log('returning unsub'); return unsub() } 
    },[collectionName])    
        console.log('returning imgLst...' + imgLst.length)
    return [imgLst]
} 

export default useFirestore;