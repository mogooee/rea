export interface Coordinates {
  lat: number
  lon: number
}

export interface PageParams {
  page: number
  page_size: number
}

export interface PaginatedResponse<T> {
  total_count: number
  page: number
  page_size: number
  next_page: number
  previous_page: number
  results: T[]
}
