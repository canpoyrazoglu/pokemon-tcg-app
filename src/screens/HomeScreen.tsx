import { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, ViewToken } from "react-native";
import FastImage from "react-native-fast-image";
import Card from "../components/Card";
import { useNavigate } from "../hooks/navigation";
import { pokemonApi } from "../state/pokemonApi";
import ScreenWrapper from "./ScreenWrapper";

/** Represents the home screen with list of cards. */
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

    // prefetch larger images of cards on screen for quicker loading the details view 
    // as it might potentially be clicked
    const viewabilityConfig = {
        minimumViewTime: 300,
        viewAreaCoveragePercentThreshold: 50,
        waitForInteraction: true,
    };

    const onViewableItemsChanged = (info: {viewableItems: ViewToken<PokemonCard>[]}) => FastImage.preload(info.viewableItems
        .filter(vt => vt.isViewable)
        .map(vt => ({ uri: vt.item.images.large})));

    return <ScreenWrapper>
        <FlatList onViewableItemsChanged={onViewableItemsChanged} viewabilityConfig={viewabilityConfig} data={items} renderItem={renderItem} style={styles.list} onEndReachedThreshold={0.65}
                onEndReached={paginate} contentContainerStyle={styles.listContent} />
    </ScreenWrapper>
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
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