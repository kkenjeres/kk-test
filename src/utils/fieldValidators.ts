export const getNumberValue = (
  value: string | number | boolean
): number | undefined => {
  return typeof value === "number" ? value : undefined;
};

export const getStringValue = (value: string | number | boolean): string => {
  return typeof value === "string" ? value : "";
};

export const getDateValue = (value: string | number | boolean): string => {
  return typeof value === "string" ? value : "";
};