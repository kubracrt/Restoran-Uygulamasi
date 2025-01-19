import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ResultDetail({ results }) {
    return (
        <View style={styles.view}>
            <Image
                style={styles.image}
                source={results.image_url ? { uri: results.image_url } : null}
            />
            <Text style={styles.name}>{results.name}</Text>
            <Text>{results.rating} Yıldızlı Restoran, {results.review_count} Değerlendirme</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 150,
        borderRadius: 8,
        marginBottom: 6
    },
    name: {
        fontWeight: "bold",
    }
})