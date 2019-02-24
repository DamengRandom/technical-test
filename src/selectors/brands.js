export const filterByCompanySize = (brands, filter) => {
  switch(filter) {
    case 'small':
      return brands.filter(brand => brand.company_size > 0 && brand.company_size <= 30);
    case 'medium':
      return brands.filter(brand => brand.company_size > 30 && brand.company_size <= 50);
    case 'large':
      return brands.filter(brand => brand.company_size > 50 && brand.company_size <= 100);
    case 'huge':
      return brands.filter(brand => brand.company_size > 100);
    default:
      return brands;
  }
}
