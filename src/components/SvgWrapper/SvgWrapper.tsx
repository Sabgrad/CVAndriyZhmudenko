import React, { ReactNode } from "react"

type SvgWrapper = {
  children: ReactNode
  link: string
}

const SvgWrapper: React.FC<SvgWrapper> = ({ children, link }) => {

  const openInNewTab = (link: string) => {
    const newWindow = window.open(link, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <div onClick={() => openInNewTab(link)}>
      {children}
    </div>
  )
}


export default SvgWrapper