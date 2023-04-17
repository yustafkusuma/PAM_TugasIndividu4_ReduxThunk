import { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Maskapai } from "../src/Data";
import { MaterialIcons } from "@expo/vector-icons";

export default class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      maskapai_id: id,
      bandara_kode_keberangkatan: asal,
      bandara_kode_tujuan: tujuan,
    } = this.props.item.item;
    const filteredMaskapai = Maskapai.filter((item) => item.maskapai_id === id);
    return (
      <View style={styles.card}>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
            padding: 10,
          }}
        >
          <Text style={{ paddingHorizontal: 20, fontWeight: "bold" }}>
            ({asal})
          </Text>
          <Text>-</Text>
          <Text style={{ paddingHorizontal: 20, fontWeight: "bold" }}>
            ({tujuan})
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            padding: 20,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 25,
          }}
        >
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Image source={require('../src/image/flight.png')} style={{ width: 30, height: 30 ,marginRight: 15}} />
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              {filteredMaskapai[0].maskapai_name}
            </Text>
          </View>
          <Text style={{ color: "blue", fontSize: 16 }}>
            {this.props.tanggal}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    margin: 10,
    alignContent: "center",
    shadowColor: "#171717",
    borderRadius: 10,
    elevation: 5,
  },
});