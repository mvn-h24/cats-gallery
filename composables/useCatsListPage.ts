import {useAsyncData, useFetch, useState, watch} from "#imports";
import {CatListResponse, ErrorResponse} from "~/types/cats-app";


export const useCatsList = () => {
    const page = useState<number>('cat-list-page', () => 1);
    const curPageUrl = () => `/api/cat-list?page=${page.value}`;
    const {
        data: catDataList
    } = useAsyncData<CatListResponse>('cat-list-state', () => $fetch(curPageUrl()))
    const catList = useState<CatListResponse>('', () => catDataList)
    const catListLoading = useState<boolean>('cat-list-loading-state', () => false)

    watch(page, async () => {
        Promise.resolve().then(() => {
            catListLoading.value = true
        }).then(() => useFetch<CatListResponse | ErrorResponse>(curPageUrl()))
            .then((res) => {
                if (Array.isArray(res.data.value)) {
                    catList.value = catList.value.concat(...res.data.value)
                }
                catListLoading.value = false
            })
    })
    return {catList, catListLoading, page}
};