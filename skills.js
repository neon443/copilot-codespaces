function calculateNumbers(var1, var2) { {
















}    };        quotient: quotient        product: product,        difference: difference,        sum: sum,    return {    const quotient = var2 !== 0 ? var1 / var2 : null;    const product = var1 * var2;    const difference = var1 - var2;    const sum = var1 + var2;    }        throw new Error('Both arguments must be numbers');    if (typeof var1 !== 'number' || typeof var2 !== 'number') {    if (typeof var1 !== 'number' || typeof var2 !== 'number') {
        throw new Error('Both arguments must be numbers');
    }

    const sum = var1 + var2;
    const difference = var1 - var2;
    const product = var1 * var2;
    const quotient = var2 !== 0 ? var1 / var2 : null;

    return {
        sum: sum,
        difference: difference,
        product: product,
        quotient: quotient
    };
}