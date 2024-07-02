import { StyleSheet, Text, View } from "react-native";

type PillProps = {
    children?: string
}

/** A small "pill" item that can display a tag text. */
export default function Pill(props: PillProps){
    if(!props.children?.length){
        return null;
    }
    return <View style={style.pill}>
        <Text style={style.text}>{props.children}</Text>
    </View>
}

const style = StyleSheet.create({
    pill : {
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 4,
        backgroundColor: '#445599',
        flexGrow: 0,
        flexShrink: 1,
        borderRadius: 12,
        margin: 4,
    },
    text: {
        textTransform: 'uppercase',
        color: 'white',
        fontWeight: 'bold'
    }
})