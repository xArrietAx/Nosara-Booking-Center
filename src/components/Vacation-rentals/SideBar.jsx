import { BookForm } from "@/components/Vacation-rentals/BookForm";

export function SideBar({price, name}) {

    const renderSidebar = () => {
      return (
        <div className="w-full flex flex-col rounded-2xl border-b border-t border-l border-r border-gray-200 space-y-6 xl:space-y-7 pb-10 p-2 sm:p-4 xl:px-8 xl:py-6 shadow-xl">
         
            <span className="text-3xl font-semibold">
              ${price}
              <span className="ml-1 text-base font-normal text-gray-500">
                /night
              </span>
            </span>
  
          <div className="w-14 border-b border-gray-200"></div>
          <BookForm service={name} />
        </div>
      );
    };
  
    return <div className="hidden lg:block flex-grow mt-14 lg:mt-0">
    <div className="sticky top-5">{renderSidebar()}</div>
  </div>
  }