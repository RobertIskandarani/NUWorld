import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: 'AIzaSyA2vHYilfE4dszIJUpNzkb5iMT5352LLLE',
    authDomain: 'nu-world-5bc83.firebaseapp.com',
    projectId: 'nu-world-5bc83',
    storageBucket: 'nu-world-5bc83.appspot.com',
    messagingSenderId: '536194188784',
    appId: '1:536194188784:web:f821ff5a5a0e5999318935',
    measurementId: 'G-4LNEXJH3LG',
};

const app = initializeApp(firebaseConfig)

export const db = getStorage(app)

