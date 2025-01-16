import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useFetch() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function FetchData() {
            try {
                setIsLoading(true);
                const { data } =await axios.get('http://localhost:5000/hotels');
                setData(data)
            } catch (error) {
                setData([])
                toast.error(error.message)
            } finally {
                setIsLoading(false)
            }
        }
        FetchData()
    }, [])

    return { data, isLoading }
}