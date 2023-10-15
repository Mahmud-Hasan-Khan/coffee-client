import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import { useState } from "react";

const Home = () => {
    const loadedCoffees = useLoaderData();

    // to get always update data(when any api id deleted)
    const [coffees, setCoffees] = useState(loadedCoffees);

    return (
        <div>
            <h1 className='text-6xl text-center my-20 text-purple-600'>Hot Hot Cold Coffee: {coffees.length}</h1>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}
                    ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;