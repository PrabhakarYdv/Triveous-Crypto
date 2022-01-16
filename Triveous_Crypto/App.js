import React, { useEffect, useState } from 'react';
import type { Node } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, TextInput, TextInputComponent, TextComponent } from 'react-native';
import CurrencyLayout from './layouts/CurrencyLayout';
import { SAMPLE_DATA } from '../Triveous_Crypto/data/ResponseModel'
import { getData } from './data/API_Call';


// Main Application
function App() {
  const [data, setData] = useState([])
  const [selectCoin, setselectCoinData] = useState(null)

  useEffect(() => {
    // Calling API
    const fetchData = async () => {
      const responseData = await getData();
      setData(responseData);
    }
    fetchData();
  }, [])

  return (
    <View style={styles.application}>
      <View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>All Currency</Text>
          <Button title='Favorite' style={styles.btnFavorite} />
        </View>
        <View style={styles.line} />
        <TextInput placeholder='Search Currency' style={styles.searchBar} />
        <View style={styles.line} />
        <View>
          {/* Items */}
          <FlatList
            keyExtractor={(item) => item.id}
            data={data}
            renderItem={({ item }) => (
              <CurrencyLayout
                coinImage={item.image}
                coinName={item.name}
                coinShortName={item.symbol}
                coinCurrentPrice={item.current_price}
                priceChangePercentage={item.price_change_percentage_7d_in_currency}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
};



// Stling the UI
const styles = StyleSheet.create({
  application: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: "black",
    paddingBottom: 55

  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    paddingHorizontal: 10,
    paddingTop: 10,
    color: "white",
    fontWeight: 'bold',
    borderRadius: 50
  },
  line: {
    height: 5,
    backgroundColor: "#fff",
    margin: 5,
  },
  searchBar: {
    padding: 10,
    fontSize: 15,
    margin: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    borderColor: 'red',
    color: 'black',
    height: 35,
    borderRadius: 15
  },
  btnFavorite: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default App;