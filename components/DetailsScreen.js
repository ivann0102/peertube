import { Text, View, StyleSheet, Image } from 'react-native';
import { useState, useEffect } from 'react';

export default function DetailsScreen({ route, navigation }) {
  const [video, setVideo] = useState([{
    name: "Classical Period Music",
    thumbnailPath: "/static/thumbnails/de875149-89d8-4987-9a24-982010e7e161.jpg",
    publisheAt: "2020-07-09T18:12:48.676Z",
    uuid: "de875149-89d8-4987-9a24-982010e7e161"
}]);  const uuid = route.params.uuid;

  useEffect(() => {
    getVideo();
  }, []);
  function getVideo() {
    fetch(`https://tilvids.com/api/v1/videos/${uuid}`)
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        setVideo(json);
    })
    .catch((error) => {
        console.error(error);
    });
  }
  return (
    <View>
      <Text style={styles.title}>{video.name}</Text>
      <Image style={styles.image} source={{
          uri:  "https://tilvids.com"+video.thumbnailPath,
        }}/>
      <Text>Released: {video.publishedAt}</Text>
      <Text>Likes: {video.likes}</Text>
      <Text>Description: {video.description}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  image: {
    width: 300,
    height: 200,
  }
})