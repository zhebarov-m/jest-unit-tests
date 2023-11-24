const axios = require('axios')
const mapArrToStr = require('../mapArrToStr/mapArrToStr')
const API_URL = 'https://jsonplaceholder.typicode.com/users'
const getData = async () => {
    try {
        const response = await axios.get(API_URL)
        const getUserId = response.data.map(user => user.id)
        return mapArrToStr(getUserId)
    } catch (error) {
        console.error('Ошибка получения данных', error)
    }
}

module.exports = getData;