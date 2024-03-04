export function Skeleton() {
    return (
      <div className="container">
        <div className="flex flex-col gap-8">

          <div className="flex gap-5">
            <div className="w-full h-[25rem] lg:h-[280px]">
              <div className="skeleton w-full h-full" />
            </div>
            <div className="skeleton w-full max-w-sm h-[25rem] lg:hidden" />
          </div>

          <div className="flex flex-col gap-3">
            <div className="skeleton w-48 h-8" />
            <div className="skeleton w-full h-8" />
          </div>

        </div>
    </div>
    );
  }




  