import Swal from 'sweetalert2'
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth'

import { auth } from './firebase'

const githubButton = document.querySelector('#githubLogin')

githubButton.addEventListener('click', async () => {
  const provider = new GithubAuthProvider()

  try {
    const credentials = await signInWithPopup(auth, provider)
    console.log(credentials)

    const modal = bootstrap.Modal.getInstance(
      document.querySelector('#signinModal')
    )

    modal.hide()

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `Seja bem-vindo 🥳 ${credentials.user.displayName}`,
      showConfirmButton: false,
      timer: 3500
    })
  } catch (err) {
    console.log(err)
  }
})
