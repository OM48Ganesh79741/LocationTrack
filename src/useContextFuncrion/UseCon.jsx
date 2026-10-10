import React, { useRef, useState } from 'react'

const UseCon = () => {
  let [arr, setarr] = useState([]);
  let [state, setstate] = useState(
    {
      name: "",
      lname: "",
      id: ""
    }
  );
  let { name, lname } = state;


  // for targetting the  elemt 
  let ref=useRef();

  function handlechange(e) {
    console.log(e.target);

    let { name, value } = e.target;

    setstate({ ...state, [name]: value, id: Date.now() })

  }
  console.log(state);

  const update = (xc) => {
    console.log(xc, "updated");

    // same value
     const fil=  arr.filter((x)=>
    {
      return x.id==xc;
    })


     const diff=  arr.filter((x)=>
    {
      return x.id!=xc;
    })

    if(diff.length>0)
    {
      setarr(diff);
    }
  }

  const deleteq = (xc) => {
    console.log(xc, "delete");

  const fil=  arr.filter((x)=>
    {
      return x.id==xc;
    })
    if(fil.length>0)
    {
      setarr(fil)
    }
    

  }



  const save = () => {
    console.log(save);
    setarr([...arr, state]);
  }
  console.log(arr);

  return (
    <div>
      <p>text</p>
      <input placeholder='enter the name' name='name' value={name} onChange={handlechange} />
      <input placeholder='enter the lname' name='lname' value={lname} onChange={handlechange} />
      <button onClick={save}>save </button>

      <h1> student List</h1>

      {
        arr.map((x) => {
          return (
            <div>
              <p>{x.name}</p>
              <button onClick={() => { update(x.id) }}>update</button>
              <button onClick={() => { deleteq(x.id) }}>delete</button>
            </div>
          )
        })
      }

    </div>
  )
}

export default UseCon
