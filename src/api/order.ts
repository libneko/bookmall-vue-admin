import request from '@/utils/request'
import type { ApiResponse, GetOrders, Order, SendOrder } from './types'

export const getOrder = (data: SendOrder): Promise<ApiResponse<GetOrders>> => {
  const params = new URLSearchParams()
  params.append('page', data.page.toString())
  params.append('pageSize', data.pageSize.toString())
  if (data.beginTime) {
    params.append('beginTime', data.beginTime)
  }
  if (data.endTime) {
    params.append('endTime', data.endTime)
  }
  if (data.number) {
    params.append('number', data.number)
  }
  if (data.phone) {
    params.append('phone', data.phone)
  }
  if (data.status) {
    params.append('status', data.status)
  }
  return request.get(`/admin/order/conditionSearch?${params.toString()}`)
}

export const DeliveryOrderApi = (order_id: string): Promise<ApiResponse<object>> => {
  return request.put(`/admin/order/delivery/${order_id}`)
}
export const CompleteOrderApi = (order_id: string): Promise<ApiResponse<object>> => {
  return request.put(`/admin/order/complete/${order_id}`)
}

export const DeleteOrderApi = (order_id: string): Promise<ApiResponse> => {
  return request.post(`/admin/order/${order_id}`)
}
