"use client"
import { useToast } from "@/hooks/useToast";
import { MdOutlineContentCopy } from "react-icons/md";

export const Copy = ({str}) => {

  const {Toast, setShowToast, setError, setSuccess, ResetTimeOut} = useToast()

  const copyToClipboard = async str => {
    try {
      await navigator.clipboard.writeText(str);
      setShowToast(true)
      setSuccess("Copied")
    } catch (error) {
      console.log(error);
      setError("Could not copy")
    } finally {
      ResetTimeOut()
    }
  };

  return (
    <>
    <button className="btn btn-sm btn-square" onClick={e => copyToClipboard(str)}><MdOutlineContentCopy fontSize={"20px"} /></button>
    <Toast />
    </>
  )
}
