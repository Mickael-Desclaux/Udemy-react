import React from "react";

const Car = ({children, color}) => {

    const colorInfo = color ? (<p>Couleur: {color}</p>) : (<p>Couleur: Néant</p>)

    if (children) {
        return (
            <div className="cars">
                <p>Marque: {children}</p>
                {colorInfo}
            </div>
        )
    } else {
        return <p>Pas de data !</p>
    }
}

export default Car;