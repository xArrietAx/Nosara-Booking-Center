import { Listbox, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { MdKeyboardArrowDown } from "@/utils/Icons";

export function Select({ value, list, children = () => {}, ButtonOnClick, Button = () => {}, onClick, classNameContainer, classNameButton }) {

  const [selected, setSelected] = useState(list[0])

  useEffect(() => {
    setSelected(() => {
      if (value === "") return list[0]
      return value
    })
  }, [value])
  
  return (
      <Listbox value={selected} onChange={setSelected}>
        <div className={`relative mt-1 ${classNameContainer}`}>
          
          <Listbox.Button className={`w-full text-left focus:outline-none ${classNameButton}`} onClick={ButtonOnClick} >
            {Button(selected)}
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <MdKeyboardArrowDown fontSize={22} />
            </span>
          </Listbox.Button>

          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0" >

            <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {list.map((item, i) => (
                <Listbox.Option key={i} className={({ active }) => `relative cursor-pointer select-none py-2 pl-5 pr-4 ${active ? 'bg-green-50 text-green-500' : 'text-gray-900' }`} value={item} onClick={() => { return onClick(item), setSelected(value) }} >
                  {() => children(item)}
                </Listbox.Option>
              ))}
            </Listbox.Options>

          </Transition>

        </div>
      </Listbox>
  )
}
