
let section = document.querySelector("section")
let article = document.querySelector("article")
let id = 0


document.body.addEventListener("keypress", (event) => {
    if(event.key == "Enter"){
        id++
        let input = document.querySelector("input")
        let htmlCode = `<div id="id${id}"> ${input.value}   <button id="id${id}">x</button></div>`
        article.innerHTML += htmlCode
       input.value = ""
    }

    document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
        let id = button.getAttribute("id")
        let divELement = button.parentElement
        divELement.style.display = "none"
    })        
})

})


