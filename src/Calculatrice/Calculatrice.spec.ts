import Calculatrice from './Calculatrice';

describe ('Calculatrice',() => {
    describe('L\'addition de 2 et 3 doit retourner 5',()=> {
        it("doit pouvoir faire la somme de 2 et 3 et retourner 5", () => {
            expect(Calculatrice.addition(2,3)).toBe(5);
        });
        it("doit pouvoir faire la somme de 2 et -3 et retourner -1", () => {
            expect(Calculatrice.addition(2,-3)).toBe(-1);
        });
        it("doit pouvoir faire la somme de 0.1 et 0.2 et retourner 0.3", () => {
            expect(Calculatrice.addition(0.1,0.2)).toBe(0.3);
        });
    })
})