import React, { Component }  from 'react';
import { View, Text, Image, SafeAreaView, TextInput, Button, StatusBar, StyleSheet} from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            asal: "",
            tujuan: "",
            tanggal: "",
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.screen}>
                <StatusBar />
                <View style={styles.header}>
                    <View style={styles.textHeader}>
                        <Image source={require('../src/image/bar.png')} style={{ width: 30, height: 30, marginRight: 100 }} />
                        <Text style={{ color: 'white', marginTop: 40, fontSize: 30, fontWeight: 'bold' }}>
                            Plane Scheduler
                        </Text>
                        <Image source={require('../src/image/person.png')} style={{ width: 30, height: 30, marginLeft: 100 }} />
                    </View>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.textFooter}>
                        Tugas 3 PAM - Yustaf Kusuma Abi Al Yasid - 120140178
                    </Text>
                </View>
                <View style={styles.form}>
                    <View>
                        <Text style={styles.label}>Lokasi Keberangkatan</Text>
                        <View style={styles.field}>
                            <Image source={require('../src/image/take.png')} style={styles.imageField} />
                            <TextInput
                                style={{ width: 200, paddingRight: 15 }}
                                value={this.state.asal}
                                onChangeText={(value) => this.setState({ asal: value })}
                                placeholder={"Input Lokasi Keberangkatan"}
                            />
                        </View>

                        <Text style={styles.label}>Lokasi Tujuan</Text>
                        <View style={styles.field}>
                            <Image source={require('../src/image/land.png')} style={styles.imageField} />
                            <TextInput
                                style={{ width: 200, paddingRight: 15 }}
                                value={this.state.tujuan}
                                onChangeText={(value) => this.setState({ tujuan: value })}
                                placeholder={"Input Lokasi Tujuan"}
                            />
                        </View>

                        <Text style={styles.label}>Tanggal Keberangkatan</Text>
                        <View style={styles.field}>
                            <Image source={require('../src/image/date.png')} style={styles.imageField} />
                            <TextInput
                                style={{ width: 200, paddingRight: 15 }}
                                value={this.state.tanggal}
                                onChangeText={(value) => this.setState({ tanggal: value })}
                                placeholder={"Tanggal (yyyy-mm-dd)"}
                            />
                        </View>

                        <View style={{ marginHorizontal: 25, marginVertical: 20, borderRadius: 4, padding: 5 }}>
                            <Button disabled={
                                this.state.asal === "" ||
                                this.state.tanggal === "" ||
                                this.state.tujuan === ""
                            }
                                onPress={() => this.props.navigation.navigate('Result', this.state)}
                                title="Cari"
                                color={"#F9D949"} />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#f2f2f2',
        flex: 1
    },
    header: {
        backgroundColor: '#3C486B',
        minHeight: 450,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    textHeader: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
        margin: 20
    },
    form: {
        backgroundColor: 'white',
        width: 300,
        height: 400,
        elevation: 4,
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 150,
        borderRadius: 15,
    },
    label: {
        marginTop: 10,
        marginLeft: 30,
        fontWeight: 'bold',
    },
    field: {
        borderWidth: 1,
        marginHorizontal: 30,
        marginVertical: 10,
        borderRadius: 3,
        padding: 7,
        flexDirection: 'row',
    },
    imageField: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    textFooter: {
        alignSelf: 'center',
        marginTop: 260,
        color: 'grey',
        fontWeight: 'bold'
    },
    footer: {
        backgroundColor: '#f2f2f2',
    },
});