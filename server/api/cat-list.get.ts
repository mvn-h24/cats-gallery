import {defineEventHandler, useQuery} from "h3";
import axios, {AxiosResponse} from "axios";
import {CatListResponse} from "~/types/cats-app/cat-list.reponse";

const getUrl = (limit, page, order) => {
    const baseurl = process.env.CATS_API_URL;
    return `${baseurl}/images/search?limit=${limit}&page=${page}&order=${order}`
}
const apiRequest = (url: string, apiKey: string) => axios.get<CatListResponse, AxiosResponse<CatListResponse>>(url, {
    headers: {
        'x-api-key': apiKey
    }
}).then(res => res.data);


export default defineEventHandler(async (event) => {
    const query = useQuery(event)
    let limit = Number(query.limit ?? 30);
    const page = Number(query.page ?? 1);
    const order = query.oreder ? String(query.oreder) : undefined;
    const apiKey = process.env.CATS_API_KEY;
    try {
        return apiRequest(getUrl(limit, page, order), apiKey);
    } catch (e) {
        return {
            message: 'Remote server request problem, contact the administrator'
        }
    }
})

