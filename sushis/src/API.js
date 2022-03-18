let baseUrl = 'http://127.0.0.1:3009/'

export const getToken = () => {
    return localStorage.getItem('')
}

export const login = async ({ email, password }) => {

    let response = await fetch(`${baseUrl}auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })
    })

    let json = await response.json()

    return json

}


fetch(`${baseUrl}users/me`, {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token')
    }
})


export const getUser = async ({ }) => {

    let response = await fetch(`${baseUrl}users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },

    })
    let json = await response.json()

    return json

}

export const getProduct = async ({ }) => {

    let response = await fetch(`${baseUrl}productall`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },

    })
    let json = await response.json()

    return json

}
export const createProduct = async ({ name, prix }) => {

    let response = await fetch(`${baseUrl}product`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify({
            name: name,
            prix: prix,


        })
    })

    let json = await response.json()

    return json

}
export const createCommand = async ({ status, date, products }) => {

    let response = await fetch(`${baseUrl}command`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify({
            status: status,
            date: date,
            products: products,


        })
    })

    let json = await response.json()

    return json

}
export const getIngredient = async ({ }) => {

    let response = await fetch(`${baseUrl}ingrediantall`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },

    })
    let json = await response.json()

    return json

}
export const createIngredient = async ({ name, stock }) => {

    let response = await fetch(`${baseUrl}ingredient`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify({
            name: name,
            stock: stock,

        })
    })

    let json = await response.json()

    return json

}
export const modifierIngredient = async ({ id }) => {

    let response = await fetch(`${baseUrl}ingredient/mod/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },

    })

    let json = await response.json()

    return json

}
export const modifierProduct = async (id) => {

    let response = await fetch(`${baseUrl}product/mod/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },

    })

    let json = await response.json()

    return json

}
export const deleteProduct = async (id) => {


    let response = await fetch(`${baseUrl}product/delete/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },

    })

    let json = await response.json()

    return json

}
export const deleteIngredient = async (id) => {

    let response = await fetch(`${baseUrl}ingredient/delete/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },

    })

    let json = await response.json()

    return json

}

export const getIngredientProduct = async ({ }) => {

    let response = await fetch(`${baseUrl}Productingred`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },

    })
    let json = await response.json()

    return json

}
export const getProductIngr = async ({ }) => {

    let response = await fetch(`${baseUrl}ingredientProduct`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },

    })
    let json = await response.json()

    return json

}
export const getCommand = async ({ }) => {

    let response = await fetch(`${baseUrl}commandall`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },

    })
    let json = await response.json()

    return json

}
