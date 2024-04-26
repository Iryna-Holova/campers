export const formatPrice = price => {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: false,
  });
};

export const formatLocation = location => {
  return location.split(', ').reverse().join(', ');
};
