
import { useState } from "react"
import AuthButton from "../components/AuthButton"
import AuthHeader from "../components/AuthHeader"
import AuthInputBox from "../components/AuthInputBox"
import InFoText from "../components/InfoText"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const Signup = () => {
    const [postSignupInputs, setPostSignupInputs] = useState<any>({
        name:"",
        email:"",
        password:""
    })
    const navigate = useNavigate()
    const signupInputs = async () =>{     
        try{
            const response = await axios.post(`http://localhost:8787/api/v1/user/signup`,postSignupInputs
            )
            localStorage.setItem("token", response.data.token);
            navigate("/meal")
        }catch(e){
            alert("Error while signing up")
        }
       
    }

    return (    
        <>
        {JSON.stringify(postSignupInputs)}
            <div className="h-screen grid grid-cols-1 lg:grid-cols-2">
                <div className="border h-screen w-full flex flex-col justify-center  max-screen-lg p-6">
                    <div>
                        <AuthHeader label="Signup"/>
                    </div>
                    <div>
                        <AuthInputBox label="Name" placeholder="Enter your username" inputType="text" onChange={(e)=>setPostSignupInputs({
                            ...postSignupInputs,
                            name:e.target.value
                            
                        })}/>
                    </div>
                    <div>
                        <AuthInputBox label="Email" placeholder="Enter your email" inputType="text" onChange={(e) => setPostSignupInputs({
                            ...postSignupInputs,
                            email: e.target.value
                            
                        })} />
                    </div>
                    <div>
                        <AuthInputBox label="Password" placeholder="Enter your password" inputType="password" onChange={(e) => setPostSignupInputs({
                            ...postSignupInputs,
                            password: e.target.value,
                        })} />
                    </div>
                    <div>
                        <AuthButton buttonName="Signup" onClick={signupInputs}/>
                    </div>
                </div>

                <div className="border h-screen w-full bg-gray-200 max-screen-lg hidden lg:block">
                    <InFoText />
                </div>
            </div>

        </>
    )
}

export default Signup