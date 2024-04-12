import Validator, { ValidatorConstructorOptions } from 'fastest-validator'
import { ValidateRuleSchema } from './schema'

const CUSTOM_SCHEMA_MESSAGES = {
  required: "Trường '{field}' là bắt buộc.",
  string: "Trường '{field}' phải là chuỗi.",
  stringEmpty: "Trường '{field}' không được để trống.",
  stringMin: "Trường '{field}' phải có số lượng ký tự lớn hơn hoặc bằng {expected}.",
  stringMax: "Trường '{field}' phải có số lượng ký tự bé hơn hoặc bằng {expected}.",
  stringLength: "Trường '{field}' phải có số lượng ký tự là {expected}.",
  stringPattern: "The '{field}' field fails to match the required pattern.",
  stringContains: "The '{field}' field must contain the '{expected}' text.",
  stringEnum: "The '{field}' field does not match any of the allowed values.",
  stringNumeric: "The '{field}' field must be a numeric string.",
  stringAlpha: "The '{field}' field must be an alphabetic string.",
  stringAlphanum: "The '{field}' field must be an alphanumeric string.",
  stringAlphadash: "The '{field}' field must be an alphadash string.",
  stringHex: "The '{field}' field must be a hex string.",
  stringSingleLine: "The '{field}' field must be a single line string.",
  stringBase64: "The '{field}' field must be a base64 string.",
  number: "Trường '{field}' phải là số.",
  numberMin: "Trường '{field}' phải lớn hơn hoặc bằng {expected}.",
  numberMax: "Trường '{field}' phải bé hơn hoặc bằng {expected}.",
  numberEqual: "Trường '{field}' phải bằng {expected}.",
  numberNotEqual: "Trường '{field}' không được bằng {expected}.",
  numberInteger: "Trường '{field}' phải là số nguyên.",
  numberPositive: "Trường '{field}' phải là số dương.",
  numberNegative: "Trường '{field}' phải là số âm.",
  array: "Trường '{field}' phải là mảng.",
  arrayEmpty: "Trường '{field}' không được là mảng trống.",
  arrayMin: "Trường '{field}' phải là mảng có ít nhất {expected} phần tử.",
  arrayMax: "Trường '{field}' phải là mảng có ít hơn hoặc bằng {expected} phần tử.",
  arrayLength: "Trường '{field}' phải là mảng chứa {expected} phần tử.",
  arrayContains: "The '{field}' field must contain the '{expected}' item.",
  arrayUnique: "The '{actual}' value in '{field}' field does not unique the '{expected}' values.",
  arrayEnum: "The '{actual}' value in '{field}' field does not match any of the '{expected}' values.",
  tuple: "The '{field}' field must be an array.",
  tupleEmpty: "The '{field}' field must not be an empty array.",
  tupleLength: "The '{field}' field must contain {expected} items.",
  boolean: "The '{field}' field must be a boolean.",
  function: "The '{field}' field must be a function.",
  date: "Trường '{field}' phải là định dạng ngày tháng.",
  dateMin: "The '{field}' field must be greater than or equal to {expected}.",
  dateMax: "The '{field}' field must be less than or equal to {expected}.",
  forbidden: "The '{field}' field is forbidden.",
  email: "Trường '{field}' phải là e-mail.",
  emailEmpty: "The '{field}' field must not be empty.",
  emailMin: "The '{field}' field length must be greater than or equal to {expected} characters long.",
  emailMax: "The '{field}' field length must be less than or equal to {expected} characters long.",
  url: "Trường '{field}' phải là URL thích hợp.",
  enumValue: "The '{field}' field value '{expected}' does not match any of the allowed values.",
  equalValue: "The '{field}' field value must be equal to '{expected}'.",
  equalField: "The '{field}' field value must be equal to '{expected}' field value.",
  object: "Trường '{field}' phải là đối tượng.",
  objectStrict: "The object '{field}' contains forbidden keys: '{actual}'.",
  objectMinProps: "The object '{field}' must contain at least {expected} properties.",
  objectMaxProps: "The object '{field}' must contain {expected} properties at most.",
  uuid: "Trường '{field}' phải có định dạng là UUID thích hợp.",
  uuidVersion: "The '{field}' field must be a valid UUID version provided.",
  mac: "The '{field}' field must be a valid MAC address.",
  luhn: "The '{field}' field must be a valid checksum luhn.",
}

export default function validate(
  schema: ValidateRuleSchema,
  values: Record<string, any>,
  options?: ValidatorConstructorOptions,
  vtor?: typeof Validator
):
  | boolean
  | {
      type: string
      field: string
      message: string
    }[] {
  let v: any
  if (vtor) {
    v = vtor
  } else {
    v = new Validator({
      useNewCustomCheckerFunction: true,
      messages: CUSTOM_SCHEMA_MESSAGES,
      ...(options || {}),
    })
  }
  const check = v.compile(schema)
  return check(values)
}
