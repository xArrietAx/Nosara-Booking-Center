import { Product } from "./Product";


export function Category({ data }) {
  return (
    <div tabIndex={0} className="collapse collapse-arrow">
      <input type="checkbox" className="peer" />
      <div className="collapse-title bg-gray-50 peer-checked:bg-transparent">
        <span className="font-[600] uppercase">{data?.fields?.name}</span>
      </div>
      <div className="collapse-content">
        <div className="grid_products">
          {data?.fields?.data?.map((product, i) => {
            return <Product key={i + Date + Math.random()} data={product} category={data?.fields?.name} />;
          })}
        </div>
      </div>
    </div>
  );
}
