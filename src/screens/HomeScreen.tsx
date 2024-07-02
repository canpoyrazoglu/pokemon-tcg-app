import { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../components/Card";
import { useNavigate } from "../hooks/navigation";
import { pokemonApi } from "../state/pokemon-api";


export default function HomeScreen(){
    const navigate = useNavigate();
    const { useLazyListQuery } = pokemonApi;

    const [fetchList, list] = useLazyListQuery();

    // we concatenate all the pages from query result here
    const [items, setItems] = useState<PokemonCard[]>([]);

    const renderItem = ({item}: {item: PokemonCard}) => (
        <Pressable style={styles.listEntry} onPress={() => navigate('cardDetails', {
            card: item
        })}>
            <Card small card={item} />
            <Text style={styles.listCardName}>{item.name}</Text>
        </Pressable>
      );

    const paginate = () => {
        fetchList((list.data?.page ?? 0) + 1);
    }

    useEffect(() => {
        if(list.data?.data){
            if(list.data.page == 1){
                setItems(list.data.data);
            }else{
                setItems(existing => [...existing, ...list.data!.data])
            }
        }
    }, [list.data?.page])
    console.log(JSON.stringify(list.data?.data[0]));

    // trigger a 'pagination' for first fetch
    useEffect(() => {
        paginate();
    }, []);

    return <SafeAreaView style={{ ...StyleSheet.absoluteFillObject}}>
        <FlatList data={items} renderItem={renderItem} style={styles.list} onEndReachedThreshold={0.65}
                onEndReached={paginate} contentContainerStyle={styles.listContent} />
    </SafeAreaView>
}

const styles = StyleSheet.create({
    list: {
        flex: 1
    },
    listContent: {
        paddingVertical: 40,
    },
    listEntry: {
        height: 100, 
        flexDirection: 'row',
        padding: 24,
        overflow: 'hidden'
    },
    listCardName: {
        fontSize: 20,
        paddingLeft: 16
    }
})