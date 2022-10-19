import { signOut } from 'firebase/auth'

import { auth } from './firebase'

const logout = document.querySelector('#logout')

logout.addEventListener('click', async () => {
  await signOut(auth)
})
