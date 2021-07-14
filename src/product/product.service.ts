import { Injectable } from '@nestjs/common';
import { ProductDTO } from './dto/product.dto';
import { Product } from './entity/product.entity';

@Injectable()
export class ProductService {
    private product:Product[] = [{id:0,name:'Mir'}]

    findAll():Product[]{
        return this.product
    }

    findById(productID:number):Product{
        return this.product.find(item=>item.id===productID)
    }

    createProduct(product:ProductDTO):Product{
        const newProduct = {id:Date.now(),...product}
        this.product.push(newProduct)
        return newProduct
    }
}
