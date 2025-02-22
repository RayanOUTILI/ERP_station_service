import React from "react";
import ReactDOMServer from 'react-dom/server'
import SmallIcons from "../SmallIcons";
import CarteMembre from "./CarteMembre";


const AvantageCarteM = () => {
    const avantagesCarte = () => {
        return (
                <div className="avantages">
                    <div className="infoAvantages">
                        <h3>Points de fidélité : </h3>
                    </div>
                    <div className="infoPoint">
                        <h4>Comment recuperer des points de fidélité ?</h4>
                        <hr></hr>
                        <p className="avantage">BLA bla bla</p>
                    </div>
                    <div className="infoPoint">
                        <h4>Comment utiliser les points de fidélité ?</h4>
                        <hr></hr>
                        <p className="avantage">BLA bla bla</p>
                    </div>
                    <button id="buttonCarteEM" className="buttonAction">Modifier</button>
                </div>
        );
    };

    return (
        <section id='carte'>
            <div className="composantGrand">
                <div className="composantGrandCarteEM">
                    <div className="Top_Component_Grand">
                        <button id="buttonReturn" className="buttonAction">Retour</button>
                        <h2 className="component_title">Avantage</h2>
                        <hr></hr>
                    </div>
                    <div className="energie">
                        {avantagesCarte()}
                    </div>
                </div>
            </div>
        </section>
    );

};

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("buttonAction")) {
        const buttonText = event.target.textContent;
        switch (buttonText) {
            case "Retour":
                console.log("Bouton retour cliqué");
                returnHome();
                break;
            case "Modifier":
                console.log("Bouton modifer cliqué");
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


export default AvantageCarteM;