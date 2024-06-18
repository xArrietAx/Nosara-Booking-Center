import { Collapse } from "./Collapse";

export function ChooseInput({ isChecked, children, data, title, subtitle, alterTitle, placeholder, value, setValue, defaultValue }) {
  return (
    <Collapse isChecked={isChecked} title={title} alterTitle={alterTitle} value={value} defaultValue={defaultValue} >
      <div className="flex flex-col gap-5 w-full">
      <input type="text" placeholder={placeholder} className="input_field" value={value} onChange={(e) => setValue(e.target.value)} />

      <div>
        <p className="block font-semibold text-base">{subtitle}</p>
        <div className="mt-3 text-gray-500">
          {data.slice(0, 5).map((item, i) => {
              return <li key={i + new Date() + Math.random()} className="py-2 mb-1 flex items-center space-x-3 text-sm cursor-pointer hover:text-gray-700" >
                {children(item)}
              </li>
            })}
        </div>
      </div>
      </div>
    </Collapse>
  );
}
