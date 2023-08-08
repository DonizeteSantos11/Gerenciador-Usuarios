import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cadastro({usuarios,setUsuarios}){
    const [ nome, setNome] = React.useState("");
    const [ status, setStatus] = React.useState(true);
    const [ email, setEmail] = React.useState("");
  
    function salvar(e){
        e.preventDefault()

        function validaEmail(email){
            let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email)
    
        }
            if(nome == ""){
                toast.error('Por favor digite um nome!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                return false;
            }
            
            if(nome.length <3){
                toast.error('O nome deve possuir mais que 3 caracteres.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                return false;
            }
    
            if(email == ""){
                toast.error('Por favor, digite um e-mail válido.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                return false;
            }
    
            if(!validaEmail(email)){
                toast.error('Por favor, digite um e-mail válido.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                return false;
            }
    
            const Usuario = {
                nome: nome, 
                status: status,
                email: email
            }
            //O operador ... se chama spread ou "despejar"
            setUsuarios([...usuarios, Usuario])

            return true;
    }

    
    
    return(
        <div className="caixa"> 
				<h2> Cadastro </h2>

					<form id="Forms"onSubmit={(e) => salvar(e)}>
						<div class="form-floating mb-3">
							<input onChange={e => setNome(e.target.value)} class="form-control" id="txtNome" placeholder="Nome"/>
							<label for="txtNome">Nome</label>
						</div>

                        <div class="form-floating mb-3">
                            <input onChange={e => setEmail(e.target.value)} class="form-control" id="txtEmail" placeholder="name@example.com"/>
                            <label for="txtEmail">Endereço de Email</label>
                        </div>

						<div class="mb-3 form-check">
							<input checked={status} onChange={e => setStatus(e.target.checked)} type="checkbox" class="form-check-input" id="cboxStatus"/>
							<label class="form-check-label" for="cboxStatus">Ativo</label>
						</div>

						<button type="submit" class="btn btn-primary">Salvar</button>
                        <ToastContainer/>
					</form>
	        </div>

    )
}

export default Cadastro 