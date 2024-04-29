
const AuthHeader =({label}:{label:string})=>{
    return <>
        <div className="text-center ">
            <div className="text-5xl font-black max-w-xl mx-auto">
                Healthy Meals Delivered to Your Door
            </div>
            <div className="my-2 text-xl max-w-lg text-gray-400 mx-auto">
                {label} for our delicious and nutritious meal plan and enjoy fresh, healthy meals delivered to your home!
            </div>
        </div>
    </>
}

export default AuthHeader;