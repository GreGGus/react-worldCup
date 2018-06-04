import Axios from 'axios';

const urlApiTwitterAgg = "http://localhost:5000/"
const urlApiTwitter = "http://localhost:5000/data"

export const getTwitterAgg= () => Axios.get(urlApiTwitterAgg)
export const getTwitter= () => Axios.get(urlApiTwitter)

