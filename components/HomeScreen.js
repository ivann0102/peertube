import { useState } from 'react';
import { TextInput, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import MovieItem from './MovieItem';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from "./Search"
import Recommendations from "./Recommendations"

export default function HomeScreen({ navigation }) {
    const [text, onChangeText] = useState();

    const Tab = createBottomTabNavigator();
    // function searchMovies() {
    //     fetch(`https://www.omdbapi.com/?s=${text}&page=1&apikey=${key}`)
    //         .then((response) => response.json())
    //         .then((json) => {
    //             json = json['Search'];
    //             console.log(json);

    //             fetch(`https://www.omdbapi.com/?s=${text}&page=2&apikey=${key}`)
    //                 .then((response) => response.json())
    //                 .then((json1) => {
    //                     json = [...json, ...json1['Search']];
    //                     console.log(json);
    //                     setMovies(json);
    //                 })
    //                 .catch((error) => {
    //                     console.error(error);
    //                 });
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }
    return (
        <Tab.Navigator screenOptions={{tabBarIconStyle: { display: "none" }}}>
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Recommendations" component={Recommendations} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 100,
    },
    input: {
        height: 40,
        paddingRight: 250,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        alignSelf: 'center',
        marginBottom: 5,
    },
    search: {
        flexDirection: 'row',
        alignItems: 'stretch',
    },
});
