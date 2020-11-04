import React from 'react';
import {View, Text, StyleSheet, Picker, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Entypo';
import Product from '../components/Product';
const Home = (props) => {
  const [city, setCity] = React.useState('Karachi');
  return (
    <ScrollView style={styles.scroller}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image source={require('../images/1.png')} />
        </View>
        <View style={styles.pickerContainer}>
          <Picker style={styles.pickerStyle}>
            <Picker.Item
              label={'Karachi'}
              value={'Karachi'}
              style={styles.pickerItemStyle}
            />
            <Picker.Item
              label={'Islamabad'}
              value={'Islamabad'}
              style={styles.pickerItemStyle}
            />
            <Picker.Item
              label={'Peshawer'}
              value={'Peshawer'}
              style={styles.pickerItemStyle}
            />
          </Picker>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="magnifying-glass" size={30} />
        </View>
      </View>
      <View style={{paddingHorizontal: 20, marginTop: 50}}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}> Food that</Text>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>meets your needs</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 40}}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: '#f9dd7a',
            marginHorizontal: 15,
            borderRadius: 25,
            paddingVertical: 5,
            paddingHorizontal: 15,
          }}>
          <Image
            source={require('../images/5.png')}
            style={{height: 40, width: 40}}
          />
          <Text style={{fontWeight: 'bold', fontSize: 18, paddingLeft: 10}}>
            Burgers
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: '#f9dd7a',
            marginHorizontal: 15,
            borderRadius: 25,
            paddingVertical: 5,
            paddingHorizontal: 15,
          }}>
          <Image
            source={require('../images/10.png')}
            style={{height: 40, width: 40}}
          />
          <Text style={{fontWeight: 'bold', fontSize: 18, paddingLeft: 10}}>
            Rolls
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: '#f9dd7a',
            marginHorizontal: 15,
            borderRadius: 25,
            paddingVertical: 5,
            paddingHorizontal: 15,
          }}>
          <Image
            source={require('../images/7.png')}
            style={{height: 40, width: 40}}
          />
          <Text style={{fontWeight: 'bold', fontSize: 18, paddingLeft: 10}}>
            Salads
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: '#f9dd7a',
            marginHorizontal: 15,
            borderRadius: 25,
            paddingVertical: 5,
            paddingHorizontal: 15,
          }}>
          <Image
            source={require('../images/8.png')}
            style={{height: 40, width: 40}}
          />
          <Text style={{fontWeight: 'bold', fontSize: 18, paddingLeft: 10}}>
            Burrito
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: '#f9dd7a',
            marginHorizontal: 15,
            borderRadius: 25,
            paddingVertical: 5,
            paddingHorizontal: 15,
          }}>
          <Image
            source={require('../images/6.png')}
            style={{height: 40, width: 40}}
          />
          <Text style={{fontWeight: 'bold', fontSize: 18, paddingLeft: 10}}>
            Pizza
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          alignItems: 'center',
          marginHorizontal: 20,
          flexDirection: 'row',
          marginTop: 40,
        }}>
        <View style={{width: '50%'}}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}> New Products </Text>
        </View>
        <View style={{width: '50%', alignItems: 'flex-end'}}>
          <Icon name={'dots-three-horizontal'} size={25} color="#84885" />
        </View>
      </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 15,
            marginTop: 30,
            justifyContent:'center'
          }}>
          <Product
            image={require('../images/4.png')}
            title={'Smokehouse'}
            price={'12.99'}
            onPress={() => props.navigation.navigate('Detail')}
          />
          <Product
            image={require('../images/9.png')}
            title={'Honey Chilli'}
            price={'12.99'}
            marginTop={25}
            onPress={() => props.navigation.navigate('Detail')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 15,
            marginTop: 30,
            justifyContent:'center'
          }}>
          <Product
            image={require('../images/6.png')}
            title={'Adios Pizza'}
            price={'11.99'}
            // onPress={()=>props.navigation.navigate('detail')}
          />
          <Product
            image={require('../images/10.png')}
            title={'Burrito'}
            price={'10.99'}
            marginTop={25}
            // onPress={()=>props.navigation.navigate('detail')}
          />
        </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scroller: {
    backgroundColor: '#FFF',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginHorizontal: 20,
  },
  imgContainer: {
    width: '10%',
  },
  pickerContainer: {
    width: '80%',
    alignItems: 'center',
  },
  pickerStyle: {
    height: 50,
    width: 160,
  },
  pickerItemStyle: {
    fontWeight: 'bold',
  },
  iconContainer: {
    width: '10%',
  },
});
export default Home;
