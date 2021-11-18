const url = "http://localhost:5500/api"
const newUser = {
    name: "spider",
    avatar: "http://lorempixel.com/400/200/",
    city: "Paragominas"
}

const userUpdated = {
    name: "man",
    avatar: "http://lorempixel.com/400/200/",
    city: "Belem"
}
function getUser(){
    axios.get(url)
    .then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}

getUser()

function addNewUser() {
    axios.post(url, newUser)
    .then(response => {
        console.log(response.data)
    })
    .catch(error => console.log(erro))
}

addNewUser()

function updateUser() {
    axios.put(`${url}/2`, userUpdated)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}

updateUser()

function deleteUser() {
    axios.delete(`${url}/3`)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}

deleteUser()

function getOneUser() {
    axios.get(`${url}/1`)
    .then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}

getOneUser()