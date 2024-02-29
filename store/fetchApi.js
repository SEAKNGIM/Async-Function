const BASE_URL = "http://localhost:5500/data/"

export async function getData(endPoint) {
    try {
        // Fetching data from the specified endpoint
        const respone = await fetch(BASE_URL + endPoint + ".json", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await respone.json();
        return data;

    } catch (error) {
        console.log(error)
    }
}