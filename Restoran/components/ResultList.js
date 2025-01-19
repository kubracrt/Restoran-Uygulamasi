import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail'
import { useNavigation } from '@react-navigation/native'

export default function ResultList(props) {
    const navigation = useNavigation()
    return (
        <View style={styles.view}>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={props.result}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("ResultShow", { id: item.id })}>
                            <ResultDetail results={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        marginBottom: 40
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5
    }
})