/* eslint-disable import/prefer-default-export */
import { rest } from 'msw'

export const handlers = [
  // Handles a GET /user request
  rest.get('http://localhost:3001/pisos', (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          title: 'Piso 1',
          price: 100000,
          image: 'https://kevinmamaqi.com/static/casas/1.jpg',
          type: 'garaje',
          city: 'madrid',
          district: 'Gotic',
          published: true,
          createdAt: '2020-05-01T00:00:00.000Z',
          updatedAt: '2020-05-01T00:00:00.000Z',
        },
        {
          id: 2,
          title: 'Piso 2',
          price: 838000,
          image: 'https://kevinmamaqi.com/static/casas/2.jpg',
          type: 'chalets',
          city: 'barcelona',
          district: 'Barceloneta',
          createdAt: '2020-03-04T00:13:44.000Z',
          updatedAt: '2020-03-04T00:13:44.000Z',
        },
      ]),
    ),
  ),
]
