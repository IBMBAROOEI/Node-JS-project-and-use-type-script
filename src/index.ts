// server.ts

import express, { Application } from 'express';
import productRoute from './product/routes/productRoute';
import mongoose from 'mongoose';




// اتصال به پایگاه داده MongoDB
mongoose
  .connect('mongodb://localhost:27017/test', {
   
  })
  .then(() => {
    console.log('اتصال به پایگاه داده MongoDB برقرار شد.');
  })
  .catch((error) => {
    console.error('مشکلی در اتصال به پایگاه داده MongoDB رخ داد.', error);
  });



const app: Application = express();
const port = process.env.PORT || 5000;

// پارس کردن بدنه‌ی درخواست به صورت JSON
app.use(express.json());

// افزودن مسیرهای مربوط به محصولات
app.use('/api', productRoute);

app.listen(port, () => {
  console.log(`سرور در حال اجراست و درگاه ${port} را گوش می‌دهد.`);
});