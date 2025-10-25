import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {

    const [inputs, setInputs] = useState({
        name:"",
        email:"",
        subject:"",
        message:""
    });
    const handleInput = (e) => {
        setInputs({...inputs, [e.target.name]:e.target.value })
    }
    const handleSubmitForm = async(e) => {
        if(!inputs.email.trim() || !inputs.name.trim() || !inputs.subject.trim()){
            toast.warn("All fields are required. !");
            return;
        }
        e.preventDefault();
        const res = await fetch("https://formspree.io/f/xyzdrpwo",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(inputs)
        });
        
        if(res.ok){
            toast.success("Message send successfully");
            setInputs({ name:"", email:"", subject:"", message:""})
        } else {
            toast.error("Failed to send Message, Try again");
        }
    }

    return (
        <>
            <div className='pt-3 pt-lg-4 fw-normal responsive-text'>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Name</label>
                    <input type="text" onChange={ e => handleInput(e)} name='name' value={inputs.name} className="form-control responsive-text" autoComplete='name' id="username" />
                </div>
                <div className="mb-3">
                    <label htmlFor="useremail" className="form-label">Email</label>
                    <input type="email" onChange={ e => handleInput(e)} name='email' value={inputs.email} className="form-control responsive-text" autoComplete='email' id="useremail" />
                </div>
                <div className="mb-3">
                    <label htmlFor="usersubject" className="form-label">Subject</label>
                    <input type="text" onChange={ e => handleInput(e)} name='subject' value={inputs.subject} className="form-control responsive-text" id="usersubject" />
                </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea onChange={ e => handleInput(e)} name='message' value={inputs.message} className="form-control responsive-text" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button onClick={ e => handleSubmitForm(e)}  className=" connect-icon send-msg fs-6 p-2 p-lg-2" type='button'>Send Message</button>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />

        </>
    )
}
