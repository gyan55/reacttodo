import React, { useState } from 'react'
import Img from "../images/checklist.png";

function Todo() {
  
  const [inputData,setInputData]= useState('');
  const [items,setItems]=useState([]);

  const addItem = ()=>{

    if(!inputData){

    }
    else{
      setItems([...items,inputData]);
    setInputData('');
    }    
    
  }
//delete the item
  const deleteItem = (id) => {
  const updateditems = items.filter((elem,ind)=>{
  return ind !== id;
  });
  setItems(updateditems);
  }

  // delete all

 

  return (

       <div className="main-div">
        <div className='child-div'>
            <figure>
                <img src={Img} alt="panda" ></img>
                <figcaption>What's on your list for Today</figcaption>
            </figure>

            {/*input box to write the task */}

            <div className='addItems'>
              <input type="text" placeholder="✍️ Add your tasks..." value= {inputData} onChange={(event)=>setInputData(event.target.value)}></input>
              <i className="fa solid fa-circle-plus" title='add item' onClick={addItem} ></i>
            </div>

            {/*list of all the tasks */}

           {/*items.map must be in curly brackets*/}

            <div className="showItems">
               {
                items.map((elem,ind) => {
             return( 
                <div className='eachItem' key={ind}>
                <h3>{elem}</h3>
                <i className="fa fa-regular fa-trash" add-btn onClick ={ ()=> deleteItem(ind)}></i>
                </div>
                   )
              
            })
}
              
             </div>
            
            { /*clear all notes.*/}

            <div className='showItems'>
              <button className='btn effect04'  data-sm-link-text ="Remove All" onClick={() => setItems([])}><span> Check List</span></button>
            </div>

        </div>
    </div>
  )
}

export default Todo;