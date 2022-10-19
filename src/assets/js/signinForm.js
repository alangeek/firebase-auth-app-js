import Swal from 'sweetalert2'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { auth } from './firebase'

const signInForm = document.querySelector('#login-form')

signInForm.addEventListener('submit', async e => {
  e.preventDefault()

  const email = signInForm['login-email'].value
  const password = signInForm['login-password'].value

  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password)
    console.log(credentials)

    // close the signup modal
    const signupModal = document.querySelector('#signinModal')
    const modal = bootstrap.Modal.getInstance(signupModal)
    modal.hide()

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `Seja Bem vindo 👋 ${credentials.user.email}`,
      showConfirmButton: false,
      timer: 3500
    })
  } catch (err) {
    if (err.code === 'auth/wrong-password') {
      Swal.fire({
        icon: 'error',
        title: 'Sua conta ou senha está incorreta.',
        html:
          'Se você não se lembra de sua senha,' +
          ' <a href="#"> redefina-a agora.</a>',
        showConfirmButton: false
      })
    } else if (err.code === 'auth/user-not-found') {
      Swal.fire({
        icon: 'error',
        title: 'Esta conta da Brand não existe.',
        html:
          'Insira uma conta diferente ou' +
          ' <a href="#"> obtenha uma nova.</a>',
        showConfirmButton: false
      })
    } else {
      console.log(err.message)
    }
  }
})
