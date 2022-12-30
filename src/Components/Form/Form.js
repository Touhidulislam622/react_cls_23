import React ,{ useState} from 'react';
import style from './Form.module.css' ;

export default function Form() {
    
    const [ name , setName] = useState("")
    const [ email , setEmail] = useState("")


    const handleNameChange = (e) => {
        setName( e.target.value);
        

    };
    const handleEmailChange = (e) => {
        setEmail( e.target.value);

    };
    const handleSubmit = (e) => {
        console.log( "form submit!");
       
        let userInfo = {
            name: name,
            email: email
        };
        console.log(userInfo);
        e.preventDefault();    // ******  e.preventDefault(); ?? //


    };

  return (
    <div> 
    <form action="" onSubmit={ handleSubmit}>
        <div className = {style.class}>
        <label htmlFor="name">name: </label>
        <input type="text" name="name"  value={name} required onChange={handleNameChange} />

        <label htmlFor="email">email: </label>
        <input type="email" name="email" id="email" value={email} required onChange={handleEmailChange} />

        <button type= "submit" > Submit</button>
        </div>
    </form>
    </div>
  )
}
