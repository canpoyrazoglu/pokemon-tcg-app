import { ScrollView, StyleSheet, View } from "react-native";
import Card from "../components/Card";
import { ScreenProps } from "../types/navigation";
import ScreenWrapper from "./ScreenWrapper";

export default function CardDetailsScreen(props: ScreenProps<'cardDetails'>){
    return  <ScreenWrapper>
        <ScrollView style={style.contentContainer}>
            <View style={style.cardContainer}>
                <Card card={props.route.params.card} />
            </View>
            
        </ScrollView>
    </ScreenWrapper>
}

const style = StyleSheet.create({
    cardContainer: {
        alignItems: 'center'
    },
    contentContainer: {
        paddingVertical: 20
    }

})