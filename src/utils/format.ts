export const formatCurrency = (value:number) => {
  if(!value) value = 0
  return Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(
    value
  )
}