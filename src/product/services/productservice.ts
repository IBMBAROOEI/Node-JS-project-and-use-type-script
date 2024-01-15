import {IProduct}from '../models/productmodel';
import express from 'express';
import { Request, Response } from 'express';

import { ResponseHandler } from '../response/Response';


export class Productservice {


    private responseHandler;

    constructor(){
        this.responseHandler= new ResponseHandler();
    }

    public async updateproduct(id: string, updateData: any, res: Response) {
      try {

         console.log(updateData);
        const updateproduct = await IProduct.findByIdAndUpdate(id, updateData, { new: true });
    
        if (!updateproduct) {
          this.responseHandler.setSuccess(false);
          this.responseHandler.addError('محصولی با این شناسه یافت نشد.');
          return res.status(404).json(this.responseHandler.getResponse());
        }
    
        this.responseHandler.setSuccess(true);
        this.responseHandler.setData(updateproduct);
        this.responseHandler.setMessage('با موفقیت انجام شد.');
        return res.status(200).json(this.responseHandler.getResponse());
      } catch (error) {
        console.error('مشکلی در ایجاد محصول رخ داد.', error);
    
        this.responseHandler.setSuccess(false);
        this.responseHandler.addError('مشکلی در سرور رخ داده است.');
    
        return res.status(500).json(this.responseHandler.getResponse());
      }
    }





    public async getproduct(res:Response){

        try{

            const products=await IProduct.find();

            if(products.length ===0){

              this.responseHandler.setSuccess(false);
              this.responseHandler.addError('هیج محصولی یافت نشد ');
              res.status(404).json(this.responseHandler.getResponse());
            }
            this.responseHandler.setSuccess(true);
            this.responseHandler.setData(products);
            res.status(200).json(this.responseHandler.getResponse());

        }catch(error){
          console.error('مشکلی در نمایش محصول رخ داد.', error);
          this.responseHandler.setSuccess(false);
           this.responseHandler.addError('مشکلی در سرور رخ داده است.');
       
           res.status(500).json(this.responseHandler.getResponse());  
        }


    }


 
    
   
    public async deleproduct(id: string,res:Response): Promise<void> {
        try {
          const delproduct= await IProduct.findByIdAndDelete(id);
          this.responseHandler.setSuccess(true);
          res.status(204).json(this.responseHandler.getResponse());


        } catch (error: any) {
          this.responseHandler.setSuccess(false);
              this.responseHandler.addError('مشکلی در سرور رخ داده است.');
          
              res.status(500).json(this.responseHandler.getResponse());  
        }
      }


  public async createproduct(req:Request,res:Response): Promise<void> {
    try {


              const { name, price, description } = req.body;

           
              const createdProduct =new IProduct( {name, price, description });
              
          
              await createdProduct.save();

              this.responseHandler.setSuccess(true);
              

             this.responseHandler.setData(createdProduct);
             this.responseHandler.setMessage("با موفقیت انجام شد");
           
              res.status(201).json(this.responseHandler.getResponse());
               
               
               
            } catch (error) {
              console.error('مشکلی در ایجاد محصول رخ داد.', error);
          
             this.responseHandler.setSuccess(false);
              this.responseHandler.addError('مشکلی در سرور رخ داده است.');
          
              res.status(500).json(this.responseHandler.getResponse());            

            }
        }
    

}