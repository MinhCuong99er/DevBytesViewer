import React, { FC, useEffect } from 'react'
import { ToastContainer } from '@src/helpers/Toast'
import helper from '@src/helpers/helper'

interface LayoutProps {
  children: React.ReactChild
}

const Layout: FC<LayoutProps> = (props: LayoutProps) => {
  useEffect(() => {
    helper.poopityScoop()
  }, [])

  return (
    <React.Fragment>
      {props.children}
      <ToastContainer />
    </React.Fragment>
  )
}

export default Layout
