import Axios from 'axios';

const urlApiTwitter = "http://91.121.88.97:5000/last"
const urlApiTwitterSentAgg = "http://91.121.88.97:5000/sentiment"
const urlApiTwitterTeam = "http://91.121.88.97:5000/tpteam"

export const getTwitterAgg= () => Axios.get(urlApiTwitterSentAgg)
export const getTwitter= () => Axios.get(urlApiTwitter)
export const getTwitterTeam= () => Axios.get(urlApiTwitterTeam)

