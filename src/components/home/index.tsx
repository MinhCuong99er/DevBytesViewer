import React, { FC } from 'react'
import PageError from '@src/components/Error/PageError'
import { PAGE_ERROR } from '@src/interfaces/enums'

interface HomeProps {}

const Home: FC<HomeProps> = (props: HomeProps) => {
  const {} = props

  return <PageError title={PAGE_ERROR.ONLY_MOBILE} />
}

export default Home
