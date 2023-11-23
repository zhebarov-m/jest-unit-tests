const validateValue = require('./validateValue')



describe('validateValue', () => {
    test('Корректное значение', () => {
        expect(validateValue(50)).toBe(true)
    })
    test('Меньше значение', () => {
        expect(validateValue(-46)).toBe(false)
    })
    test('Больше значение', () => {
        expect(validateValue(122)).toBe(false)
    })
})