import { onAuthStateChanged } from 'firebase/auth'
import { getDocs, collection } from 'firebase/firestore'

import { auth, db } from './firebase'
import { loginCheck } from './loginCheck'
import { setupPosts } from './postList'
import './firebase'
import './loading'
import './signupForm'
import './signinForm'
import './googleLogin'
import './facebookLogin'
import './githubLogin'
import './logout'

onAuthStateChanged(auth, async user => {
  if (user) {
    const querySnapshot = await getDocs(collection(db, 'posts'))
    setupPosts(querySnapshot.docs)
  } else {
    setupPosts([])
  }
  loginCheck(user)
})
