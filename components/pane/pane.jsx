import {View, StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
export function UpperPane() {
    return (
    <SafeAreaProvider>
        <SafeAreaView style={{flex: 1.5, backgroundColor:'#DEB99D', flexDirection:'row', justifyContent:'center', alignItems: 'flex-start'}}>   
            <View style={styles.box1}>
            </View>
            <View style={styles.box2}>
            </View>
            <View style={styles.box3}>
            </View>
            <View style={styles.box4}>
            </View>
            <View style={styles.box5}>
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
    )

}

export function BottomPane() {
    return (
    <SafeAreaProvider>
        <SafeAreaView style={{flex: 1.5, backgroundColor:'#DEB99D', flexDirection:'row', justifyContent:'center', alignItems: 'flex-end'}}>   
            <View style={styles.box5}>
            </View>
            <View style={styles.box4}>
            </View>
            <View style={styles.box3}>
            </View>
            <View style={styles.box2}>
            </View>
            <View style={styles.box1}>
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
    )

}

const styles = StyleSheet.create({
box1: {
    backgroundColor: '#DEB99D',
    height: '50%',
    width: '20%',
    flex: 1,

},
box2: {
    backgroundColor: '#ca9382',
    height: '50%',
    width: '20%',
    flex: 1,

},
box3: {
    backgroundColor: '#b56e66',
    height: '50%',
    width: '20%',
    flex: 1,

},
box4: {
    backgroundColor: '#a0484b',
    height: '50%',
    width: '20%',
    flex: 1,

},
box5: {
    backgroundColor: '#8C2230',
    height: '50%',
    width: '20%',
    flex: 1,

},
boxText: {
    textAlign: 'center',
    fontSize: 23,
    paddingTop: '30%'
}
})