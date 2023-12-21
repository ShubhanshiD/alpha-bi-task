import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyASDrOP7_Wpd8G0HlODeb0FKgh6b1oeoMw",
  authDomain: "alpha-bi-project.firebaseapp.com",
  projectId: "alpha-bi-project",
  storageBucket: "alpha-bi-project.appspot.com",
  messagingSenderId: "159446290301",
  appId: "1:159446290301:web:152b036737c44114e14614"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
