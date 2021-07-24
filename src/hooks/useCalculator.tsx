import { useRef, useState } from "react";

enum Operadores {
    suma, resta, multiplicar, dividir
}

export const useCalculator = () => {
    

    const [numberBox, setNumberBox] = useState('0');
    const [lastNumber, setLastNumber] = useState('0');

    const lastOperation = useRef<Operadores>();

    const clearBox = () => {
        setNumberBox('0');
    }

    const buildNumber = (n: string) => {

        // No aceptar doble punto
        if (numberBox.includes('.') && n==='.') {
            return;
        }

        if (numberBox.startsWith('0') || numberBox.startsWith('-0')) {            
            if (n === '.') {
                setNumberBox( numberBox + n );
            }else if(n === '0' && numberBox.includes('.') ) {
                setNumberBox( numberBox + n );
            }else if( numberBox !== '0' && !numberBox.includes('.') ){
                // Diferent of zero no decimal
                setNumberBox(n);
            } else if( numberBox === '0' && !numberBox.includes('.') ){
                setNumberBox(n);
            } else {
                setNumberBox(numberBox + n)
            }
        } else {
            setNumberBox(numberBox + n)
        }

    }

    const positiveNegative = () => {
        if (numberBox.includes('-')) {
            setNumberBox( numberBox.replace('-', '') );
        } else {
            setNumberBox( '-' + numberBox );
        }
    }


    const handleDelete = () => {
        if (numberBox.length === 1 ) {
            setNumberBox('0');
        } else if( numberBox.length === 2 && numberBox.includes('-') ) {
            setNumberBox('0');
        } else {
            setNumberBox( numberBox.substr(0, numberBox.length - 1) );
        }
    }



    const changeNumberToLast = () => {
        if (numberBox.endsWith('.')) {
            setLastNumber(numberBox.slice(0, -1));
            setNumberBox('0');
        } else {
            setLastNumber(numberBox);
            setNumberBox('0');
        }
    }



    // Operation
    const divide = () => {
        lastOperation.current = Operadores.dividir;
        changeNumberToLast();
        
    }
    const multiplicar = () => {
        lastOperation.current = Operadores.multiplicar;
        changeNumberToLast();

    }
    const restar = () => {
        lastOperation.current = Operadores.resta;
        changeNumberToLast();

    }
    const sumar = () => {
        lastOperation.current = Operadores.suma;
        changeNumberToLast();
    }

    const calcular = () => {
        
        const n1 = Number(numberBox);
        const n2 = Number(lastNumber);

        if (lastNumber === '0') {
            if (numberBox === '0') {
                setLastNumber(numberBox);
                setNumberBox('0');
            }
        }

        switch (lastOperation.current) {
            case Operadores.suma:
                setNumberBox( `${ n1 + n2}`);
                break;

            case Operadores.resta:
                setNumberBox(`${n2 - n1}`);
                break;
  
            case Operadores.multiplicar:
                setNumberBox(`${n1 * n2}`);
                break;

            case Operadores.dividir:
                setNumberBox(`${n2 / n1}`);
                break;
        
        }

        setLastNumber('0');
    }


    return {
        numberBox,
        lastNumber,
        clearBox,
        positiveNegative,
        handleDelete,
        buildNumber,
        divide,
        multiplicar, restar, sumar, calcular
    }


}
