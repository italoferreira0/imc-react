import { useState} from 'react'
import './../style/DivMaster.css'

export default function DivMaster() {
    
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    const [imc, setImc] = useState('')
    const [resultadoTexto, setResultadoTexto] = useState('')

    //onChange={event => {funcao(event.target.value);}}

    function calcularImc(){
        const pesoFloat = parseFloat(peso)
        const alturaFloat = parseFloat(altura)
        const imcValor = pesoFloat/(alturaFloat*alturaFloat)
        
        setImc(imcValor.toFixed(2))

        if (imcValor < 18.5 && imcValor != 0) {
            setResultadoTexto('Magreza');
        } else if (imcValor >= 18.5 && imcValor <= 24.9) {
            setResultadoTexto('Normal');
        } else if (imcValor >= 25.0 && imcValor <= 29.9) {
            setResultadoTexto('Sobrepeso');
        } else if (imcValor >= 30.0 && imcValor <= 39.9) {
            setResultadoTexto('Obesidade');
        } else if (imcValor >= 40) {
            setResultadoTexto('Obesidade Grave');
        }

    }
    
    function limpar() {
        setResultadoTexto('')
        setPeso('')
        setAltura('')
        setImc('')
        
    }

    return(
        
    <div className='DivMaster'>
        <div className="row">
            <div className="col-md-6">
                <h2 className='title'>Calcular IMC</h2>
                <div className="col w-100 DivPesoAltura">
                    <h3 className='title'>Peso:</h3>
                    <input type="number" className='Input' placeholder='Quilos' value={peso} 
                        onChange={event => {setPeso(event.target.value);}} step="0.01" min="0" max="10"/>
                    <h3 className='title'>Altura:</h3>
                    <input type="number" className='Input' placeholder='Metros' value={altura} 
                        onChange={event => {setAltura(event.target.value);}} step="0.01" min="0" max="10"/>
                    <br /><br />
                    <div>
                        <h3 className='title'>SEU IMC:</h3>
                        <input type='number' className='Input' placeholder='Resultado' id='resultado' value={imc} readOnly/>
                        <br />
                        <button type="button" className='Button btn' id='calcular' onClick={calcularImc}><strong>Calcular</strong></button>
                        <button type="button" className='Button btn' id='limpar' onClick={limpar}><strong>Limpar</strong></button>
                    </div>
                    <br />
                </div>
            </div>
            <div className="col-md-6">
                <div className="col w-100 DivTabela">
                    <h3 className='title'>Índices de IMC, Classificação:</h3><br/><br />
                    <table>
                        <tr id='magreza'>
                            <td><strong>Menor que 18,5:</strong></td>
                            <td><strong>Magreza</strong></td>
                        </tr>
                        <tr id='normal'>
                            <td><strong>Entre 18,5 e 24,9:</strong></td>
                            <td><strong>Normal</strong></td>
                        </tr>
                        <tr id='sobrepeso'>
                            <td><strong>Entre 25,0 e 29,9:</strong></td>
                            <td><strong>Sobrepeso</strong></td>
                        </tr>
                        <tr id='obesidade'>
                            <td><strong>Entre 30,0 e 39,9:</strong></td>
                            <td><strong>Obesidade</strong></td>
                        </tr>
                        <tr id='grave'>
                            <td><strong>Maior que 40,0:</strong></td>
                            <td><strong>Obesidade Grave</strong></td>
                        </tr>
                    </table>
                    
                </div>
                <input type='text' className='resultadoTexto' placeholder='' id='text' readOnly value={resultadoTexto}/>
            </div>
            
        </div>
</div>
        
    )
}