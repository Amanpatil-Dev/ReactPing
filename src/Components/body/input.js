
import { useState } from "react";
import "./input.css"


function Input(props) {
  

    const [emailVal, setEmail] = useState("")
    const [isvalid,setisValid] = useState(true)
    const [Borderinit,BorderSet]=useState("#dee2e6")


    const Setvalue = (e) => {

        setEmail(e.target.value)
        console.log('this is',emailVal)

    }

    const Validate = () => {

        if (!emailVal) {
            setisValid(false)
            BorderSet("red")
        } else if (!emailVal.includes("@")) {
            setisValid(false)
            BorderSet("red")
        } else {
            setisValid(true)
            BorderSet("#dee2e6")
            props.onsuccess("You will be notified")


        }

        setEmail("")

    }
    
    return (
        <div className="inputs">
            <input style={{borderColor:Borderinit}} onChange={Setvalue} value={emailVal} type="email" placeholder="Your email address" />
            <p className={!isvalid ? " d-block text-danger " : "d-none" }  >Please Provide a valid Email Address</p>
            <button onClick={Validate} className="btn btn-primary ">Notify Me</button>
        </div>

    )
}

export default Input;