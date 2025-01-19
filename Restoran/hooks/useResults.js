import { use, useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [result, setResult] = useState([])
    const [errorMessage, seterrorMessage] = useState("")

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "İstanbul"
                }
            })
            setResult(response.data.businesses)
            seterrorMessage("")
        } catch (error) {
            seterrorMessage("Bağlantı Hatası")
        }

    }

    useEffect(() => {
        searchApi("Toast");
    }, [])

    return [searchApi, result, errorMessage]

}