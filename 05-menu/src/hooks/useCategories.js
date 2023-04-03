import { useState } from "react";
import items from "../helper/data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))]
console.log(allCategories)

const useCategories = () => {
    const [categories, setCategories] = useState(allCategories);


    return {}
}

export default useCategories