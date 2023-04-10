import { useEffect, useState } from "react";
import rgbToHex from "../utils/utils";
import { toastSuccessNotify } from "../helper/toastify";


const SingleColor = ({rgb, weight, index, hexColor}) => {
    

    const bcg = rgb.join(",") //! array olana join ile virgül le ayırarak string yaptık
    // console.log(bcg)
    const hexValue = `#${hexColor}`
    // console.log(hexValue)
    const hex = rgbToHex(...rgb)



    return (
        <article
        className={`color ${index > 10 && 'color-light'}`}
        style={{backgroundColor:`rgb(${bcg})`}}
        onClick={() => {
            toastSuccessNotify("Color copied to clipboard")
            navigator.clipboard.writeText(hexValue) //! kopyalama işlemi yapar
        }}
        >
            <p className="percent-value">{weight}%</p>
            <p className="color-value">{hexValue}</p>
            
        </article>
    )
}

export default SingleColor