import './styles.css';
import Picture from '../../elements/Basket/Picture';

function Home() {
    return (
        <body>
            <div>
                <Picture />
                <a href="">
                    <div className="d-grid gap-2">
                        <button type="button" className="btn btn-bd-primary btn-lg">Começar!</button>
                    </div>
                </a>
            </div>

        </body>
    );
}

export default Home;