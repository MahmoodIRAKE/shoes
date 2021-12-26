import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set,remove } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyCRO9TZZLU1W9Ot9GaqMbQh1Z2oAB7nl6Y",
    authDomain: "weekend-81e2a.firebaseapp.com",
    projectId: "weekend-81e2a",
    storageBucket: "weekend-81e2a.appspot.com",
    messagingSenderId: "577802374313",
    appId: "1:577802374313:web:43a79951fab37e7cac6db8"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function putData(data) {
    if(data.id===0){
    data.id = Math.floor(Math.random() * 500044)
    }
    set(ref(db, 'products/' + data.id), data);
}
export function removeData(id) {
    if(id!==0){
        remove(ref(db, 'products/' + id));
    }
    
}

export async function getPayload(id,setData) {
    get(ref(db,'products/'+id)).then((snapshot) => {
        if (snapshot.exists()) {
            setData(snapshot.val())
            return 1
        } else {
            console.log("No data available");
            return -1
        }
    }).catch((error) => {
        console.error(error);
    });
}


