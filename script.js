function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector("#profile img")
  
  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar2-light.png');
    img.setAttribute(
      "alt",
      "Foto de Dimas Alves Pereira sorrindo, de óculos escuro, de camisa preta, barba e fundo branco."
    )
  }else{
    img.setAttribute('src', './assets/avatar2.png')
    img.setAttribute(
      "alt",
      "Foto de Dimas Alves Pereira sorrindo, de camisa preta, barba e fundo branco."
    )
  }
  
}