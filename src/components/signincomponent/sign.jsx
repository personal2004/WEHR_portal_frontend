import './index.css';
import {logo} from '../../constants/images';
import icons from '../../constants/icons';
import { useNavigate } from 'react-router-dom';
import {useState } from 'react';
import {checkValidateData} from '../../functions/validate';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../../utils/firebase';

const SignInCard=()=>{
    const navigate=useNavigate();

    const [employeid,setemploeid]=useState();
    const [password,setpassword]=useState();
    const [ischecked,setischecked]=useState();

    const handleSignIn=async()=>{

        if(ischecked && (checkValidateData(employeid,password))){
            navigate('/dashboard');
        }       
        // try{
        //    await createUserWithEmailAndPassword(auth,employeid,password);
        //     const user=await auth.currentUser;
        // }catch(error){
        //     console.log(error);
        //     }
    }   
    return(
        <div className='signInCard'>
            <div className='signInCard_logo'>
                <img  src={logo} alt='logo'/>
                <h3>Your Logo</h3>
            </div>

            <form className='signinform'onSubmit={handleSignIn}>
            <h1>Sign Into</h1>
            <h3>Your Account</h3>
            <div className='signin_input'>
                <button>{icons.companyId}</button>
                <input type='email' placeholder='Company ID'onChange={(e)=>setemploeid(e.target.value)}/>
               
            </div>
            <div className='signin_input'>
                <button>{icons.password}</button>
                <input type='password' placeholder='Password'onChange={(e)=>setpassword(e.target.value)}/>
            </div>
            <div className='signcheckbox'>
                <input type='checkbox' writingsuggestions="on"onChange={(e)=>setischecked(e.target.checked)}/><span>Remember Me</span></div>  
            <button className='signinbutton' type='submit'>Sign In</button>
            </form>
            
        </div>
    )
}

export default SignInCard;