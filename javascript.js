window.document.write(window.document.URL)
window.document.write(window.navigator.appName)

window.document.write("olá Mundo")

var p1=window.document.getElementsByTagName ("p")[0]
window.document.write(p1.innerText)
p1.style.color='pink';

var corpo=window.document.body 
corpo.style.background='black'
corpo.style.color='white'

var d= window.document.getElementById("msg")
d.style.background='green'
d.innerText='estou aguardando...'