import { Injectable } from '@nestjs/common';
import { Item } from "./Interfaces/item.interface"
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly ItemModel: Model<Item>) { }
    // private readonly items : Item[]=[
    //     {
    //         id:"3647364372",
    //         name:"item one",
    //         qty:100,
    //         description:"this is item one"
    //     },
    //     {
    //         id:"3647364232",
    //         name:"item Two",
    //         qty:50,
    //         description:"This is item two"
    //     }
    // ];
    async findAll(): Promise<Item[]> {
        return await this.ItemModel.find()
    }
    async findOne(id: string): Promise<Item> {
        return await this.ItemModel.findOne({ _id: id })
    }
    async create(item: Item): Promise<Item> {
        const newItem = new this.ItemModel(item)
        return await newItem.save()
    }
    async delete(id: string): Promise<Item> {
        return await this.ItemModel.findByIdAndRemove(id)
    }
    async update(id: string, item:Item): Promise<Item> {
            return this.ItemModel.findByIdAndUpdate(id, item , {new: true})
    }
}
