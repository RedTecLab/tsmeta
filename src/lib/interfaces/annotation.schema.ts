import { OasFormat } from '../enums/oas.format.enum'
/**
 * interface PropertyParam
 */
export interface PropertyParam {
  enum?: string[] // tslint:disable-line no-reserved-keywords
  format?: OasFormat
  /**
   * when dealing with types not already supported,
   * we can simply use this property param to enforce the
   * `format` above all other typedef meta handling logic
   */
  enforcedFormat?: boolean
  required?: boolean
  version?: string
}
/**
 * interface ParameterParam
 */
export interface ParameterParam {
  name: string
  description?: string
  required: Array<boolean | string> | boolean
  in?: string // tslint:disable-line no-reserved-keywords
  ref?: any
  version?: string
  schema?: any
  example?: any
}
/**
 * interface SuccessResponseParam
 */
export interface ResponseParam {
  description?: string
  example?: any
  ref?: any
  responseRef?: any
  schema?: any
  statusCode?: number
  version?: string
}
/**
 * interface ModelParam
 */
export interface ModelParam {
  version?: string
  example?: any
}
