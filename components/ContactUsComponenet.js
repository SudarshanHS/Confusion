import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { DISHES } from '../shared/dishes'
import { Card } from 'react-native-elements';


class ContactUs extends Component {

 render() {

        return (
            <Card title='Contact Information'>
                <View style={{ margin: 10 }}>
                    <Text  > 121, Clear Water Bay Road</Text>
                    <Text  > Clear Water Bay, Kowloon</Text>
                    <Text  > HONG KONG</Text>
                    <Text  > Tel: +852 1212121212</Text>
                    <Text  > confusion@food.net</Text>
                </View>
            </Card>
        );
    }
}


export default ContactUs;