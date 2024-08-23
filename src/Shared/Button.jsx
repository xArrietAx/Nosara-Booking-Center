export function Button({ children, className, loading, ...props }) {
  return (
    <button className={`btn btn-sm btn-primary md:btn-lg ${className} ${loading ? "bg-primary/60 cursor-not-allowed" : null } `} {...props} disabled={loading} >
      {loading ? <Loading /> : children}
    </button>
  );
}


function Loading() {
  return <div className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent rounded-full" role="status" aria-label="loading">
  <span className="sr-only">Loading...</span>
</div>
}