import calculate from './calculate.js'
describe('Calculate', () => {
    let operationExp;
    it('calcul the operation correctly', () => {
        operationExp = '2+3'
        expect(calculate(operationExp)).toBe(5);

        operationExp = '2-3'
        expect(calculate(operationExp)).toBe(-1);

        operationExp = '2*3'
        expect(calculate(operationExp)).toBe(6);

        operationExp = '2/4'
        expect(calculate(operationExp)).toBe(0.5);
    })


    it('should throw an error when exec an operation that excludes "-" ', () => {
        operationExp = '*2-3'
        expect(calculate(operationExp)).toThrow();

        operationExp = '*2'
        expect(calculate(operationExp)).toThrow();

        operationExp = '+2-3'
        expect(calculate(operationExp)).toThrow();

        operationExp = '/2-3'
        expect(calculate(operationExp)).toThrow();

        operationExp = '-2-3'
        expect(calculate(operationExp)).toBe(-5);
    })
})