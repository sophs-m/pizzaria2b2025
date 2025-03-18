import { useState } from "react"

function App(){

  const [nome, setNome] = useState('Ronaldo')

  return (
    <div>

      <h3>Pizzaria 2B</h3>


      <input className="nome"
      placeholder="Digite seu nome..."
      onChange={(e)=>{setNome(e.target.value)}}

      name="nome"

      type="text" />
      <button className="botão" onClick={()=>alert(nome)}>
      Clique Aqui 

      </button>

    </div>
  )
}

export default App