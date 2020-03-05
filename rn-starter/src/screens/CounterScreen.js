import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const COUNTER_INCREMENT = 1;
const ACTION_INCREASE = 'increase';
const ACTION_DECREASE = 'decrease';

const reducer = (state, action) => {
    // state === { count: number }
    // action === { type: ACTION_INCREASE || ACTION_DECREASE, payload: COUNTER_INCREMENT }

    switch (action.type) {
        case ACTION_INCREASE:
            return {...state, counter: state.counter + action.payload}
        case ACTION_DECREASE:
            return {...state, counter: state.counter - action.payload}
        default:
            return state;
    }
}

const CounterScreen = () =>{
    const [state, dispatch] = useReducer(reducer, { counter: 0 });
    
    return (
        <View>
            <Button title="Increase" onPress={() => {
                //Don`t do this!
                //counter++;
                dispatch({ type: ACTION_INCREASE, payload: COUNTER_INCREMENT});
            }}/>
            <Button title="Decrease" onPress={() => {
                dispatch({ type: ACTION_DECREASE, payload: COUNTER_INCREMENT});
            }}/>
            <Text>Current Count: {state.counter}</Text>
        </View>
    );
}

const styles= StyleSheet.create({});

export default CounterScreen;