import { StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";

type CardProps = {
    card: PokemonCard,
    small?: boolean;
}

export default function Card(props: CardProps){
    const isSmall = props.small ?? false;
    return <View style={styles.container}>
        <FastImage resizeMode="contain" style={isSmall ? styles.smallCard : styles.largeCard} source={{uri: props.card.images.small}} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallCard: {
        height: 80,
        width: 57
    },
    largeCard: {
        height: 220,
        width: 100
    }
})