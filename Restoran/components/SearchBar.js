import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function SearchBar({term,onTermChange,onTermSubmit}) {
    return (
        <View style={styles.View}>
          <AntDesign style={styles.Icon} name="search1" size={24} color="purple" />
          <TextInput style={styles.Text}
            placeholder='Ara'
            autoCorrect={false}
            autoCapitalize='none'
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit} />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      View: {
        flexDirection: "row",
        borderRadius: 10,
        margin: 10,
        padding: 5,
        backgroundColor: "grey",
        alignItems: 'center',
        height: 44
      },
      Text: {
        fontSize: 14,
        marginLeft: 4,
        flex: 1
      },
      Icon:{
        marginHorizontal:12
      }
    });