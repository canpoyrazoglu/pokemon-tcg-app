import { StyleSheet, View } from "react-native";

type ScreenWrapperProps = {
    children: any
};

export default function ScreenWrapper(props: ScreenWrapperProps){
    return <View style={StyleSheet.absoluteFill}>
        {props.children}
    </View>
}