import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';


import api from '../services/api';

export default function SpotList( {tech} ) {
    const [spots, setSpots] = useState([]);


    useEffect( () => {
        async function loadSpots() {
            const response = await api.get('/spots', {
                params: { tech } //see whats the difference between what I wrote and here and whats saved on MongoAtlas
            })
            //console.log(response.data);
            setSpots(response.data);
        }
        
        loadSpots();
    }, []);
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Empresas que usam <Text style={styles.bold}>{tech}</Text> </Text>
            <FlatList
                style={styles.list}
                data={spots}
                keyExtractor={spot => spot._id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={ ( {item}) => (
                    <View>
                        <Image style={styles.thumbnail} source={{ uri:item.thumbnail_url }}/>
                        <Text style={styles.company}>{item.company}</Text>
                        <Text style={styles.price}>{item.price ? `R$${item.price}/dia` : `GRATUITO`}</Text>
                        <TouchableOpacity onPress={() => {}} style={styles.button} >
                            <Text styles={styles.buttonText}>Solicitar reserva</Text>
                        </TouchableOpacity>
                    </View>
                )}

            />
            {/* <FlatList  
                style={styles.list}
                data={spots}
                keyExtractor={spot => spot._id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View styles={styles.listItem}> 
                        <Image style={styles.thumbnail} source={{ uri : thumbnail_url }} />
                        <Text style={styles.company}>{item.company}</Text>
                        <Text style={styles.price}>{item.price ? `R${item.price}/dia` : `GRATUITO`}</Text>
                        <TouchableOpacity onPress={ () => {} }>
                            <Text style={styles.buttomText}>Solicitar reserva</Text>
                        </TouchableOpacity>

                    </View>
                )}
            /> */}
        </View>
    )
}


const styles = StyleSheet.create({
    
    container: {
        marginTop: 30,
    },

    title: {
        fontSize: 20,
        color: '#444',
        paddingHorizontal: 20,
        marginBottom: 15,
    },

    bold: { 
        fontWeight: 'bold',
    },

});