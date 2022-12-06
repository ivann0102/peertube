import { TextInput, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import VideoItem from './VideoItem'

export default function Search({ navigation }) {
    const [text, onChangeText] = useState();
    const [videos, setVideos] = useState([{
        name: "Classical Period Music",
        thumbnailPath: "/static/thumbnails/de875149-89d8-4987-9a24-982010e7e161.jpg",
        publisheAt: "2020-07-09T18:12:48.676Z",
        uuid: "de875149-89d8-4987-9a24-982010e7e161"
    }]);
    function searchVideos() {
        fetch(`https://tilvids.com/api/v1/search/videos?search=${text}`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json["data"]);
                setVideos([...json["data"]]);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Search..."
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        searchVideos();
                    }}>
                    <FontAwesome name="search" size={35} color="black" />
                </TouchableOpacity>
            </View>
            <ScrollView>
                {videos.map(video => {
                    return <VideoItem video={video} navigation={navigation} />
                }
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
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
