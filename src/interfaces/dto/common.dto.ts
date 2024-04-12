export interface ListParam {
  skip: number
  limit: number
}

export interface ResponseType<T> {
  code: number
  errorCode?: number
  message: string
  data: Array<T> | T
  total?: number
  count?: number
  length?: number
}

export interface IPagination {
  skip?: number
  page?: number
  limit?: number
  totalPage?: number
  total?: number
  loadMore?: boolean
}
