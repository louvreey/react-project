import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import {Feed} from './InstagramComponent';

const InstagramHomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontFamily: 'StyleScript-Regular',
            fontSize: 40,
            marginStart: 16,
          }}>
          Instagram
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginStart: 8,
          }}>
          <View style={{margin: 8}}>
            <Icon name="plus-square-o" type="font-awesome" size={26} />
          </View>
        </View>
      </View>
      {/* <ScrollView>
        <Feed
          profile={require('../../assets/images/profilePicture!.png')}
          username="Chelsea"
          post={{uri: 'https://images4.alphacoders.com/292/292026.jpg'}}
        />
        <Feed
          profile={require('../../assets/images/profilePicture2.png')}
          username="Angelina"
          post={{uri: 'https://wallpaperaccess.com/full/496881.jpg'}}
        />
        <Feed
          profile={require('../../assets/images/profilePicture3.png')}
          username="Chandra"
          post={{uri: 'https://images5.alphacoders.com/316/316297.jpg'}}
        />
      </ScrollView> */}
    </View>
  );
};

export default InstagramHomeScreen;
