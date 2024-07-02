import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ListResult } from "../types/api";

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.pokemontcg.io/v2/',

    }),
    endpoints: build => ({
        list: build.query<ListResult, number>({
            query: (page: number) => `cards?page=${page}&pageSize=10`,
            transformResponse: (retval) => {
                console.log(retval);
                return retval;
            },
            transformErrorResponse: (err) => {
                console.error(err);
                return err;
            }
        }),
        details: build.query({
            query: (id: number) => `cards/${id}`
        })
    })
})
