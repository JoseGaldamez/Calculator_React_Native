import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../styles/StylesApp'


interface IButtonProps{
    text: string;
    color?: string;
    width?: boolean;
    action: ( text:string ) => void;
}


export const Button = ( {text, color="#2D2D2D", width=false, action}: IButtonProps ) => {
    return (
        <TouchableOpacity onPress={ () => action(text)}>
            <View style={{
                ...styles.button, 
                backgroundColor: color,
                width: (width) ? 170 : 80
            }}>
                    <Text style={
                        {
                            ...styles.textButton,
                            color: (color === '#B9B9B9') ? 'black' : 'white'
                        }
                    }>
                        {text}
                    </Text>
            </View>
        </TouchableOpacity>
    )
}





