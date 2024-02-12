import React, { useState } from 'react';
import './styles.css';


const TelaPeito = ({onPressCallback}) => {
  return (
    <div>
      <button className='btn-voltar' title='VOLTAR' onClick={() => onPressCallback('')}>
        <img  className="img-voltar" src="https://cdn-icons-png.flaticon.com/128/507/507257.png" alt="voltar" /> 
        VOLTAR
      </button>
      <h1 className='titulo'>PEITO</h1>

      <div className='Exercicio-area'>
        <div className='Exercicio'>
          
          AQUI VAI FICAR O CONTEUDO

        </div>
      </div>
    </div>
  );
};

export default TelaPeito;
