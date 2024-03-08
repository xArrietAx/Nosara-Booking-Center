"use client"

import { FaPlus, FaMinus } from "react-icons/fa";
import { useState, useContext } from "react";
import { Context } from "@/Context/useContext";

export function Product({ data, category = "Unknown" }) {
    
    const [quantity, setQuantity] = useState(0);
    const {products, setProducts} = useContext(Context)

    const handleIncrement = () => {
        const updatedProducts = [...products];
        const index = updatedProducts.findIndex(product => product.name === data.name);
        if (index !== -1) {
            updatedProducts[index].quantity += 1;
        } else {
            updatedProducts.push({ name: data.name, quantity: 1 });
        }
        setProducts(updatedProducts);
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            const updatedProducts = [...products];
            const index = updatedProducts.findIndex(product => product.name === data.name);
            if (index !== -1) {
                updatedProducts[index].quantity -= 1;
                if (updatedProducts[index].quantity === 0) {
                    updatedProducts.splice(index, 1);
                }
                setProducts(updatedProducts);
            }
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div className="p-3 border rounded-xl bg-white shadow">
            <span className="inline-block mb-3 text-gray-500 text-xs">{category}</span>
            <span className="inline-block w-full text-center text-[15px]">{data.name}</span>
            <div className="divider">{quantity}</div>
            <div className="flex justify-between gap-2">
                <button onClick={handleIncrement} className="btn btn-sm flex-1 font-[600] bg-green-500 hover:bg-green-600">
                    <FaPlus fontSize={"12px"} color="white" />
                </button>
                <button onClick={handleDecrement} className="btn btn-sm flex-1 font-[600] bg-red-500 hover:bg-red-600">
                    <FaMinus fontSize={"12px"} color="white" />
                </button>
            </div>
        </div>
    );
}
