import { PiBookBookmarkFill } from "@/utils/Icons";

export function BookBtn() {
    return <button className="btn btn-lg btn-circle absolute z-50 top-6 right-4 bg-green-500 hover:bg-green-600">
    <PiBookBookmarkFill fontSize={25} color="white" />
  </button>
}