import React, { useState } from 'react'
function CalculadorDeSub() {
    const [num1, setnum1] = useState('')
    const [num2, setnum2] = useState('')
    const [soma, setSoma] = useState(null);

    const calcularsub = () => {
        const resultado = Number(num1) - Number(num2)
        setSoma(resultado)
    }
    return (
        <div className='Calculadora'>
            <input type='number' value={num1} onChange={(e) => setnum1(e.target.value)} placeholder='Digite o primeiro número' />
            <input type='number' value={num2} onChange={(e) => setnum2(e.target.value)} placeholder='Digite o segundo número' />

            <button onClick={calcularsub}> Calcular Subtração</button>
            {soma !== null && <p> Resultado: {soma} </p>}
        </div>
    )
}
export default CalculadorDeSub