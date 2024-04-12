import { withServerSideProps } from '@src/helpers/wrapperProps'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React, { FC, useEffect } from 'react'
// import * as userServies from '@src/services/user.service'
// import HttpStatusCode from '@src/contains/HttpStatusCode'
// import { IUserResponse } from '@src/interfaces/User'
import PageLoading from '@src/helpers/PageLoading'
import { PAGE_ERROR } from '@src/interfaces/enums'
// import { DEFAULT_ERROR_MESSAGE } from '@src/contains/contants'
import PageError from '@src/components/Error/PageError'

interface IRedirectPage {
  isLogin?: boolean
  message?: string
}

const RedirectPage: FC<IRedirectPage> = (props: IRedirectPage) => {
  const router = useRouter()
  const { isLogin, message } = props

  useEffect(() => {
    if (isLogin) {
      setTimeout(() => {
        router.replace('/')
      }, 1000)
    }
  }, [])

  if (isLogin) {
    return <PageLoading />
  }

  return (
    <React.Fragment>
      <PageError title={message} />
    </React.Fragment>
  )
}

export const getServerSideProps: GetServerSideProps = withServerSideProps(async function getServerSideProps({ query }) {
  if (!query.token) {
    return {
      props: {
        isLogin: false,
        message: PAGE_ERROR.PAGE_404,
      },
    }
  } else {
    return {
      props: {
        isLogin: true,
        hydrationData: {
          authStore: {
            token: query.token,
          },
        },
      },
    }
  }
})

export default RedirectPage
