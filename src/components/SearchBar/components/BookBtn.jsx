import { PiBookBookmarkFill } from "@/icons/index";

export function BookBtn() {
    return <button type="submit" className="flex items-center justify-center w-16 h-16 rounded-full absolute z-50 top-4 right-4 bg-primary hover:bg-primary/80">
    <PiBookBookmarkFill fontSize={25} color="white" />
  </button>
}