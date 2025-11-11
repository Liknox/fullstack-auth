export type TypeSearchParams = {
   [key: string]:
      | string
      | number
      | boolean
      | undefined
      | Array<string | number | boolean | undefined>
}

export interface IRequestOptions extends RequestInit {
   headers?: Record<string, string>
   params?: TypeSearchParams
}

export type TypeFetchRequestConfig<Params = undefined> =
   Params extends undefined
      ? { config?: IRequestOptions }
      : { params: Params; config?: IRequestOptions }
