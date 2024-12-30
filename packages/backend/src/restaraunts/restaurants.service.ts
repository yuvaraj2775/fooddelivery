import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RestaurantsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.restaurant.findMany();
  }

  async findOne(id: string) {
    return this.prisma.restaurant.findUnique({ where: { id } });
  }
}

