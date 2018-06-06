import Axios from 'axios';

const urlApiTwitter = "http://91.121.88.97:5000/"
const urlApiTwitterAgg = "http://91.121.88.97:5000/data"

export const getTwitterAgg= () => Axios.get(urlApiTwitter)
export const getTwitter= () => Axios.get(urlApiTwitterAgg)

