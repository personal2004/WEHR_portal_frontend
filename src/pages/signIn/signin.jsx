import SignInCard from '../../components/signincomponent/sign';
import './index.css';
import {signinimg} from '../../constants/images'
const SignIn=()=>{
    return(
        <div className='SignIn'>
        <SignInCard/>
        <img className='sign_img'src={signinimg} alt='loadind...'/>
        </div>
    );
}
export default SignIn;
