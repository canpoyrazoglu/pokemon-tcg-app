/** Represents a list of cards result from the Pokemon Trading Cards API. */
export type ListResult = {
    data: PokemonCard[],
    count: number,
    page: number,
}