
const setCard = () => {
    const id = document.getElementById('idInput').value
    const color = document.getElementById('colorInput').value

    console.log(id, color)
    const card = document.getElementById(id)

    card.style.color = color
}

const reset = () => {
}
