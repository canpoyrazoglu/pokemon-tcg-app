import { useNavigation } from "@react-navigation/native";
import { FlatList, Pressable, StyleSheet, View } from "react-native";
import Card from "../components/Card";
import { pokemonApi } from "../state/pokemon-api";


export default function HomeScreen(){
    const navigation = useNavigation();
    const { useListQuery } = pokemonApi;
    const list = useListQuery();

    const renderItem = ({item}) => (
        <Pressable onPress={() => this._onPress(item)}>
            <Card id={item.id} />
        </Pressable>
      );
    return <View style={{ ...StyleSheet.absoluteFillObject}}>
        <FlatList data={list.data} renderItem={renderItem} style={{flex:1, backgroundColor:'red'}}>

        </FlatList>
    </View>
}