export type HttpPostParams = {
  url: string
}

export interface HttpPostClient {
  post (url: HttpPostParams): Promise<void>
}
