import React ,{ useState} from 'react';
import style from './Form.module.css' ;

export default function Form() {

    const [user, setUser] = useState({name: "", email: "" })
    const {name, email} = user

    const handlChange = (e) => {
        setUser({ ...user, [e.target.name] : e.target.value });
    };

    const handleSubmit = (e) => {
        console.log( "form submit by PP!");
        console.log(user);
        e.preventDefault();    // ******  e.preventDefault(); ?? //


    };

  return (
    <div> 
    <form action="" onSubmit={ handleSubmit}>
        <div className = {style.class}>
        <label htmlFor="name">name: </label>
        <input type="text" name="name"  value={name} required onChange={handlChange} />

        <label htmlFor="email">email: </label>
        <input type="email" name="email" id="email" value={email} required onChange={handlChange} />

        <button type= "submit" > Submit</button>
        </div>
    </form>
    </div>
  )
}
