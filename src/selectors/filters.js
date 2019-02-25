export const filterByLocation = (brands, filter) => {
  switch(filter) {
    case 'Australia':
      return brands.filter(brand => brand.location === "Australia");
    case 'England':
      return brands.filter(brand => brand.location === "England");
    case 'USA':
      return brands.filter(brand => brand.location === "USA");
    case 'UK':
      return brands.filter(brand => brand.location === "UK");
    default:
      return brands;
  }
}
