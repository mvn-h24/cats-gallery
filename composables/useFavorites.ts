import {useState} from "#imports";
import {CatImage} from "~~/types/cats-app";

export const useFavorites = () => {
    const favorites = useState<Array<CatImage>>('favorites', () => [])
    const toggleFavorite = (item: CatImage) => {
        if (isFavorite(item)) {
            favorites.value = favorites.value.filter(({id}) => id !== item.id);
        } else {
            favorites.value.push(item);
        }
    }
    const isFavorite = (item: CatImage) => favorites.value.includes(item);
    return {favorites, toggleFavorite, isFavorite}
}