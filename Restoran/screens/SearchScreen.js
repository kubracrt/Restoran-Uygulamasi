import { StyleSheet, Text, View, } from 'react-native';
import React from 'react';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';
import { useState } from 'react';

export default function SearchScreen() {

  const [searchApi, result, errorMessage] = useResults()
  const [term, setTerm] = useState("second")
  console.log(result)

  const filterResultsByPrice = (price) => {
    return result.filter((result) => {
      return result.price === price;
    })
  }
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)} />
      {errorMessage ? <Text>{errorMessage}</Text> : <>
        {result.length == 0 ? <></> : <>
          <ResultList title="Ucuz Restorantlar" result={filterResultsByPrice("₺")} />
          <ResultList title="Uygun Restorantlar" result={filterResultsByPrice("₺₺")} />
          <ResultList title="Pahalı Restorantlar" result={filterResultsByPrice("₺₺₺")} />

        </>}
      </>}


    </View>
  );
}

const styles = StyleSheet.create({

});
