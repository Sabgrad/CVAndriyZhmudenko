/* <ul className={styles.tools}>
                {
                  project.tools.map((tool, index) =>
                    <li key={index}>
                      {tool}
                    </li>
                  )}

              </ul> */

// index === current ?
//   (
//     item.className = cn(styles.project_section, styles.current),
//     item.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })
//   )
//   :
//   item.className = cn(styles.project_section)

// const size: number = useMemo(() => {
  //   let size = 0
  //   if (refProjectList.current) {
  //     size = refProjectList.current.children.length
  //   }
  //   return size
  // }, [refProjectList])

  // const handleScroll = (onTop: boolean) => {
  //   if (onTop) {
  //     if (current !== 0) {
  //       setCurrent(prev => prev - 1)
  //     }
  //   } else {
  //     if (current !== size - 1) {
  //       setCurrent(prev => prev + 1)
  //     }
  //   }
  // }

  // current === size - 1 ? false : true

   // useEffect(() => {
  //   if (refProjectList.current) {
  //     let children = Array.from(refProjectList.current.children) as HTMLElement[]
  //     setSize(children.length)
  //     // children.forEach((item, index) => '')
  //       // index % 2 === 0 ? item.className = cn(styles.project_section, styles.odd) : item.className = cn(styles.project_section, styles.even)

  //   }
  // }, [current])