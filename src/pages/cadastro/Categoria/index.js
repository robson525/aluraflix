import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000'
  }

  const [categorias, setCategoria] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor){
    setValues({
      ...values, 
      [chave]: valor
    });
  }

  function handleChange(event){
    setValue( 
      event.target.getAttribute('name'),
      event.target.value
    );
  }

  return (
    <PageDefault >
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={(event)=>{
          event.preventDefault();
          setCategoria([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais);
      }}>

        <FormField 
          label='Nome da categoria'
          type='text'
          name='nome'
          onChange={handleChange}
        />

        <FormField 
          label='Descrição'
          type='textarea'
          name='descricao'
          onChange={handleChange}
        />

        <FormField 
          label='Cor'
          type='color'
          name='cor'
          onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>
      </form>


      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
