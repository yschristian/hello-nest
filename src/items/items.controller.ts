import { Controller, Get,Post, Delete, Put, Body, Param} from '@nestjs/common';
import { CreateItemDto } from './dto/create_items.dto';
import { ItemsService } from './items.service';
import { Item } from './Interfaces/item.interface';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService){}
    
    @Get()
    async findAll(): Promise<Item[]> {
        return this.itemsService.findAll() ;
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<Item>{
        // return `Item ${param.id}`
        return this.itemsService.findOne(id)
    }

    @Post()
    async create(@Body() createItemDto : CreateItemDto ): Promise<Item>{
       // return `Name : ${createItemDto.name} Desc:${createItemDto.description } qty: ${createItemDto.qty}`
       return this.itemsService.create(createItemDto)
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Item>{
        return  this.delete(id)
    }

    @Put(':id')
    async update(@Body() updateItemDto: CreateItemDto, @Param('id') id):Promise<Item>{
        return this.itemsService.update(id , updateItemDto)
    }
}

