const spinnerWrapper = document.createElement('div')
const spinner = document.createElement('div')
spinnerWrapper.classList.add('spinner-wrapper')
spinner.classList.add('spinner')
window.onload = () => {
  spinnerWrapper.style.display = 'none'
}
spinnerWrapper.append(spinner)
document.body.append(spinnerWrapper)
