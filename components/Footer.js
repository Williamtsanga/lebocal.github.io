import React from 'react'
import {Link} from 'react-router-dom'

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
                    <h2>Latest article</h2>
                        <div>
                            
                        Lorem Ipsum est un texte d'espace réservé couramment utilisé dans les industries graphique, imprimée et éditoriale pour prévisualiser les mises en page et les maquettes visuelles
                        </div>
                    </div>
                    <div className="grids" >
                    <h2>Docs</h2>
                        <div>                   
                        Lorem Ipsum est un texte d'espace réservé couramment utilisé dans les industries graphique, imprimée et éditoriale pour prévisualiser les mises en page et les maquettes visuelles
                        </div>
                    </div>
                    <div className="grids" >
                        <h2>Contact us</h2>
                        <div className='contact' >
                            <form>
                                <label>
                                    <div>First Last name <span>*</span></div>
                                    <input type='text' />
                                </label>
                                <label>
                                    <div>Email <span>*</span></div>
                                    <input type='email' />
                                </label>
                                <label className="textarea" >
                                    <div>Message <span>*</span></div>
                                    <textarea cols="43" rows="10" ></textarea>
                                </label>
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className='copyright' >copyright L'Equipe : @lebocal</div>
            </footer>
        );
    }
}

export default Footer