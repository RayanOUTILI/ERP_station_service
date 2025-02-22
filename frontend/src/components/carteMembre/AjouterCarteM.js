import React, { useState } from "react";
import ReactDOMServer from 'react-dom/server'
import CarteMembre from "./CarteMembre";
import SmallIcons from "../SmallIcons";

//a faire logique bouton enregistrer
const AjouterCarteM = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [adresse, setAdresse] = useState('');

    return (
        <section id='carte'>
            <div className="composantGrand">
                <div className="composantGrandCarteEM">
                    <div className="Top_Component_Grand">
                        <button id="buttonReturn" className="buttonAction">Retour</button>
                        <h2 className="component_title">Ajouter une carte</h2>
                        <hr></hr>
                    </div>

                    <form>
                        <div className="infoClientCarte">
                            <h3>Nom :</h3>
                            <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} required />
                        </div>
                        <div className="infoClientCarte">
                            <h3>Prénom :</h3>
                            <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
                        </div>
                        <div className="infoClientCarte">
                            <h3>Adresse :</h3>
                            <input type="text" value={adresse} onChange={(e) => setAdresse(e.target.value)} required />
                        </div>

                        <div className="infoClientCarte">
                            <button id="buttonCarteEM" className="buttonCarte" type="submit">Enregistrer</button>
                            <button id="buttonCarteEM" className="buttonCarte" type="button">Annuler</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};


document.addEventListener("click", function (event) {
    if (event.target.classList.contains("buttonCarte")) {
        const buttonText = event.target.textContent;
        switch (buttonText) {
            case "Retour":
                console.log("Bouton retour cliqué");
                break;
            case "Enregistrer":
                console.log("Bouton enregister cliqué");

                break;
            case "Annuler":
                console.log("Bouton annuler cliqué");
                annuler();
                break;
            default:
                console.log("Bouton inconnu cliqué" + buttonText);
                break;
        }
        event.preventDefault();
    }
});

function returnHome() {
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    const smallIcons = ReactDOMServer.renderToString(<SmallIcons />);
    const carteMembre = ReactDOMServer.renderToString(<CarteMembre />);
    divGeneral.innerHTML = smallIcons + carteMembre;
    divGeneral.style.display = "block";
}


function annuler() {
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    let saveDiv = divGeneral.innerHTML;
    console.log("annuler");

    divGeneral.innerHTML = ReactDOMServer.renderToString(<AjouterCarteM />);
    divGeneral.style.display = "block";
}

export default AjouterCarteM;