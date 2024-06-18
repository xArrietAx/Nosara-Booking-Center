export function Heading({tagName, title, paragraph, className, bodyClassName, ...props}) {

  const Tag = tagName

    return <div className={`space-y-3 w-full mb-8 ${className}`} {...props}>
    <Tag className={`heading`}>
     {title}
    </Tag>
    <p className={`body ${bodyClassName} `} >
    {paragraph}
  </p>
  </div>
}