import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBf_7k5xSCJK8CKG5Tm_Or1IPgYEBr59hM",
  authDomain: "heartshopper-d9258.firebaseapp.com",
  projectId: "heartshopper-d9258",
  storageBucket: "heartshopper-d9258.firebasestorage.app",
  messagingSenderId: "299963797598",
  appId: "1:299963797598:web:bcbe16283990357e3524cf"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)