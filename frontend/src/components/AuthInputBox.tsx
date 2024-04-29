
interface InputBox{
    label:string,
    placeholder:string,
    inputType:string
}
const AuthInputBox =({label, placeholder, inputType}:InputBox)=>{
    return <>
        <div>
            <div className="text-gray-500 my-2 text-lg">
                {label}
            </div>
            <div>
                <input type={inputType} placeholder={placeholder} className="w-full px-4 py-2 bg-slate-200 rounded-md outline-none"/>
            </div>
        </div>
    </>
}

export default AuthInputBox;