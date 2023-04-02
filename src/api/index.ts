import { createClient } from './client'

export default createClient()

export type ConvertOptions<Fields> = {
  containsFields?: Fields[]
  equalsFields?:   Fields[]
}

export function convertPageQuery(query: PageQuery, options: ConvertOptions<keyof typeof query>): FireboomQuery {
  const { pageNum, pageSize, ...rest } = query
  const ret: FireboomQuery = {
    skip: (pageNum - 1) * pageSize,
    take: pageSize || 10,
  }
  if (Object.keys(rest).length) {
    ret.query = rest
    if (options?.containsFields) {
      for (const field of options.containsFields) {
        (ret.query as Record<string, FireboomQueryValue>)[field] = {
          contains: query[field]
        }
      }
    }
    if (options?.equalsFields) {
      for (const field of options.equalsFields) {
        (ret.query as Record<string, FireboomQueryValue>)[field] = {
          equals: query[field]
        }
      }
    }
  }
  return ret
}
