import { ValidationRuleObject } from 'fastest-validator'

type ValidationRuleObjectCustom = ValidationRuleObject
type ActionParamSchema = ValidationRuleObjectCustom | ValidationRuleObjectCustom[]
type ActionParamTypes =
  | 'any'
  | 'array'
  | 'boolean'
  | 'custom'
  | 'date'
  | 'email'
  | 'enum'
  | 'forbidden'
  | 'function'
  | 'number'
  | 'object'
  | 'string'
  | 'url'
  | 'uuid'
  | boolean
  | string
  | ActionParamSchema
export type ValidateRuleSchema = { [key: string]: ActionParamTypes }
