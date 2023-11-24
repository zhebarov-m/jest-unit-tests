const mapArrToStr = require('./mapArrToStr')

describe('mapArrToStr', () => {
    test('Корректное значение', () => {
        expect(mapArrToStr([1, 4, 6])).toEqual(['1', '4', '6'])
    })
    test('Мешанина', () => {
        expect(mapArrToStr([1, 4, false, 6])).toEqual(['1', '4', '6'])
    })
    test('Пустое значение', () => {
        expect(mapArrToStr([])).toEqual([])
    })
})