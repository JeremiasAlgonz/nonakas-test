import './styles.css';

function Credentials() {
    return (

        <div>
            <div className="credentials-form">
                <h3>Acesso administrador:</h3>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Email Cadastrado</label>
                        <input type="email" className="form-control" id="" aria-describedby="emailHelp" />
                        <div id="" className="form-text">Todos as informações estão seguras e não serão compartilhadas.</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Senha</label>
                        <input type="password" className="form-control" id="" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="" />
                        <label className="form-check-label">Captcha</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Acessar</button>
                </form>
            </div>
        </div>
    );
}

export default Credentials;