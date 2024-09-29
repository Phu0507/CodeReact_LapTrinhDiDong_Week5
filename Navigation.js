import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <View style={{ flex: 1 }}>
        <Image style={styles.image} source={require('./assets/vs_blue.jpg')} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.textDT}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Image
              style={styles.imageStar}
              source={require('./assets/star.png')}
            />
            <Image
              style={styles.imageStar}
              source={require('./assets/star.png')}
            />
            <Image
              style={styles.imageStar}
              source={require('./assets/star.png')}
            />
            <Image
              style={styles.imageStar}
              source={require('./assets/star.png')}
            />
            <Image
              style={styles.imageStar}
              source={require('./assets/star.png')}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.textDG}>(Xem 828 đánh giá)</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}> 
          <View style={{ flex: 1, marginTop:-10 }}>
            <Text style={styles.textGia}>1.790.000 đ</Text>
          </View>
          <View style={{ flex: 1, marginTop:-5 }}>
            <Text style={styles.price_discount}>1.790.000 đ</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}> 
          <View style={{ flex: 3 }}>
            <Text style={styles.textHT}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          </View>
          <View style={{ flex: 1}}>
            <Image
              style={styles.imageGroup}
              source={require('./assets/Group_1.png')}
            />
          </View>
        </View>
        <View style={{ flex: 1, alignItems:'center'}}> 
          <TouchableOpacity  style={[styles.buttonMau, { backgroundColor: 'white' , flexDirection:'row'}]}>
            <Text >4 MÀU-CHỌN MÀU</Text>
            <Text style={{alignItems:'flex-end'}}>></Text>
          </TouchableOpacity>
        </View>
         <View style={{ flex: 1, alignItems:'center'}}> 
           <TouchableOpacity
            style={[styles.buttonMua, { backgroundColor: '#E53935' }]}>
            <Text style={[styles.buttonText,{color:'white'}]}>CHỌN MUA</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 350,
    width: 260,
    marginTop: '10%',
  },
  textDT: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 17.58,
    textAlign: 'left',
    marginTop: '10%',
  },
  imageStar: {
    width: 22,
    height: 20,
    top: 10,
  },
  textDG: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 17.58,
    top: 13,
    left: 10,
  },
  textGia: {
    fontSize: 20,
  },
  price_discount: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: 700,
    color: '#808080',
    textDecorationLine: 'line-through',
  },
  textHT: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 700,
    lineHeight: 17.58,
    textAlign: 'left',
    marginTop: '-10%',
    color:'red',

  },
   imageGroup: {
    width: 20,
    height: 20,
    left: -40,
    marginTop: '-33%',
  },
  buttonMau: {
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    borderRadius: 10,
    borderWidth:1,
    marginTop: '-15%',
  },
  buttonMua: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    width: 280,
    borderRadius: 10,
  },
});

export default HomeScreen;
