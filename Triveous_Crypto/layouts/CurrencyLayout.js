import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";

const saveToFaviroate = (id) => {
    console.log(id)
}


const CurrencyLayout = ({ id, coinImage, coinName, coinShortName, coinCurrentPrice, priceChangePercentage }) => {
    const priceChangePercentageColor = priceChangePercentage > 0 ? '#34C759' : '#FF3B30';


    return (
        <TouchableOpacity>
            <View style={styles.line} />
            <View style={styles.itemWrapper}>
                <View style={styles.leftItem}>
                    <Image source={{ uri: coinImage }} style={styles.currencyIcon} />
                    <View style={styles.nameWrapper}>
                        <Text style={styles.currencyName}>{coinName}</Text>
                        <Text style={styles.currencyShortName}>{coinShortName.toUpperCase()}</Text>
                    </View>
                </View>

                <View style={styles.RightItem}>
                    <View style={styles.priceWrapper}>
                        <Text style={styles.currentPrice}>${coinCurrentPrice.toLocaleString('en-US', { currency: 'USD' })}</Text>
                        <Text style={styles.priceChangePercentage, { color: priceChangePercentageColor }}>{priceChangePercentage.toFixed(2)}%</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>saveToFaviroate(id)}>
                            <Image source={require('../assets/fav.png')} style={styles.btnFav} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.line} />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    itemWrapper: {
        padding: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    currencyIcon: {
        height: 55,
        width: 55,
    },
    btnFav: {
        height: 30,
        width: 30,
    },
    line: {
        height: 1,
        backgroundColor: "gray",

    },
    nameWrapper: {
        margin: 10,
    },
    leftItem: {
        flexDirection: "row",
        alignItems: "center",

    },
    RightItem: {
        flexDirection: "row",
        alignItems: "center",
    },
    priceWrapper: {
        marginEnd: 10,
        alignItems: "flex-end"
    },
    currencyName: {
        fontSize: 20,
        color: 'white',
    },
    currencyShortName: {
        marginTop: 5,
        fontSize: 15,
        color: 'gray',
    },
    currentPrice: {
        fontSize: 20,
        color: 'white',
    },
    priceChangePercentage: {
        marginTop: 5,
        fontSize: 15,
        fontWeight: "bold",
    },

});
export default CurrencyLayout