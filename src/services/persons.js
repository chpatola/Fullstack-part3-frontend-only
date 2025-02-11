import axios from 'axios'
const baseUrl =  '/api/persons'   //'https://ch-phonebook.herokuapp.com/api/persons'

const getAll = () => {
  const request= axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request =axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}


const erase = (id) =>{
    //const request = axios.delete('http://localhost:3001/api/persons/4')
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default { 
  getAll, 
  create,
  erase 
}
