const postList = document.querySelector('.posts')

export const setupPosts = data => {
  if (data.length) {
    let html = ''

    data.forEach(doc => {
      const post = doc.data()
      const li = `
        <li class='list-group-item list-group-item-action list-group-item-dark'>
          <h1>${post.title}</h1>
          <p>${post.content}</p>
        </li>
      `
      html += li
    })

    postList.innerHTML = html
  } else {
    postList.innerHTML =
      '<h1 class="center-align">Faça login para ver as postagens</h1>'
  }
}
