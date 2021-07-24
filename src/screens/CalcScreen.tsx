import React from 'react'
import { View, Text } from 'react-native';
import { Button } from '../components/Button';
import { useCalculator } from '../hooks/useCalculator';
import { styles } from '../styles/StylesApp';

export const CalcScreen = () => {
   
    const {
        numberBox,
        lastNumber,
        clearBox,
        positiveNegative,
        handleDelete,
        divide,
        buildNumber,
        multiplicar,
        restar, sumar,
        calcular
    } = useCalculator();


    return (
        <View style={styles.container}>
            
            <Text style={styles.lastResult}>
                { (lastNumber !== '0') ? lastNumber  : '' }
            </Text>

            <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit >
                {numberBox}
            </Text>

        <View style={styles.row}>
            <Button text="C" color="#B9B9B9" action={clearBox} />
            <Button text="+/-" color="#B9B9B9" action={positiveNegative} />
            <Button text="DEL" color="#B9B9B9" action={handleDelete}/>
            <Button text="/" color="#FF9427" action={divide}/>
        </View>
        <View style={styles.row}>
            <Button text="7" action={buildNumber}/>
            <Button text="8"  action={buildNumber}/>
            <Button text="9" action={buildNumber}/>
            <Button text="X" color="#FF9427" action={multiplicar}/>
        </View>
        <View style={styles.row}>
            <Button text="4" action={buildNumber}/>
            <Button text="5"  action={buildNumber}/>
            <Button text="6" action={buildNumber}/>
            <Button text="-" color="#FF9427" action={restar}/>
        </View>
        <View style={styles.row}>
            <Button text="1" action={buildNumber} />
            <Button text="2" action={buildNumber} />
            <Button text="3" action={buildNumber} />
            <Button text="+" color="#FF9427" action={sumar}/>
        </View>
        <View style={styles.row}>
            <Button text="0" width action={buildNumber}/>
            <Button text="."  action={buildNumber}/>
            <Button text="=" color="#FF9427" action={calcular}/>
        </View>

        </View>
    )
}
