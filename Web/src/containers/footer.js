import React from 'react'

const Footer = () => {
  return (
    <footer className="c-footer">
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer"></a>
        <span className="ml-1"></span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1 grey-text">&copy; IT Promocodes, 2021</span>
      </div>
    </footer>
  )
}

export default React.memo(Footer)