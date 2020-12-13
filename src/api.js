import useFetch from './useFetch'

export const useUserList = () => useFetch('http://localhost:3001/api/users')
export const useUserById = (id) => useFetch('http://localhost:3001/api/users/' + id)

export const login = async (userName, password, email) => {
    const ret = await fetch('http://localhost:3001/api/users/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName, password, email })
    })
    const data = await ret.json()
    return data
}

export const register = async (name, surnames, email, userName, password) => {
    const ret = await fetch('http://localhost:3001/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name, surnames, email, userName, password})
    })
    const data = await ret.json()
    return data
}

export const edit = async (token, id, newUser) => {
    const ret = await fetch('http://localhost:3001/api/users/' + id, {
        method: 'PUT',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    const data = await ret.json()
    return data
}
