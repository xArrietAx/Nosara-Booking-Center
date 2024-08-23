export function Heading2({ tagName, title, id, classNameContainer }) {
  
  const Tag = tagName;

  return (
      <div className={classNameContainer}>
        <span className="inline-block mb-5 uppercase text-sm text-text/60 tracking-widest">
          {id}
        </span>
        <Tag className="heading">{title}</Tag>
      </div>
  );
}
