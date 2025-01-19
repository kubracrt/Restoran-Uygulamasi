import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import yelp from '../api/yelp'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function ResultShowScreen({ route }) {
  const id = route.params.id;
  const [result, setResult] = useState(null)

  getResults = async (id) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }

  useEffect(() => {
    getResults(id)
  }, [])
  if (!result) {
    return null;
  }


  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.phone}>{result.phone}</Text>
      <View style={styles.phone}>
        {result.is_close ? <AntDesign name="closecircle" size={28} color="black" />
          : <MaterialIcons name="delivery-dining" size={28} color="black" />
        }
      </View>
      <FlatList
        data={result.photos}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />
        }}
      />
    </View>

  )
}

const styles = StyleSheet.create({
  image: {
    height: 180,
    margin: 10,
    borderRadius: 20
  },
  title: {
    alignSelf: "center",
    fontSize: 25,
    marginVertical: 10
  },
  phone: {
    alignSelf: "center",
    fontSize: 20
  },
  icon:{
    alignSelf:"center"
  }
})