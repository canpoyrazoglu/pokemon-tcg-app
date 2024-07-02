import { useMemo } from "react";
import { ActivityIndicator, Alert, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import Pill from "../components/Pill";
import { pokemonApi } from "../state/pokemonApi";
import { savedCards, savedIdsSelector } from "../state/savedCards";
import { ScreenProps } from "../types/navigation";
import ScreenWrapper from "./ScreenWrapper";

/** Represents the screen where a pokemon card is displayed with various info */
export default function CardDetailsScreen(props: ScreenProps<'cardDetails'>){
    const { useDetailsQuery } = pokemonApi;
    const dispatch = useDispatch();
    const card = props.route.params.card;
    const details = useDetailsQuery(card.id);
    const savedIds = useSelector(savedIdsSelector);
    const isSaved = useMemo(() => savedIds.includes(card.id), [savedIds])
    const detailsView = details.isLoading ? <ActivityIndicator /> : <View><View style={style.pills}>
        <Pill>{details.data?.subtypes?.[0]}</Pill>
        { details.data?.hp ? <Pill>{`${details.data?.hp} HP`}</Pill>: null }
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

    const removeCard = () => {
        dispatch(savedCards.actions.removeCard(card.id!));
        Alert.alert('Card removed from saved items.')
    }
    const addCard = () => {
        dispatch(savedCards.actions.addCard(card.id!))
        Alert.alert('Card added to saved items.')
    }
    return  <ScreenWrapper>
        <ScrollView style={style.contentContainer} contentContainerStyle={style.contentContainer}>
            <View style={style.cardContainer}>
                <Card card={props.route.params.card} />
            </View>
            { isSaved 
                ? <View style={style.savedContainer}>
                    <Text>✅ This card is in your saved cards </Text>
                    <Pressable style={style.addedButton} onPress={removeCard}>
                        <Text style={style.addedText}>
                            Remove from Saved Cards
                        </Text>
                    </Pressable>
                </View>
                : <Pressable style={style.notAddedButton} onPress={addCard}>
                    <Text style={style.notAddedText}>
                        Add to Saved Cards
                    </Text>
                </Pressable> }
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
    },
    addedButton: {
        borderColor: 'green',
        borderWidth: 1,
        backgroundColor: 'green',
        marginHorizontal: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        height: 30,
        paddingHorizontal: 8,
        marginTop: 8
    },
    addedText: {
        color: 'white'
    },
    notAddedButton: {
        borderColor: 'green',
        borderWidth: 1,
        backgroundColor: 'transparent',
        marginHorizontal: 40,
        alignItems: 'center',
        borderRadius: 8,
        height: 30,
        justifyContent: 'center'
    },
    notAddedText: {
        color: 'green'
    },
    savedContainer: {
        marginTop: 12,
        alignItems: 'center'
    }
})