import { Text, View, StyleSheet, Button, Image } from 'react-native';

export default function VieodItem(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.video.name}</Text>
            <Image style={{height: 210}} source={{uri: "https://tilvids.com"+props.video.thumbnailPath}}/>
            <Text>{props.video.publishedAt}</Text>
            <Button
                title="Go to Details"
                onPress={() => {
                    props.navigation.navigate('Details', {
                        uuid: props.video.uuid,
                    });
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
    },
    container: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});
