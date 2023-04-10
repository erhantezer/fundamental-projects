import { useEffect, useState } from "react";
import rgbToHex from "../utils/utils";


const SingleColor = ({rgb, weight, index, hexColor}) => {
    const [alert, setAlert] = useState(false);

    const bcg = rgb.join(",") //! array olana join ile virgül le ayırarak string yaptık
    // console.log(bcg)
    const hexValue = `#${hexColor}`
    // console.log(hexValue)
    const hex = rgbToHex(...rgb)

    useEffect(() => {
    let timeout = setTimeout(() => {
            setAlert(false)
        }, 5000);
        return (
            () => clearTimeout(timeout), console.log("will unmount") //! fonksiyon clear yapılınca çalışır component will unmount
                
            )
    },[index])//! index her değiştiğinde useeffect yenien çalışır component did update 

    return (
        <article
        className={`color ${index > 10 && 'color-light'}`}
        style={{backgroundColor:`rgb(${bcg})`}}
        onClick={() => {
            setAlert(true)
            navigator.clipboard.writeText(hexValue)
        }}
        >
            <p className="percent-value">{weight}%</p>
            <p className="color-value">{hexValue}</p>
            {alert && <p className='alert'>copied to clipboard</p>}
        </article>
    )
}

export default SingleColor