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
            serializeQueryArgs: args => {
                return `cards_page_${Number(args.queryArgs.toString()) ?? 1}`;
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
