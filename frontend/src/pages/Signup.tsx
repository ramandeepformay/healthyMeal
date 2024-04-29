
import { useState } from "react"
import AuthButton from "../components/AuthButton"
import AuthHeader from "../components/AuthHeader"
import AuthInputBox from "../components/AuthInputBox"
import InFoText from "../components/InfoText"



const Signup = () => {
    // const [postSignupInpts, setPostSignupInputs] = useState({
    //     name
    // })
    return (
        <>
            <div className="h-screen grid grid-cols-1 lg:grid-cols-2">
                <div className="border h-screen w-full flex flex-col justify-center  max-screen-lg p-6">
                    <div>
                        <AuthHeader label="Signup"/>
                    </div>
                    <div>
                        <AuthInputBox label="Name" placeholder="Enter your username" inputType="text"/>
                    </div>
                    <div>
                        <AuthInputBox label="Email" placeholder="Enter your email" inputType="text" />
                    </div>
                    <div>
                        <AuthInputBox label="Password" placeholder="Enter your password" inputType="password" />
                    </div>
                    <div>
                        <AuthButton buttonName="Signup"/>
                    </div>
                </div>

                <div className="border h-screen w-full flex flex-col justify-center items-center bg-gray-200 max-screen-md p-4 hidden lg:block">
                    <InFoText />
                </div>
            </div>

        </>
    )
}

export default Signup