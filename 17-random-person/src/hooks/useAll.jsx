import { useEffect, useState } from "react"
import axios from "axios";

const url = 'https://randomuser.me/api/';
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg';

const useAll = () => {
    const [loading, setLoading] = useState(false);
    const [person, setPerson] = useState(null);
    const [value, setValue] = useState("random person");
    const [title, setTitle] = useState("name");

    const fetchPerson = async () => {
        try {
            const {data} = await axios(url)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPerson()
    }, []);

    return {}
}

export default useAll