const BASE_URL = 'https://thatcopy.pw/catapi/rest/' //define uma constante com o valor da url da API
const btn = document.querySelector("#change-cat")
const img = document.querySelector("#cat")

const getCats = async () => {
    try{
        const data = await fetch(BASE_URL)
        const json = await data.json()

        return json.webpurl
    } catch(e) {
        console.log(e.message)
    }
}

const loadImg = async () => {
    img.src = await getCats()
}

btn.addEventListener('click', loadImg)

loadImg()