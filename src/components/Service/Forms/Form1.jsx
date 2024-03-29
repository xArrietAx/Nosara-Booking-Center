import { PhoneInput } from "react-international-phone";
import { DynamicForm } from "./DynamicForm";

export function Form1({data, updateFields, serviceName, isFirstStep, currentStep }) {

    const {Name, Phone, Email} = data

    return <>
      <div className="mb-5">
                <label htmlFor="name" className="mb-3 block text-sm font-medium text-gray-900">
                    Name
                </label>
                <input type="text" name="name" id="name" placeholder="Jhon" min="0"
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-sm outline-none focus:border-[#121213] focus:shadow-md" required value={Name} onChange={e => updateFields({Name: e.target.value})} />
            </div>

            <div className="mb-5">
                <label htmlFor="phone" className="mb-3 block text-sm font-medium text-gray-900">
                    Phone <span className="badge badge-sm badge-neutral">Optional</span>
                </label>
                <PhoneInput defaultCountry="us" className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white focus-within:border-[#121213] focus-within:shadow-md" inputProps={{id:"phone"}} name="phone" value={Phone} onChange={value => updateFields({Phone: value})} />
            </div>

            <div className="mb-5">
                <label htmlFor="email" className="mb-3 block text-sm font-medium text-gray-900">
                    Email
                </label>
                <input type="email" name="email" id="email" placeholder="name@gmail.com" min="0"
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-sm outline-none focus:border-[#121213] focus:shadow-md" required value={Email} onChange={e => updateFields({Email: e.target.value})} />
            </div>

            <DynamicForm data={data} updateFields={updateFields} serviceName={serviceName} isFirstStep={isFirstStep} currentStep={currentStep} /> 

    </>
}