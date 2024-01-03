// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type Data = {
  name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  await prisma.event.deleteMany()
  await prisma.tags.deleteMany()

  await prisma.tags.createMany({
    data: [
      {
        name: 'Вел',
        color: 'pink',
      },
      {
        name: 'Книга',
        color: 'red',
      },
      {
        name: 'Настолки',
        color: 'green',
      },
    ],
  })

  res.status(200).json({ name: 'hello' })
}
