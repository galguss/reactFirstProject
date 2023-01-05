import React from 'react';


function Input({callbackRepo}){
    async function inputValue(){
        const input = document.getElementById('name');
        const data = document.getElementById('data');
        data.innerText = "Please await...";
        
        try {
            if(!input.value) throw new Error(); 
            const URL = `https://api.github.com/users/${input.value}/repos`;
            const responst = await fetch(URL);
            const inputData = await responst.json();
            data.innerText = `There are ${inputData.length} Repository opens`;
            data.style.color = "green";
            callbackRepo(inputData);
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

    return (
        <>
            <h2>טופס חיפוש שם משתמש בגיטהאב</h2>
            <label>Name for Github Users: <input id='name' type="text"/></label>
            <button onClick={(e) => {e.preventDefault(); inputValue();}}><b>Submit</b></button>
            <p id='data'></p>
        </>
    );
}

export default Input;