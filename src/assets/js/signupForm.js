import Swal from 'sweetalert2'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import { auth } from './firebase'

const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', async e => {
  e.preventDefault()

  const email = signupForm['signup-email'].value
  const password = signupForm['signup-password'].value

  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    console.log(userCredentials)

    // close the signup modal
    const signupModal = document.querySelector('#signupModal')
    const modal = bootstrap.Modal.getInstance(signupModal)
    modal.hide()

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `Conta criada com sucesso 🥳 ${userCredentials.user.email}`,
      showConfirmButton: false,
      timer: 3500
    })
  } catch (err) {
    if (err.code === 'auth/email-already-in-use') {
      Swal.fire({
        icon: 'error',
        title: 'Email já em uso!',
        showConfirmButton: false
      })
    } else if (err.code === 'auth/invalid-email') {
      Swal.fire({
        icon: 'error',
        title: 'Email invalido',
        showConfirmButton: false
      })
    } else if (err.code === 'auth/weak-password') {
      Swal.fire({
        icon: 'error',
        title: 'Senha é muito fraco',
        showConfirmButton: false
      })
    } else if (err.code) {
      Swal.fire({
        icon: 'error',
        title: 'Algo deu errado por favor tente novamente mais tarde',
        showConfirmButton: false
      })
    }
  }
})
