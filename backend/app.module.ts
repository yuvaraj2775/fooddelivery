import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    AuthModule,
    RestaurantsModule,
    OrdersModule,
    UsersModule,
    PrismaModule,
  ],
})
export class AppModule {}

