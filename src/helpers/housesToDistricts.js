/* eslint-disable import/prefer-default-export */
export const housesToDistricts = (houses) =>
  houses.reduce(
    (acc, house) =>
      acc[house.district]
        ? {
            ...acc,
            [house.district]: {
              ...acc[house.district],
              count: acc[house.district].count + 1,
              sum: acc[house.district].sum + house.price,
              maxPrice: Math.max(acc[house.district].maxPrice, house.price),
            },
          }
        : {
            ...acc,
            [house.district]: {
              id: house.district,
              district: house.district,
              count: 1,
              sum: house.price,
              avgPrice: undefined, // To be defined later on the cell level
              maxPrice: house.price,
            },
          },
    {},
  )
