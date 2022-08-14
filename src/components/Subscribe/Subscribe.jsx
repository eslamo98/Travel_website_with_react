import React from 'react'
import "./subscribe.css"
const Subscribe = () => {
  const [email, setEmail] = React.useState("");
  const handleSubmit = (e)=>{
    e.preventDefault();
    
    console.log(email)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
    console.log(e.target.value)
  }
  return (
    <section className="subscribe">
        <div className="sub-container">
            <h2 className="sub-heading">
            Subscirbe Now
            </h2>
            <span className="sub-text">
            Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Laboriosam Ipsam Repellat Nostrum Esse Officiis Unde Quisquam Corporis Doloremque Adipisci Similique!
            </span>
            <form className='sub-form' onSubmit={handleSubmit}>
                <input 
                className='user-email' 
                type="email" 
                name='email' 
                placeholder='enter your email'
                onChange={handleEmail}
                value={email}
                 />
                <button className='sub-form-btn' type='submit'>Subscribe</button>
            </form>
        </div>
    </section>
  )
}

export default Subscribe