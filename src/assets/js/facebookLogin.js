import Swal from 'sweetalert2'
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth'

import { auth } from './firebase'

const facebookButton = document.querySelector('#facebookLogin')

facebookButton.addEventListener('click', async () => {
  const provider = new FacebookAuthProvider()

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
