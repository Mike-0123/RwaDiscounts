
const categories = ["Computers and Accessories", "Phones and Tablets", "Electronics", "Home and Kitchen", "Beauty, Health & Personal care", "Baby, Kids and Toys", "Fashion"];

const Categories = () => {
    return(
        <div className="bg-primary-blue text-white hidden xl:block">
            <div className="container mx-auto px-4">
                <ul className={"flex items-center justify-between py-3 cursor-pointer capitalize"}>
                    {
                        categories.map((category, idx) => (
                            <li key={idx}>{category}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}


export default Categories;