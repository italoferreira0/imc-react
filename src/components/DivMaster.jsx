import { useState} from 'react'
import './../style/DivMaster.css'

export default function DivMaster() {
    
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    const [imc, setImc] = useState('')

    //onChange={event => {funcao(event.target.value);}}

    function calcularImc(){
        const pesoFloat = parseFloat(peso)
        const alturaFloat = parseFloat(altura)
        const imcValor = pesoFloat/(alturaFloat*alturaFloat)
        
        setImc(imcValor.toFixed(2))

        document.getElementById('normal').style.color = '#FFFFFF';
        document.getElementById('sobrepeso').style.color = '#FFFFFF';
        document.getElementById('obesidade').style.color = '#FFFFFF';
        document.getElementById('grave').style.color = '#FFFFFF';
        document.getElementById('magreza').style.color = '#FFFFFF';

        if (imcValor < 18.5 && imcValor != 0) {
            document.getElementById('magreza').style.color = '#000000';
        } else if (imcValor >= 18.5 && imcValor <= 24.9) {
            document.getElementById('normal').style.color = '#000000';
        } else if (imcValor >= 25.0 && imcValor <= 29.9) {
            document.getElementById('sobrepeso').style.color = '#000000';
        } else if (imcValor >= 30.0 && imcValor <= 39.9) {
            document.getElementById('obesidade').style.color = '#000000';
        } else if (imcValor >= 40) {
            document.getElementById('grave').style.color = '#000000';
        }
    }
    
    function limpar() {
        setPeso('')
        setAltura('')
        setImc('')
        document.getElementById('normal').style.color = '#FFFFFF'
        document.getElementById('sobrepeso').style.color = '#FFFFFF'
        document.getElementById('obesidade').style.color = '#FFFFFF'
        document.getElementById('grave').style.color = '#FFFFFF'
        document.getElementById('magreza').style.color = '#FFFFFF'
    }

    return(
        
        <div className='DivMaster'>
            <h2 className='title'>Calcular IMC</h2>
            <div class="row ">  
                
                <div class="col w-25 d-inline-block DivPesoAltura ">
                    <h3>Peso: </h3>
                    <input type="number" className='Input ' placeholder='Quilos' value={peso} 
                    onChange={event => {setPeso(event.target.value);}} step="0.01" min="0" max="10"/>
                            
                    <h3>Altura: </h3>
                    <input type="number" className='Input' placeholder='Metros' value={altura} 
                    onChange={event => {setAltura(event.target.value);}} step="0.01" min="0" max="10"/>

                    <br /><br />
                    <div>
                    <h3>SEU IMC:</h3>
                    <input type='number' className='Input' placeholder='Resultado' id='resultado' value={imc} readOnly/>
                    <br />
                    <button type="button form-control" className='Button btn ' id='calcular' onClick={calcularImc}><strong>Calular</strong></button>            
                        <button type="button form-control" className='Button btn ' id='limpar' onClick={limpar}><strong>Limpar</strong></button>
                    </div>
                    <br />
                        
                </div>       
            </div>
            <h3>Indices de </h3>	
            <span><h3>IMC, Classificação:</h3></span>
            <div class="w-20 d-inline-block DivTabela ">
                        <table className=''>
                        		
                            <tr className='' id='magreza'  >
                                <td><strong>Menor que 18,5: </strong></td>
                                <td><strong>Magreza</strong></td>
                            </tr>
                            <tr id='normal' >
                                <td><strong>Entre 18,5 e 24,9: </strong></td>
                                <td><strong>Normal</strong></td>
                            </tr>
                            <tr id='sobrepeso' >
                                <td><strong>Entre 25,0 e 29,9: </strong></td>
                                <td><strong>Sobrepeso</strong></td>
                            </tr>
                            <tr id='obesidade' >
                                <td><strong>Entre 30,0 e 39,9: </strong></td>
                                <td><strong>Obesidade</strong></td>
                            </tr>
                            <tr id='grave' >
                                <td><strong>Maior que 40,0: </strong></td>
                                <td><strong>Obesidade Grave</strong></td>
                            </tr>
                    
                    </table>

                </div>
        </div>
        







    )
}