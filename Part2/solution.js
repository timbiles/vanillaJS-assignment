const id = document.getElementById('idInput')
const color = document.getElementById('colorInput')

const setCard = () => {
    const card = document.getElementById(id.value)
    console.log(card)

    card.style.color = color.value;
}

const reset = () => {
    const tag = document.getElementsByTagName('section')
    for(let i=0; i<tag.length; i++) {
        tag[i].style.color = ''
    }
}
