import {useFetch} from "#imports";;
import {CatListResponse} from "~/types/cats-app";

export const useCatsList = (page:number) => useFetch<CatListResponse>(`/api/cat-list?page=${page}`)