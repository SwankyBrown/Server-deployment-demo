const { response } = require("express")

const btn = document.querySelector('button')
const clickHandler = () => alert('what have you done')

btn.addEventListener('click', clickHandler)
otherBtn.addEventListener('click', () => {
    axios.post('/ma-post')
    .then((response) => {
        alert(response.data);
    })
})