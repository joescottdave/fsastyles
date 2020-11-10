
export function toggleSidebarDocumentMenu () {
  const sidebarDocumentMenus = [...document.querySelectorAll('div.document-menu-side-menu')]

  const toggleCSSClass = (element, className) => {
    if (element.classList) {
      element.classList.toggle(className)
    } else {
      // For IE9
      const classes = element.className.split(' ')
      const i = classes.indexOf(className)

      if (i >= 0) { classes.splice(i, 1) } else { classes.push(className) }
      element.className = classes.join(' ')
    }
  }

  sidebarDocumentMenus.forEach((documentMenu) => {
    const heading = documentMenu.querySelector('h2.sidebar-title')
    const nav = documentMenu.querySelector('nav.document-menu')

    heading.onclick = () => {
      toggleCSSClass(heading, 'sidebar-title__open')
      toggleCSSClass(nav, 'document-menu__open')
    }
  })
}

// module.exports = toggleSidebarDocumentMenu
