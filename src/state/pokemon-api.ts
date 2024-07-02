import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.pokemontcg.io/v2/',

    }),
    endpoints: build => ({
        list: build.query<any,any>({
            query: () => 'cards'
        }),
        details: build.query({
            query: (id: number) => `cards/${id}`
        })
    })
})
