import { Link } from 'react-router-dom'
import './App.css'
import phone from './assets/1673516032462.jpeg'
import logo from './assets/logo-linkfly@2x.png'
import React from "react";
import {
  Route,
} from "react-router-dom";
function App() {
  return (
    
       <div className="App ">
       <section className='mt-[20px] w-[100%] flex flex-col items-center justify-center'>
        <div className="container flex flex-col items-center justify-center w-[95%] mx-auto">
            <div div className="content flex items-center justify-center flex-col gap-[10px]">
                <div className="img w-[110px] h-[110px] rounded-full overflow-hidden">
                    <img src={phone} alt="" className='h-[100%] w-[100%]'/>
                </div>
                <div className="discription flex flex-col items-center justify-center gap-[5px] text-white">
                <p> لحجز الجوال يرجى اتباع التعليمات الاتية :-</p>
                    <p>1- اضغط على حجز الآن</p>
                    <p>2- اختر نوع شبكة جوالك</p>
                    <p>3 - ادخل رقم هاتفك واضغط على طلب رمز التحقق</p>
                    <p>4 - سيصلك رمز التحقق فى رسالة</p>
                    <p>5- ضع رمز التحقق واضغط على اشتراك</p>
                </div>
                    <a href='https://u.to/oAuOHA'><button className='lg:w-[600px] md:w-[500px] sm:w-[400px] w-[300px] shadow-lg hover:scale-[1.1] transition duration-300 active:scale-[.9] h-[50px] bg-white rounded-md lg:mt-[40px] md:mt-[30px] sm:mt-[20px] mt-[20px]'> تأكيد رقم الهاتف للحجز</button></a> 

                  <footer className='lg:mt-[200px] md:mt-[300px] sm:mt-[300px] mt-[300px]'>
                <a className='flex items-center gap-[10px]'> <img src={logo} alt="" className='w-[40px] ' /> Made With Linkify</a>
            </footer>
            </div>
          
        </div>
    </section>
    
    </div>
  )
}

export default App
