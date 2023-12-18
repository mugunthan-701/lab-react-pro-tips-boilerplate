import React, { useEffect, useState } from 'react'

function Registration() {
    const[field,setField]=useState({
        firstname:'',
        secondname:'',
        email:'',
        phoneNumber:''
    })
useEffect(()=>{
    setValidate(false)
},[field])
    const[submitted,setSubmitted]=useState(false)
    const[validate,setValidate] = useState(false)
    const handleSubmit = (e)=>{
        e.preventDefault()
        setSubmitted(true)
        if(field.firstname && field.secondname && field.email && field.phoneNumber){
            setValidate(true)
        }
    }
  return (
    <div className='form-container'>
        <form className='registration-form' action="">
             {submitted && validate ? <h1 className='error-message'>Registration succesful</h1> : null}
            <input className='form-input' type="text"  placeholder='FirstName' value={field.firstname} onChange={(e)=>setField({...field,firstname:e.target.value},console.log(field))} />
            {submitted && !field.firstname ? <span className='error-message'>Enter Name</span> : null }
            <input className='form-input' type="text"  placeholder='Second-Name' value={field.secondname} onChange={(e)=>setField({...field,secondname:e.target.value},console.log(field))} />
            {submitted && !field.secondname ? <span className='error-message'>Enter Second Name</span> : null }
            <input className='form-input' type="email"  placeholder='E-mail' value={field.email} onChange={(e)=>setField({...field,email:e.target.value},console.log(field))} />
            {submitted && !field.email ? <span className='error-message'>Enter Your Email Id</span> : null }
            <input className='form-input' type="number"  placeholder='Phone Number'value={field.phoneNumber} onChange={(e)=>setField({...field,phoneNumber:e.target.value},console.log(field))} />
            {submitted && !field.phoneNumber ? <span className='error-message'>Enter Your Phone Number</span> : null }
            <button className='submit-button' type='submit' onClick={handleSubmit}>Submit</button>

        </form>
    </div>
  )
}

export default Registration