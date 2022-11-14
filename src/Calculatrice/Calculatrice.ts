class Calculatrice {

    static addition (nombre1: number, nombre2:number): number {
        let res = 0;
        res = nombre1+nombre2;
        return +res.toFixed(9);
    }

}

export default Calculatrice