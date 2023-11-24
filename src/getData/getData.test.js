const getData = require('./getData')
const axios = require('axios')
const userData = require('./data.json')
jest.mock('axios')

describe('getData', () => {
    let response;
    beforeEach(() => {
        response = {
            data: userData
        }
    })
    test('Корректное значение', async () => {
        axios.get.mockReturnValue(response);
        const data = await getData()
        expect(axios.get).toBeCalledTimes(1);
        expect(data).toEqual(['1', '2', '3'])
        expect(data).toMatchSnapshot()
    })
})