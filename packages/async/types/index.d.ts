export declare function useAsync<
  PromiseReturnType extends any = any,
  ErrorType extends any = Error
>(
  asyncCallback: (...args: any[]) => Promise<PromiseReturnType>,
  dependencies?: any[]
): [AsyncState<PromiseReturnType, ErrorType>, AsyncCallback]
export declare function useAsyncEffect<
  PromiseReturnType extends any = any,
  ErrorType extends any = Error
>(
  asyncCallback: (...args: any[]) => Promise<PromiseReturnType>,
  dependencies?: any[]
): AsyncState<PromiseReturnType, ErrorType>
export interface AsyncReducerState<ValueType, ErrorType> {
  id: number
  status: AsyncStatus
  value?: ValueType
  error?: ErrorType
}
export interface AsyncState<ValueType, ErrorType>
  extends Omit<AsyncReducerState<ValueType, ErrorType>, 'id'> {
  cancel: () => void
}
export declare type AsyncAction<ValueType, ErrorType> =
  | {
      status: 'idle' | 'loading' | 'cancelled'
    }
  | {
      status: 'success'
      value: ValueType
    }
  | {
      status: 'error'
      error?: ErrorType
    }
export interface AsyncCallback {
  (...args: any[]): void
  cancelled: boolean
}
export declare type AsyncStatus =
  | 'idle'
  | 'loading'
  | 'success'
  | 'error'
  | 'cancelled'