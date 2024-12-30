import { Controller, Get, Param, Query } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private restaurantsService: RestaurantsService) {}

  @Get()
  async getNearbyRestaurants(@Query('lat') lat: number, @Query('lng') lng: number) {
    return this.restaurantsService.getNearbyRestaurants(lat, lng);
  }

  @Get(':id')
  async getRestaurantDetails(@Param('id') id: string) {
    return this.restaurantsService.getRestaurantDetails(id);
  }
}

