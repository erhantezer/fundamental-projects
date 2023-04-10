import { useState } from "react";


const SingleColor = ({rgb, weight, index, hexColor}) => {
    const [alert, setAlert] = useState(false);

    const bcg = rgb.join(",") //! array olana join ile virgül le ayırarak string yaptık
    console.log(bcg)
    const hexValue = `#${hexColor}`

    return (
        <div>SingleColor</div>
    )
}

export default SingleColor