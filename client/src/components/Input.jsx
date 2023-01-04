import React from 'react';

async function inputValue(){
    const input = document.getElementById('name');
    const data = document.getElementById('data');
    data.innerText = "Please await...";
    let countRepo = 0;
    try {
        const URL = `https://api.github.com/users/${input.value}/repos`;
        const responst = await fetch(URL);
        const inputData = await responst.json();

        for(let item of inputData){
            if(!item.private) countRepo++;
        }

        data.innerText = `There are ${countRepo} Repository opens`;
        data.style.color = "green";

    } catch (error) {
        console.log(error);
        if(!input.value){
            data.innerHTML = "Please enter a name";
        } else{
            data.innerText = `User ${input.value} does not exist in the system`;
        }

        data.style.color = "red";
    }
}

function Input(){
    return (
        <>
            <label>Name: <input id='name' type="text"/></label>
            <button onClick={(e) => {inputValue();}}><b>Submit</b></button>
            <p id='data'></p>
        </>
    );
}

export default Input;