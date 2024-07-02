import { StyleSheet, Text, View } from "react-native"

type CardProps = {
    id: string
}

export default function Card(props: CardProps){
    return <View style={styles.card}>
        <Text>{props.id}</Text>
    </View>
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        backgroundColor: 'gray',
        height: 200,
    }
})