export function Textarea({ ...props }) {
  return <textarea rows={6} cols={4} className="form-input min-h-40" placeholder="Write your comments here..." {...props} />;
}
