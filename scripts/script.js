function toggleMode() {
  const html = document.documentElement
  //if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  //}
  //toggle é uma função que faz o mesmo que o if acima
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a img
  if (html.classList.contains("light")) {
    // se tiver o light mode, adicionar a img light
    img.setAttribute("src", "/assets/assets/Juliano-light.jpg")
  } else {
    // se tiver sem o light mode, adicionar a img normal
    img.setAttribute("src", "/assets/assets/Juliano.jpg")
  }
}
