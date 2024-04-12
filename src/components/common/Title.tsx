import React, { FC } from 'react'

interface TitleProps {
  title: string
  isShowAll?: boolean
  handleOnClick?: () => void
}

const Title: FC<TitleProps> = (props: TitleProps) => {
  const { title, isShowAll, handleOnClick } = props
  return (
    <div className={`c-main-title ${title ? 'd-flex' : 'd-none'}`}>
      <h2>{title}</h2>
      <span className={`${isShowAll ? 'd-block' : 'd-none'}`} onClick={handleOnClick}>
        Xem tất cả
      </span>
    </div>
  )
}

export default Title
