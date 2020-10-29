let btn = document.querySelector('#press')

btn.addEventListener('click', () => {
    let Div = document.querySelector('.cont')
    let text = document.createElement('h3')
    text.textContent = "Novo valor de texto"

    //pegar minha div e atrelar o h3 a ela
    Div.appendChild(text)
  

  
})