class MarvelService {
    getResource = async (url) => {
        let res = await fetch(url)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        return await res.json()
    }
    getAllCharacters=()=>{
        return this.getResource('https://gateway.marvel.com:443/v1/public/characters?apikey=d744a44799ab057e317cba56f8a2aed4')
    }
}
export default MarvelService