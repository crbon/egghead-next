import * as React from 'react'

const ItemWrapper: React.FC<{title: string; children: React.ReactNode}> = ({
  title,
  children,
}) => {
  return (
    <div>
      <h2 className="pb-3 md:pb-4 text-lg font-medium md:font-normal md:text-xl leading-none border-b border-gray-200 dark:border-gray-700">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </div>
  )
}

export {ItemWrapper}