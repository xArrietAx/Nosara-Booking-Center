export function Label({ children, ...props }) {
    return <label className="form-label" {...props} >
    {children}
  </label>
}