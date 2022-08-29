import './styles.css';

function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://docs.google.com/uc?id=1b38952hlWRPB-ux7OCZtBFGd5Jg3NcsI" alt="" width="30" height="24" />
                    Nonaka's
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>       
            </div>
        </nav>

    );
}

export default Navbar;