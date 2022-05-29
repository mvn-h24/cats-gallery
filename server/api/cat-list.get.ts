import {defineEventHandler, useQuery} from "h3";
import axios, {AxiosResponse} from "axios";
import {CatListReponse} from "~/types/cat-list.reponse";

export default defineEventHandler(async (event) => {
    const query = useQuery(event)
    const limit = query.limit ?? 5;
    const page = query.page ?? 1;
    const order = query.oreder ?? 'Desc';
    const baseurl = process.env.CATS_API_URL;
    const apiUrl = `${baseurl}/images/search?limit=${limit}&page=${page}&order=${order}`
    const apiKey = process.env.CATS_API_KEY;
    try {
        return axios.get<CatListReponse, AxiosResponse<CatListReponse>>(apiUrl, {
            headers: {
                'x-api-key': apiKey
            }
        }).then(res => res.data);
    } catch (e) {
        return {
            message: 'Remote server request problem, contact the administrator'
        }
    }
})