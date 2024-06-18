export function Button({ children, className, loading, ...props }) {
    return <button className={`custom-btn ${className} ${loading ? "!bg-green-500" : "" }`} disabled={loading} {...props}>
    {loading ? (
        <span className="loading loading-spinner text-white" />
      ) : null}
      {loading ? null : children }
    </button>
}