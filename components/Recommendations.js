import { TextInput, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useState,  useEffect  } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import VideoItem from './VideoItem'

export default function Recommendations({navigation}) {
    const [videos, setVideos] = useState([{
        name: "Classical Period Music",
        thumbnailPath: "/static/thumbnails/de875149-89d8-4987-9a24-982010e7e161.jpg",
        publisheAt: "2020-07-09T18:12:48.676Z",
        uuid: "de875149-89d8-4987-9a24-982010e7e161"
    }]);
    useEffect(() => {
        searchVideos();
      }, []);
    function searchVideos() {
        fetch(`https://tilvids.com/api/v1/video-channels/yesterkitchen_channel/videos`)
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
    container: {
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
