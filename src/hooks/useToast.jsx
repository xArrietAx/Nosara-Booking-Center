import { useState } from "react";

export const useToast = () => {

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showToast, setShowToast] = useState(false);

    function Toast() {
        return <>
        {showToast ? (
        error ? (
          <div className="toast toast-center">
            <div className="alert alert-error flex">
              <span className="text-white">{error}</span>
            </div>
          </div>
        ) : (
          <div className={`toast toast-center ${success ? null : "hidden"}`}>
            <div className="alert alert-success flex">
              <span className="text-white">{success}</span>
            </div>
          </div>
        )
      ) : null}
        </>
    }

    function ResetTimeOut() {
        return setTimeout(() => {
            setError("");
            setSuccess("");
            setShowToast(false)
          }, 4000);
    }

    return {Toast, setShowToast, ResetTimeOut, setSuccess, setError}
  
}


