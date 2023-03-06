import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// const SecondScreen = () => {
//   const openAlert = game => {
//     if (game === 'mobileLegends') {
//       alert('You chose Mobile Legends!');
//     } else if (game === 'pubg') {
//       alert('You chose PUBG!');
//     }
//   };

//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: 'lavender',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}>
//       <View
//         style={{
//           backgroundColor: 'skyblue',
//           padding: 5,
//           margin: 10,
//           borderWidth: 3,
//           borderColor: 'red',
//           borderStyle: 'dashed',
//           borderRadius: 1,
//         }}>
//         <Text style={{alignItems: 'center', color: 'black'}}>
//           Mobile Legends
//         </Text>

//         <Text>
//           <Text
//             style={{
//               color: 'navy',
//               textDecorationLine: 'underline',
//               textAlign: 'center',
//             }}>
//             Mobile Legends
//           </Text>
//           <Text>
//             is a multiplayer online battle arena (MOBA) game. The two opposing
//             teams fight to reach and destroy the enemy's base while defending
//             their own base for control of a path.
//           </Text>
//         </Text>
//       </View>
//       <View>
//         <TouchableOpacity
//           style={{
//             backgroundColor: 'white',
//             padding: 8,
//             margin: 8,
//             borderRadius: 50,
//             borderWidth: 2,
//           }}
//           onPress={() => openAlert('mobileLegends')}>
//           <Text style={{color: 'lightcoral'}}>Mobile Legends Button</Text>
//         </TouchableOpacity>
//       </View>

//       <View
//         style={{
//           backgroundColor: 'cornflowerblue',
//           margin: 10,
//           padding: 5,
//           borderWidth: 3,
//           borderColor: 'red',
//           borderStyle: 'dotted',
//           borderRadius: 1,
//         }}>
//         <Text style={{alignItems: 'center', color: 'black'}}>PUBG</Text>

//         <Text>
//           <Text style={{color: 'black', textDecorationLine: 'underline'}}>
//             PlayerUnknown's Battlegrounds
//           </Text>
//           <Text>
//             , better known as PUBG, is a multiplayer battle royale game in which
//             players drop onto an island and fight to be the last one left
//             standing.
//           </Text>
//         </Text>
//       </View>
//       <View>
//         <TouchableOpacity
//           style={{
//             backgroundColor: 'white',
//             padding: 8,
//             margin: 8,
//             borderRadius: 50,
//             borderWidth: 2,
//           }}
//           onPress={() => openAlert('pubg')}>
//           <Text style={{color: 'lightcoral'}}>PUBG Button</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

const ChallengeScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <Text style={{color: 'cadetblue', textDecorationLine: 'underline'}}>
          iOS
        </Text>
      </View>
      <View
        style={{
          borderStyle: 'dashed',
          borderWidth: 3,
          borderRadius: 8,
          borderColor: 'black',
          backgroundColor: 'skyblue',
          margin: 10,
          padding: 7
        }}>
        <Text>
          iOS (formerly iPhone OS) is a mobile operating system created and
          developed by <Text style={{color: 'pink'}}> Apple Inc. </Text>
          exclusively for its hardware. It is the operating system that powers
          many of the company's mobile devices, including the iPhone and iPod
          Touch.
        </Text>
      </View>
      <View>
        <Text style={{margin: 10}}>VS.</Text>
      </View>
      <View>
        <Text style={{color: 'green', textDecorationLine: 'underline'}}>
          Android
        </Text>
      </View>
      <View
        style={{
          borderStyle: 'dashed',
          borderRadius: 8,
          borderWidth: 3,
          borderColor: 'black',
          backgroundColor: 'skyblue',
          margin: 10,
          padding: 7
        }}>
        <Text>
          Android is a mobile operating system based on a modified version of
          the Linux kernel and other open source software, designed primarily
          for touchscreen mobile devices such as smartphones and tablets.
          Android is developed by a consortium of developers known as the
          <Text style={{color: 'purple'}}>Open Handset Alliance</Text> and
          commercially sponsored by{' '}
          <Text style={{color: 'cadetblue'}}>Google</Text>.
        </Text>
      </View>
    </View>
  );
};

export default ChallengeScreen;
