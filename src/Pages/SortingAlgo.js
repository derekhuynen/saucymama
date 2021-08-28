import React, { useState} from "react";
import '../CSS/algo.css'
import bblSort from '../Algos/Bubble'
import Selection from '../Algos/Selection'

const randomArray = (size) => {
    return shuffleArray(Array.from(Array(size + 1).keys()).slice(1))
}

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


export default function SortingAlgo() {

    const arrLength = 25;
    const [arr, setArr] = useState({arr: randomArray(arrLength), front: 0, middle: 0, end: 0});



    const displayBox = (number) => {
        const newHeight = number * 20;

        if (number === arr.end) {
            return (
                <div className={"bar"}
                     style={{height: newHeight, marginTop: 500 - newHeight, backgroundColor: 'orange'}}>
                    <h4>{number}</h4>
                </div>
            )
        } else if (number === arr.middle) {
            return (
                <div className={"bar"}
                     style={{height: newHeight, marginTop: 500 - newHeight, backgroundColor: 'yellow'}}>
                    <h4>{number}</h4>
                </div>
            )
        } else if (number === arr.front) {
            return (
                <div className={"bar"}
                     style={{height: newHeight, marginTop: 500 - newHeight, backgroundColor: 'green'}}>
                    <h4>{number}</h4>
                </div>
            )
        } else {
            return (
                <div className={"bar"} style={{height: newHeight, marginTop: 500 - newHeight}}>
                    <h4>{number}</h4>
                </div>
            )
        }
    }

    return (
        <div className={"menuContainer"}>
            <div className={"sortingBox"}>
                {arr.arr.map((num) => {
                    return displayBox(num)
                })}
            </div>
            <button onClick={() => {
                setArr(prevState => ({
                    ...prevState,
                    arr: randomArray(arrLength),
                    front: 0,
                    middle: 0,
                    end: 0
                }));
                bblSort(arr.arr, setArr)
            }}>Bubble
            </button>
            <button onClick={() => {

                const newArray = randomArray(25)
                console.log(newArray)
                setArr({arr: [...newArray], front: 0,middle:0,  end: 0})
                Selection(arr.arr, setArr);
            }}>Selection
            </button>
        </div>

    )
}

