import { NativeStackScreenProps } from "@react-navigation/native-stack";

/** Represents the possible screens with any route parameters for strongly typed access. */
export type RouteParamMap = {
    home: undefined,
    cardDetails: {
        card: PokemonCard
    }
}

export type ScreenProps<T extends keyof RouteParamMap> = NativeStackScreenProps<RouteParamMap, T>;
