import Axios from 'axios';

const urlApiTwitterAgg = "http://91.121.88.97:5000/"
const urlApiTwitter = "http://91.121.88.97:5000/data"

export const getTwitterAgg= () => Axios.get(urlApiTwitterAgg)
export const getTwitter= () => Axios.get(urlApiTwitter)

