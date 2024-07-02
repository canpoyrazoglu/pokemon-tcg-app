import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import Pill from "../components/Pill";
import { pokemonApi } from "../state/pokemon-api";
import { ScreenProps } from "../types/navigation";
import ScreenWrapper from "./ScreenWrapper";

/** Represents the screen where a pokemon card is displayed with various info */
export default function CardDetailsScreen(props: ScreenProps<'cardDetails'>){
    const { useDetailsQuery } = pokemonApi;
    const details = useDetailsQuery(props.route.params.card.id);
    console.log(JSON.stringify(details.data));
    const detailsView = details.isLoading ? <ActivityIndicator /> : <View><View style={style.pills}>
        <Pill>{details.data?.subtypes?.[0]}</Pill>
        <Pill>{`${details.data?.hp} HP`}</Pill>
        { details.data?.level ? <Pill>{`Level ${details.data?.level}`}</Pill> : null }
        { details.data?.evolvesFrom ? <Pill>{`Evolves from ${details.data?.evolvesFrom}`}</Pill> : null }
        { details.data?.evolvesTo ? <Pill>{`Evolves from ${details.data?.evolvesTo}`}</Pill> : null }
        </View>
        { details.data?.abilities?.length ? <>
            <Text style={style.abilitiesTitle}>Abilities</Text>
        {
            details.data?.abilities?.map((ability, index) => <View key={index} style={style.abilityContainer}>
                <Text>
                    <Text style={style.abilityTitle}>{ability.name}</Text>
                    <Text> </Text>
                    ({ability.type}): {ability.text}
                </Text>
            </View>)
        }</> : null}
    </View>
    return  <ScreenWrapper>
        <ScrollView style={style.contentContainer} contentContainerStyle={style.contentContainer}>
            <View style={style.cardContainer}>
                <Card card={props.route.params.card} />
            </View>
            {detailsView}
        </ScrollView>
    </ScreenWrapper>
}

const style = StyleSheet.create({
    cardContainer: {
        alignItems: 'center',
        paddingBottom: 8,
    },
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingTop: 20,
        paddingBottom: 40,

    },
    pills: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16
    },
    abilitiesTitle: {
        paddingLeft: 16,
        fontSize: 20,
        marginBottom: 8,
        fontWeight: '600'
    },
    abilityContainer: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: '#DDD',
        borderRadius: 12,
        marginVertical: 4,
        marginHorizontal: 10
    },
    abilityTitle: {
        fontWeight: '500'
    }
})