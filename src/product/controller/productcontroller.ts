import { Request, Response } from 'express';
import { Productservice } from '../services/productservice';

 const productservice = new Productservice();


//  import {Apiresponse } from '../response/Response'
export class Productcontroller {

  // constructor() {
  // }



 


  public  async updateproduct(req: Request, res: Response) {
    
   const id = req.params.id;

   await productservice.updateproduct(id,req.body,res);
  }



  public  async create(req: Request, res: Response) {
    
   return  await productservice.createproduct(req,res)
}


 

  public async deleproduct(req: Request, res: Response) {
   
       const id = req.params.id;
      return  await productservice.deleproduct(id, res);
  
}




   public  async getproduct(req: Request, res: Response){

     return await productservice.getproduct(res);
   
 
   }
}