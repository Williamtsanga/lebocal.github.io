import React from 'react'

class Footer extends React.Component {
    render(){
        return(
            <footer>
                <div className="newsletter" >
                    <div className="slog" >
                            <div>
                                <span className="text-bold text" >Register to our newsletter</span> <br /> <span className="text text-light" >Get the latest news available.</span> 
                            </div>
                        </div>
                    <div className="but" >
                        <button>Newsletter</button>
                    </div>
                </div>
                <div className="foot-grid">
                    <div className="grids" >
                        <div>
                            <h3>Latest article</h3>
                        Lorem Ipsum est un texte d'espace réservé couramment utilisé dans les industries graphique, imprimée et éditoriale pour prévisualiser les mises en page et les maquettes visuelles
                        </div>
                    </div>
                    <div className="grids" >
                        <div>
                        Lorem Ipsum est un texte d'espace réservé couramment utilisé dans les industries graphique, imprimée et éditoriale pour prévisualiser les mises en page et les maquettes visuelles
                        </div>
                    </div>
                    <div className="grids" >
                        <div>
                        Lorem Ipsum est un texte d'espace réservé couramment utilisé dans les industries graphique, imprimée et éditoriale pour prévisualiser les mises en page et les maquettes visuelles
                        </div>
                    </div>
                </div>
                <div className='copyright' >copyright L'Equipe : @lebocal</div>
            </footer>
        );
    }
}

export default Footer