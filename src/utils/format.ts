export const formatCurrency = (value:number) => {
  if(!value) return "R$ "
  return Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(
    value
  )
}