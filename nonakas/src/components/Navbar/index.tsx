import './styles.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg  bg-light fixed-top">
            <a className="navbar-brand col-5" href="index.html">
                <img className="basket-img" src="https://docs.google.com/uc?id=1b38952hlWRPB-ux7OCZtBFGd5Jg3NcsI" alt="Basket-img" />
                Nonaka's cestas
            </a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Início</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Estoque</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Cadastrar</a>
                    </li>
                </ul>
                <a href="#">
                    <img className="profile-img" src='https://docs.google.com/uc?id=18TkYk6SM7YhriQK76UzhCYMVz9p8MnEJ' alt='Profile-img' />
                </a>
            </div>
        </nav >

    );
}

export default Navbar;