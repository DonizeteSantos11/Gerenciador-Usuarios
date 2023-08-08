import React from 'react';

import supabase from './supabase';

import "./App.css";
import Listagem from "./Componentes/Listagem";
import Cadastro from './Componentes/Cadastro';



function App() {


	const [ usuarios, alteraUsuarios ] = React.useState( [] );

	function buscatodos(){
		supabase.from("usuarios").select()
		.then( Response => {
			console.log("Conexão bem sucedida!")
			console.log(Response)
			alteraUsuarios(Response.data)

		})
		.catch(Response => {
			console.log("Deu erro na conexão")
			console.log(Response)
		})
	}




	React.useEffect( ()=>{
		buscatodos();
	}, [] )


  return (
    <div className="container">

		<div className="d-flex justify-content-around">

			<Listagem usuarios={usuarios}/>
			<Cadastro usuarios={usuarios} setUsuarios={alteraUsuarios}/>




		</div>
		
    </div>
  );
}

export default App;