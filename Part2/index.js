console.log('hit')
const container = document.getElementById('container')


const getValue = () => {
const input = document.getElementById('input').value
container.style.background = input
}

const reset = () => {
    container.style.background = 'inherit'
}