import { StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";

type CardProps = {
    card: PokemonCard,
    small?: boolean;
}

export default function Card(props: CardProps){
    const isSmall = props.small ?? false;
    return <View style={styles.container}>
        <FastImage  resizeMode="contain" style={isSmall ? styles.smallCard : styles.largeCard} source={{uri: isSmall ? props.card.images.small : props.card.images.large}} />
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
        height: 328,
        width: 238,
        shadowOpacity: 0.3,
        shadowRadius: 16,
        shadowColor: 'black',
        elevation: 20,
        overflow: 'visible'

    }
})