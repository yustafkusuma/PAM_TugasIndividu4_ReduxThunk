import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/EvilIcons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

const Home = ({ navigation, route }) => {
  const [daerahAsal, setDaerahAsal] = useState(null);
  const [daerahTujuan, setDaerahTujuan] = useState(null);
  const [tgl, setTgl] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menuView}>
        <View style={styles.iconView}>
          <Icon name="menu" size={35} color="#FFFFFF" />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("UserPage"); // Navigasi ke halaman UserPage
            }}
          >
            <Icon2 name="user" size={35} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        <View style={styles.textLogoView}>
          <Text
            style={{
              fontSize: 35,
              color: "#FFFFFF",
              fontWeight: "bold",
            }}
          >
            Hiling.Id
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text
          style={{
            paddingTop: "40%",
            fontSize: 15,
            color: "#2E3840",
          }}
        >
          &copy;Yustaf Kusuma Abi Al Yasid - 120140178
        </Text>
      </View>
      <View style={styles.floatView}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Lokasi Keberangkatan</Text>
          <View style={styles.input}>
            <View style={styles.icon}>
              <Icon name="airplane-takeoff" size={35} color="#90B77D" />
            </View>
            <TextInput
              placeholder="Kode Asal"
              value={daerahAsal}
              style={{ width: "100%" }}
              onChangeText={(value) => {
                setDaerahAsal(value);
              }}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Lokasi Tujuan</Text>
          <View style={styles.input}>
            <View style={styles.icon}>
              <Icon name="airplane-landing" size={35} color="#90B77D" />
            </View>
            <TextInput
              placeholder="Kode Tujuan"
              value={daerahTujuan}
              style={{ width: "100%" }}
              onChangeText={(value) => {
                setDaerahTujuan(value);
              }}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Tanggal Keberangkatan</Text>
          <View style={styles.input}>
            <View style={styles.icon}>
              <Icon2 name="calendar" size={35} color="#90B77D" />
            </View>
            <TextInput
              placeholder="dd-mm-yyyy"
              value={tgl}
              style={{ width: "100%" }}
              onChangeText={(value) => {
                setTgl(value);
              }}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("Detail", {
              daerahAsal,
              daerahTujuan,
              tgl,
            });

            setDaerahAsal("");
            setDaerahTujuan("");
            setTgl("");
          }}
        >
          <Text style={{ fontWeight: "bold", color: "#FFFFFF", fontSize: 15 }}>
            Cari
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  menuView: {
    backgroundColor: "#90B77D",
    width: "100%",
    height: "65%",
    shadowColor: "#2E3840",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  iconView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 25,
  },
  textLogoView: {
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 1,
    width: "100%",
    height: "30%",
    margin: "5%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  floatView: {
    flex: 1,
    width: "85%",
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#2E3840",
    shadowOffset: {
      width: 0,
      height: 10,
    },

    elevation: 8,
    position: "absolute",
    padding: "8%",
  },
  inputContainer: {
    width: "100%",
  },
  inputLabel: {
    fontSize: 18,
    paddingBottom: 5,
    fontWeight: "600",
  },
  input: {
    width: "100%",
    flexDirection: "row",
    borderColor: "#90B77D",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    padding: 8,
  },
  icon: {
    marginRight: 10,
  },
  btn: {
    backgroundColor: "#ed7d31",
    width: "100%",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 5,
  },
});

export default Home;
