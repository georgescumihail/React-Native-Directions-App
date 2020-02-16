import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const MapScreen = ({ route }) => {

    const inputLat = parseFloat(route.params.lat);
    const inputLong = parseFloat(route.params.long);

    const startingPoint = {
        latitude: 44.446962,
        longitude: 26.096668
    };

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                region={{
                    latitude: startingPoint.latitude,
                    longitude: startingPoint.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                <MapViewDirections
                    origin={startingPoint}
                    destination={{
                        latitude: inputLat,
                        longitude: inputLong
                    }}
                    apikey={""}
                />
                <Marker
                    coordinate={startingPoint}
                    title="Piata Romana"
                    description="One of the best spots in the city!"
                />
                <Marker
                    coordinate={{
                        latitude: inputLat,
                        longitude: inputLong
                    }}
                    title="Destination"
                    description="This is the input destination"
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default MapScreen;