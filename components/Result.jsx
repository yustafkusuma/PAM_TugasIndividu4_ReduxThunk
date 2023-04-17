import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Jadwal } from '../src/Data';
import Item from './Item';

export default class Result extends Component {
    constructor(props) {
        super(props);
        var asal = this.props.route.params.asal
        var tujuan = this.props.route.params.tujuan
        var tanggal = this.props.route.params.tanggal
        this.state = {
            asal,
            tujuan,
            tanggal,
        };
        this.date = new Date(this.state.tanggal).toDateString() ?? "Invalid Date";
    }

    showFlight() {
        const filteredAsal = Jadwal.filter(
            (val) =>
                val.bandara_kode_keberangkatan === this.state.asal &&
                val.bandara_kode_tujuan === this.state.tujuan
        );
        return (
            <View>
                <FlatList
                    data={filteredAsal}
                    keyExtractor={(item, index) => index + item}
                    renderItem={(itemData) => (
                        <Item item={itemData} tanggal={this.date} />
                    )}
                    ListEmptyComponent={() => (
                        <View>
                            <Text
                                style={{
                                    padding: 50,
                                    width: 355,
                                    textAlign: "center",
                                    backgroundColor: "lightgrey",
                                    shadowColor: "#171717",
                                    borderRadius: 10,
                                    elevation: 5,
                                }}
                            >
                                Tidak Ada Jadwal Penerbangan yang Sesuai
                            </Text>
                        </View>
                    )}
                />
            </View>
        );
    }

    render() {
        return (
            <SafeAreaView style={styles.screen}>
                <StatusBar />
                <View style={styles.view1}>
                    <View style={styles.header}>
                        <View style={styles.textHeader}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home', this.state)}>
                                <Image source={require('../src/image/back.png')} style={{ width: 30, height: 30 }} />
                            </TouchableOpacity>
                            <View>
                                <Text style={{ color: 'white', marginTop: 40, fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginHorizontal: 100 }}>
                                    Plane Scheduler
                                </Text>
                                <Text style={{ color: 'white', marginTop: 5, fontSize: 15, textAlign: 'center' }}>
                                    Hasil Pencarian Jadwal Penerbangan
                                </Text>


                            </View>
                            <Image source={require('../src/image/person.png')} style={{ width: 30, height: 30 }} />
                        </View>
                    </View>
                </View>

                <View style={styles.view2}>
                    <View>

                        {this.date !== "Invalid Date" ?
                            (this.showFlight()) :
                            (
                                <View>
                                    <Text style={{
                                    padding: 50,
                                    width: 355,
                                    textAlign: "center",
                                    backgroundColor: "lightgrey",
                                    shadowColor: "#171717",
                                    borderRadius: 10,
                                    elevation: 3, }}>
                                        Invalid Date. Perhatikan format tanggal
                                    </Text>
                                </View>
                            )}
                    </View>
                </View>

                <View style={styles.view3}>
                    <View style={styles.footer}>
                        <Text style={styles.textFooter}>
                            Tugas 3 PAM - Yustaf Kusuma Abi Al Yasid - 120140178
                        </Text>
                    </View>
                </View>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    view1: {
        flex: 0.9,
    },
    view2: {
        flex: 3,
        zIndex: -1,
        marginTop: 10,
    },
    view3: {
        flex: 0.3,
    },
    screen: {
        backgroundColor: '#f2f2f2',
        flex: 1
    },
    header: {
        backgroundColor: '#3C486B',
        minHeight: 160,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    textHeader: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
        margin: 20
    },
    textFooter: {
        alignSelf: 'center',
        marginTop: 15,
        color: 'grey',
        fontWeight: 'bold'
    },
    footer: {
        backgroundColor: '#f2f2f2',
    },
});