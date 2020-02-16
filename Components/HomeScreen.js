import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {

    const [lat, setLat] = useState();
    const [long, setLong] = useState();

    return (
        <View style={styles.container}>
            <Text
                style={styles.header}>
                Enter your destination coordinates:
            </Text>
            <TextInput
                onChangeText={text => setLat(text)}
                style={styles.input}
                placeholder="Latitude"
                value={lat}
            />
            <TextInput
                onChangeText={text => setLong(text)}
                style={styles.input}
                placeholder="Longitude"
                value={long}
            />
            <Button
                onPress={() => { navigation.navigate("Map") }}
                title="Show directions"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 15
    },
    input: {
        width: 200,
        height: 40,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 5,
        marginBottom: 20
    },
    header: {
        fontSize: 20,
        marginBottom: 25
    }
});

export default HomeScreen;