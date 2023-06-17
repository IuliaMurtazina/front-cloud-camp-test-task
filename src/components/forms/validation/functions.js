export const getInitialValues = (schema, values) => {
  const castValues = values || {}
  return schema.cast(castValues, {
    stripUnknown: true
  })
}
