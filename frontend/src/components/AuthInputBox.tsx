
interface InputBox{
    label:string,
    placeholder:string,
    inputType:string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}
const AuthInputBox =({label, placeholder, inputType, onChange}:InputBox)=>{
    return <>
        <div className="max-w-lg mx-auto">
            <div className="text-gray-500 my-2 text-lg">
                {label}
            </div>
            <div >
                <input type={inputType} placeholder={placeholder} className="w-full px-4 py-2 bg-slate-200 rounded-md outline-none" onChange={onChange}/>
            </div>
        </div>
    </>
}

export default AuthInputBox;