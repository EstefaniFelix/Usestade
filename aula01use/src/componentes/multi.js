import React, { useState } from 'react'
function CalculadorDeMulti() {
    const [num1, setnum1] = useState('')
    const [num2, setnum2] = useState('')
    const [multi, setmulti] = useState(null);

    const calcularmulti = () => {
        const resultado = Number(num1) * Number(num2)
        setmulti(resultado)
    }
    return (
        <div className='Calculadora'>
            <input type='number' value={num1} onChange={(e) => setnum1(e.target.value)} placeholder='Digite o primeiro número' />
            <input type='number' value={num2} onChange={(e) => setnum2(e.target.value)} placeholder='Digite o segundo número' />

            <button onClick={calcularmulti}> Calcular Multiplicação</button>
            {multi !== null && <p> Resultado: {multi} </p>}
        </div>
    )
}
export default CalculadorDeMulti