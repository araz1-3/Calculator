import React ,{useState} from 'react';
import {Component,Main,Button,Previous,Current} from "./styled";


const Calculator = () => {
    const [state , setState]=useState('')
    const [previous , setPrevious]=useState('')
    const [operation , setOperation]=useState('')


    const appearance =(e)=>{
        const value = e.target.getAttribute('data')
        if(value === '.' && state.includes('.')) return;
        if(value === '.' && state === '' ) return setState('0.');
        if(value === '0' && state === '0'){
            return setState('0')
        } else if(value !== '0' && state === '0' && value !== '.'){
            return setState(value)
        }

        setState(state + value)
    }

    const deleteHandler =()=>{
        setState(String(state.slice(0,-1)))
    }

    const ACHandler=()=>{
        setPrevious('')
        setOperation('')
        setState('')
    }

    const ChooseOperation =(e)=>{
        if (state === '') return
        if (previous !== ''){
            let value = compute()
            setPrevious(value)
        }else {
            setPrevious(state)
        }
        setState('')
        setOperation(e.target.getAttribute('data'))
    }

    const  compute =()=>{
        let previousNumber = parseFloat(previous)
        let currentNumber = parseFloat(state)
        let result
         if (isNaN(previousNumber) || isNaN(currentNumber)) return
        switch (operation){
            case '+':
                result = previousNumber + currentNumber
                break
            case '÷':
                result = previousNumber / currentNumber
                break
            case '×':
                result = previousNumber * currentNumber
                break
            case '-':
                result = previousNumber - currentNumber
                break
            default:
                return;
        }

         return result
    }
    const equals =()=>{
        let value = compute()
        if (value === undefined || value === null) return
        setState(value)
        setPrevious('')
        setOperation('')
    }

    return (
        <Component>
            <Main>
                <Previous>{previous} {operation}</Previous>
                <Current>{state}</Current>
            </Main>
                <Button onClick={ACHandler} gridSpan={2}>AC</Button>
                <Button onClick={deleteHandler}>DEL</Button>
                <Button data={'÷'} onClick={ChooseOperation} operation>÷</Button>
                <Button data={'7'} onClick={appearance} >7</Button>
                <Button data={'8'} onClick={appearance} >8</Button>
                <Button data={'9'} onClick={appearance} >9</Button>
                <Button data={'×'} onClick={ChooseOperation} operation>×</Button>
                <Button data={'4'} onClick={appearance} >4</Button>
                <Button data={'5'} onClick={appearance} >5</Button>
                <Button data={'6'} onClick={appearance} >6</Button>
                <Button data={'+'} onClick={ChooseOperation} operation>+</Button>
                <Button data={'1'} onClick={appearance} >1</Button>
                <Button data={'2'} onClick={appearance} >2</Button>
                <Button data={'3'} onClick={appearance} >3</Button>
                <Button data={'-'} onClick={ChooseOperation} operation>-</Button>
                <Button data={'0'} onClick={appearance} gridSpan={2}>0</Button>
                <Button data={'.'} onClick={appearance}>.</Button>
                <Button data={'='} onClick={equals} operation>=</Button>
        </Component>
    );
};

export default Calculator;