import {defineEventHandler, useQuery} from "h3";
import axios, {AxiosResponse} from "axios";
import {CatListResponse} from "~/types/cats-app/cat-list.reponse";

const getUrl = (limit, page, order) => {    
    const baseurl = process.env.CATS_API_URL;
    return `${baseurl}/images/search?limit=${limit}&page=${page}&order=${order}`
}
const infinetScrollUrls = (limit: number, apiLimit:number = 100,order:string,) => {
    const res = {};
    const pages = Math.ceil(limit/(apiLimit));
    let l = limit
    for(let i = 0; i <= pages;i++){
        if(i === pages){
            res[i] = getUrl(apiLimit, i+1, order)
        }
        else{
            res[i] =  getUrl(apiLimit, i+1, order);
            l = l-apiLimit
        }
    }
    return res
}

export default defineEventHandler(async (event) => {
    const query = useQuery(event)
    let limit = Number(query.limit ?? 30);
    const page = Number(query.page ?? 1);
    const order = query.oreder?String(query.oreder):undefined;
    const apiKey = process.env.CATS_API_KEY;
    const apiRequest = (url: string) => axios.get<CatListResponse, AxiosResponse<CatListResponse>>(url, {
        headers: {
            'x-api-key': apiKey
        }
    }).then(res => res.data);

    try {
        if(limit*page > 100){
            const urlList = infinetScrollUrls(limit*100, 100, order)
            const r = [];
            console.log(urlList)
            for(let c in urlList){
                const result = await apiRequest(urlList[c]);
                r.push(...result);
            }
            return r;
        }else{
            return apiRequest(getUrl(limit*page, 1, order));
        }
    } catch (e) {
        return {
            message: 'Remote server request problem, contact the administrator'
        }
    }
})

