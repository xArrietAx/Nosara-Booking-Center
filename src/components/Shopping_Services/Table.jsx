"use client"
import { Context } from "@/Context/useContext";
import { useContext } from "react";

export function Table() {

  const {products} = useContext(Context)

    return <div className="overflow-x-auto max-h-[500px]">
    <table className="table table-zebra min-w-[500px]">
      <thead>
        <tr className="sticky top-0 bg-white">
          <th>Product</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {
          products.map((ele, i) => { 
            return <tr key={i + Date + Math.random()}>
            <td>{ele.name}</td>
            <td>{ele.quantity}</td>
          </tr>
          })
        }
      </tbody>
    </table>
  </div>
}