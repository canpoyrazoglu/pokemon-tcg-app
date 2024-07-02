import { StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";

type CardProps = {
    card: PokemonCard,
    small?: boolean;
}

export default function Card(props: CardProps){
    const isSmall = props.small ?? false;
    return <View style={styles.container}>
        <FastImage resizeMode="contain" style={isSmall ? styles.smallCard : styles.largeCard} source={{uri: isSmall ? props.card.images.small : props.card.images.large}} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallCard: {
        backgroundColor: '#EEEEEE',
        height: 80,
        width: 57,
        borderRadius: 8,
        overflow: 'hidden'
    },
    largeCard: {
        backgroundColor: '#EEEEEE',
        height: 320,
        width: 240,
        borderRadius: 10,
        overflow: 'hidden'

    }
})