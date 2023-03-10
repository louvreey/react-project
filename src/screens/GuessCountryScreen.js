import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { React, useEffect, useState } from 'react'
import { countryList, objectImageList, objectNameList } from '../../data/Data'

const GuessCountryScreen = () => {
    const [answer, setAnswer] = useState ('')
    const [index, setIndex] = useState()

    const randomIndex = () => {
        const pickRandomIndex = Math.floor(Math.random) * countryList.length
        setIndex(pickRandomIndex)
    }

    useEffect(() => {
        randomIndex()
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ textDecorationLine: 'underline', fontSize: 28, fontFamily: 'serif', marginBottom: 16 }}>
                Tebak Negara
            </Text>
            <Image
                style={{
                    width: 250,
                    height: 250,
                    borderRadius: 10,
                }}
                source={{
                    uri: objectImageList[index]
                }}
            />
            <View style={{
                margin: 8,
                backgroundColor: `lavender`,
                padding: 4,
                borderWidth: 1
            }}>
                <Text style={{ fontSize: 18 }}>
                    {objectNameList[index]}
                </Text>
            </View>
            <View style={{ flexDirection: 'row', margin: 8 }}>
                <TextInput style={{ borderWidth: 1, width: '50%' }} onChangeText={(text) => setAnswer=(text)} />
                <TouchableOpacity style={{
                    borderWidth: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    padding: 8,
                    marginLeft: 8,
                    marginBottom: 8,
                    marginTop: 8,
                    backgroundColor: 'skyblue'
                }} >
                    <Text style={{ fontSize: 18 }}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
            <Text>{answer}</Text>
        </View>
    )
}
export default GuessCountryScreen