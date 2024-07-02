import { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text } from "react-native";
import Card from "../components/Card";
import { useNavigate } from "../hooks/navigation";
import { pokemonApi } from "../state/pokemon-api";
import ScreenWrapper from "./ScreenWrapper";


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

    // trigger a 'pagination' for first fetch
    useEffect(() => {
        paginate();
    }, []);

    return <ScreenWrapper>
        <FlatList data={items} renderItem={renderItem} style={styles.list} onEndReachedThreshold={0.65}
                onEndReached={paginate} contentContainerStyle={styles.listContent} />
    </ScreenWrapper>
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        backgroundColor:'red'
    },
    listContent: {
        paddingVertical: 10,
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