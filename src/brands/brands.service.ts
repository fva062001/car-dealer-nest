import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [];

  create(createBrandDto: CreateBrandDto) {
    const newBrand = {
      id: uuid(),
      ...createBrandDto,
      createdAt: Date.now(),
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand: Brand) => brand.id === id);
    if (!brand) throw new NotFoundException(`Brand with id ${id} not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand = this.findOne(id);
    const index = this.brands.findIndex((brand: Brand) => brand.id === id);
    this.brands[index] = {
      ...brand,
      ...updateBrandDto,
      updatedAt: Date.now(),
    };
    return this.brands[index];
  }

  remove(id: string) {
    this.findOne(id);
    this.brands = this.brands.filter((brand: Brand) => brand.id !== id);
    return true;
  }

  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
