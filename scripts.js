const myObserver = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {

      entry.target.classList.remove('show')
    }

  })
})


const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => myObserver.observe(element))





const form = document.querySelector(".formulario-orçamento")

const mascara = document.querySelector(".mascara-formulario")

const checkgourmet = document.getElementById("gourmet")
const gourmet = document.querySelector(".gourmet")

const checkcap = document.getElementById("cappuccino")
const cappuccino = document.querySelector(".cappuccino")

const checkpist = document.getElementById("pistache")
const pistache = document.querySelector(".pistache")

const checkleite = document.getElementById("doceleite")
const doceleite = document.querySelector(".doceleite")


function showform() {

  mascara.style.visibility = "visible"
  form.style.left = "50%"
  form.style.transform = "translateX(-50%)"
}

function hideform() {

  form.style.left = "-100%"
  mascara.style.visibility = "hidden"
  mascara.style.transitionDelay = "0.5s";
  gourmet.style.visibility = "hidden";
  cappuccino.style.visibility = "hidden";
  pistache.style.visibility = "hidden";
  doceleite.style.visibility = "hidden";
}

function showqtd() {

  if (checkgourmet.checked == true) {
    gourmet.style.visibility = "visible";
  } else {
    gourmet.style.visibility = "hidden";
  }

  if (checkcap.checked == true) {
    cappuccino.style.visibility = "visible";
  } else {
    cappuccino.style.visibility = "hidden";
  }

  if (checkpist.checked == true) {
    pistache.style.visibility = "visible";
  } else {
    pistache.style.visibility = "hidden";
  }

  if (checkleite.checked == true) {
    doceleite.style.visibility = "visible";
  } else {
    doceleite.style.visibility = "hidden";
  }
}




