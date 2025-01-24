const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })
    let formatted = formatter.format(valor);

    // Reemplazar los dos últimos ceros y el punto decimal si están al final
    // Ejemplo: "\$1,000.00" -> "\$1,000"
    // Ejemplo: "\$1,500.00" -> "\$1,500"
    // Ejemplo: "\$2,345.67" -> "\$2,345.67" (no se modifica si no termina en .00)
    if (formatted.endsWith('.00')) {
        formatted = formatted.slice(0, -3);
    }

    return formatted;
}

const calcularTotalPagar = (cantidad, plazo) => {
    let total;

    console.log(cantidad, plazo)

    if (cantidad < 5000) {
        total = cantidad * 1.5
    } else if (cantidad >= 5000 && cantidad < 10000) {
        total = cantidad * 1.4
    } else if (cantidad >= 10000 && cantidad < 15000) {
        total = cantidad * 1.3
    } else {
        total = cantidad * 1.2
    }

    if (plazo === 6) {
        total *= 1.1
    } else if (plazo === 12) {
        total *= 1.2
    } else {
        total *= 1.3
    }

    return total
}


const calcularPagosMensuales = (total, plazo) => {
    let pagoMensual = total / plazo
    return pagoMensual
}

export { formatearDinero, calcularTotalPagar, calcularPagosMensuales }