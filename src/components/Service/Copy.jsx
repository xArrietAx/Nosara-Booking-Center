"use client"
import { MdOutlineContentCopy } from "react-icons/md";
import toast from 'react-hot-toast';

export const Copy = ({str}) => {


  const copyToClipboard = async str => {
    try {
      await navigator.clipboard.writeText(str);
      toast.success("Copied")
    } catch (error) {
      console.log(error);
      toast.error("Could not copy")
    }
  };

  return (
    <button className="btn btn-sm btn-square" onClick={e => copyToClipboard(str)}><MdOutlineContentCopy fontSize={"20px"} /></button>
  )
}
