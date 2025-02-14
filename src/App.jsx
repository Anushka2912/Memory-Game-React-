import { useState } from 'react';
import Form from './components/Form';
import MemoryCard from './components/MemoryCard';
import './index.css';

export default function App() {
    const [isGameOn, setIsGameOn] = useState(false)
    const [emojisData, setEmojisData] = useState([]);

    console.log(emojisData);

    async function startGame(e) {
        e.preventDefault()
        try {
            const response = await fetch("https://emojihub.yurace.pro/api/all/category/animals-and-nature");
            if(response.ok) {
                const data = await response.json();
                const dataSlice = await getDataSlice(data);
                const emojisArray = await getEmojisArray(dataSlice);
                console.log({emojisArray});
                
                setEmojisData(emojisArray);
                setIsGameOn(true);
            }
            else {
                throw new Error("Error occured while fetching emoji categories");
            }
        }
        catch(err) {
            console.log(err);
        }
    }
    
    async function getDataSlice(data) {
        const randomIndices = getRandomIndices(data);

        const dataSlice = randomIndices.reduce((array, index) => {
            array.push(data[index]);
            return array;
        }, [])

        return dataSlice;
    }

    function getRandomIndices(data) {
        const randomIndicesArray = [];

        for(let i = 0; i < 5; i++) {
            const randomNum = Math.floor(Math.random() * data.length);
            if(!randomIndicesArray.includes(randomNum)) {
                randomIndicesArray.push(randomNum);
            }
            else {
                i--
            }
        }

        return randomIndicesArray;
    }

    function getEmojisArray(data) {
        const pairedEmojisArray = [...data, ...data];

        for(let i = pairedEmojisArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = pairedEmojisArray[i];
            pairedEmojisArray[i] = pairedEmojisArray[j];
            pairedEmojisArray[j] = temp;
        }

        return pairedEmojisArray;
    }

    function turnCard() {
        
    }
    
    return (
        <main>
            <h1>Memory</h1>
            {!isGameOn && <Form handleSubmit={startGame} />}
            {isGameOn && <MemoryCard handleClick={turnCard} data={emojisData} />}
        </main>
    )
}