import { useState } from "react";


const SingleColor = ({rgb, weight, index, hexColor}) => {
    const [alert, setAlert] = useState(false);

    const bcg = rgb.join(",") //! array olana join ile virgül le ayırarak string yaptık
    // console.log(bcg)
    const hexValue = `#${hexColor}`
    // console.log(hexValue)

    return (
        <article
        className={`color ${index > 10 && 'color-light'}`}
        style={{backgroundColor:`rgb(${bcg})`}}
        >
            <p className="percent-value">{weight}%</p>
            <p className="color-value">{hexValue}</p>
        </article>
    )
}

export default SingleColor