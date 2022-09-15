import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { Pet } from './pet.entity';

@Injectable()
export class PetsService {
    constructor(@InjectRepository(Pet) private petsRespository: Repository<Pet>) {}

    async createPet(createPetInput: CreatePetInput):Promise<Pet> {
        const newPet = this.petsRespository.create(createPetInput);
        return this.petsRespository.save(newPet);
    }
    async findAll(): Promise<Pet[]>  {
        return this.petsRespository.find();
    }

    async findOne(id): Promise<Pet> {
        const data  =  await this.petsRespository.findOneOrFail({where: id})
        return this.petsRespository.findOneBy({id: id})
    }
}
