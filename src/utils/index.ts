export const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("es-ES", {
    dateStyle: "full"
  }).format(new Date(date));
}