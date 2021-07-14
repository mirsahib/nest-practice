import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductDTO } from './dto/product.dto';
import { Product } from './entity/product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService:ProductService){}

    @Get()
    getProducts():Product[]{
        return this.productService.findAll()
    }
    @Get(':id')
    getProductById(@Param('id')id:string):Product{
        return this.productService.findById(Number(id))
    }

    @Post()
    createProduct(@Body() body:ProductDTO):Product{
        return this.productService.createProduct(body)
    }




}
