

const AuthButton = ({ buttonName, onClick }: { buttonName: string, onClick: React.MouseEventHandler<HTMLDivElement> })=>{
return <>
    <div className="w-full border rounded-md text-center my-8 p-2 bg-blue-400 text-white max-w-lg mx-auto" onClick={onClick}>
        {buttonName}
    </div>
</>
   
    
}

export default AuthButton;

