
const InFoText = () => {
    return <>

        <div className="h-screen flex flex-col items-center justify-center ml-4">
            <div className="text-5xl font-black max-w-lg ">
                Delicious and Nutritious Meals
            </div>
            <div className="my-4 text-gray-400 text-lg max-w-lg">
                Our meal plan features a variety of healthy, chef-prepared meals made with fresh, high-quality ingredients. Choose from a range of dietary options to suit your needs.
            </div>
            <div>
                <SubText />
            </div>
            <div>
                <SubText />
            </div>

        </div>

    </>
}

const SubText = () => {
    return <>
        <div className="border p-4 bg-slate-300 my-4 rounded-lg max-w-lg">
            <div className="text-xl font-bold">
                Pricing
            </div>
            <div className="text-gray-500">
                Our meal plan starts at $9.99 per meal, with discounts available for larger orders.
            </div>
        </div>
    </>
}

export default InFoText;