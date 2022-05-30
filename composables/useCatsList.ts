import {useFetch} from "#imports";;
import {CatListResponse} from "~/types/cats-app";

export const useCatsList = () => useFetch<CatListResponse>('/api/cat-list')