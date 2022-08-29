import './styles.css';

function Credentials() {
    return (
        <body>
            <div className="container" >
                <a className="links" id="paracadastro"></a>
                <a className="links" id="paralogin"></a>

                <div className="content">

                    <div id="login">
                        <form method="post" action="">
                            <h1>Login</h1>
                            <p>
                                <label htmlFor="user_email">Email Cadastrado</label>
                                <input id="" name="user_email" type="email" placeholder="ex. email@exemplo.com" required/>
                            </p>

                            <p>
                                <label htmlFor="user_password">Senha</label>
                                <input id="" name="user_password" type="password" placeholder="ex. senha" required/>
                            </p>

                            <p>
                                <input type="checkbox" name="manter_logado" id="" value="" />
                                <label htmlFor="manterlogado">Permanecer conectado</label>
                            </p>

                            <p>
                                <input type="submit" value="Entrar" />
                            </p>

                            <p className="link">
                                Ainda não tem conta?
                                <a href="#paracadastro">Cadastre-se</a>
                            </p>
                        </form>
                    </div>

                    <div id="cadastro">
                        <form method="post" action="">
                            <h1>Cadastro</h1>

                            <p>
                                <label htmlFor="name_reg">Seu nome</label>
                                <input id="" name="name_reg" type="text" placeholder="nome sobrenome" aria-required/>
                            </p>

                            <p>
                                <label htmlFor="email_reg">Seu melhor e-mail</label>
                                <input id="" name="email_reg" type="email" placeholder="contato@htmlecsspro.com" aria-required/>
                            </p>

                            <p>
                                <label htmlFor="password_reg">Sua senha</label>
                                <input id="" name="password_reg" type="password" placeholder="ex. Ab@12345" aria-required />
                            </p>

                            <p>
                                <input type="submit" value="Cadastrar" />
                            </p>

                            <p className="link">
                                Já tem uma conta?
                                <a href="#paralogin"> Ir para Login </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </body>


    );
}

export default Credentials;