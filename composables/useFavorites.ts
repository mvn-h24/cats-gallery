import { CatImage } from "~~/types/cats-app";

export const useFavorites = () => useState<Array<CatImage>>('favorites', () => [])
