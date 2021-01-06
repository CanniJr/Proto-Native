import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Todo(props) {
    return (
        <View>
            <Text>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

