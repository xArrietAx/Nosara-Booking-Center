"use client"

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

export function Tabs({ data = [], Content, className }) {
  return (
    <div className="relative">
      <div className="w-full">
        <TabGroup>
          <TabList className="scrollbar-hide flex gap-4 overflow-hidden overflow-x-auto">
            {data.map(({ name }) => (
              <Tab key={name} className="block px-5 py-2.5 rounded-full !leading-none font-medium whitespace-nowrap text-sm text-text/70 capitalize hover:text-dark hover:bg-secondary sm:text-base sm:px-6 sm:py-3 focus:outline-none data-[selected]:bg-dark data-[selected]:text-white">
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="p-5 mt-3">
            {data.map(item => {
              return <TabPanel key={item.name} className={className} >
                {item.data.map((item, i) => {
                    return <Content data={item} key={i + Date.now() + Math.random()} />
                  })}
            </TabPanel>
            })}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  )
}
