import React from 'react';
//importando stilo do arquivo js
import { Title } from './style'
import { TitleSmall } from './style'

//criando componente title
function App() {
  return (
    <div>
 
    { /* inclui estilo dentro do proprio componente  */ }

      <Title fontSize={20}>
      Hello World
      <span>texto menor </span>
      </Title>

        <TitleSmall> Menor</TitleSmall>

    </div>
  );
}


export default App;
