function Listagem( props ){
    return(
        <div className="caixa">
				<h2> Listagem </h2>
				{
					props.usuarios.map( item => 
						    <div style={{border: "1px solid #CCC"}}> 
							<p> Nome: {item.nome}</p>
							<p> Status: {item.status == true ? "Ativo" : "Banido"}</p>
							<p> Email: {item.email}</p>
							<button className="btn btn-danger bnt-sm">Remover</button>

						</div>
					 )
				}
		</div>
    )
}

export default Listagem;