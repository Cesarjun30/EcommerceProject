const express = require('express');
const request = require('supertest');
const app = express();
const mongoose = require('mongoose');

// describe("VER", ()=>{
//     test("Trying", ()=>{
//         expect(true).toBe(true);
//     });
// }) ;

// describe('POST /signup', ()=>{
//     beforeAll(async () =>{
//          await mongoose.connect("mongodb+srv://cesarjun30:Ecommercegrupo2@ecommerce-project.a03h5d7.mongodb.net/ecommerceproject?retryWrites=true&w=majority");
//     }); 
//     afterAll(async () => {
//          await mongoose.disconnect();
//      });
//        let response;
//     //    beforeEach(async ()=> {
//     //     response = await request(app).post(JSON)).send();
//     //    });
//     test('creacion de usuario', async ()=>{
//         response = await request(app).post(JSON).send();      
//     });
// });

// Realiza una prueba de registro de usuario
async function testSignup() {
    const user = {
      firstname: "John",
      lastname: "Doe",
      email: "johndoe@example.com",
      password: "password123",
      confirmpassword: "password123",
      image: "profile.jpg",
    };
  
    try {
      const response = await fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Realiza una prueba de inicio de sesión
  async function testLogin() {
    const credentials = {
      email: "johndoe@example.com",
      password: "password123",
    };
  
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Realiza una prueba de carga de productos
  async function testUploadProducts() {
    const product = {
      name: "Product 1",
      category: "Category 1",
      image: "product.jpg",
      price: "19.99",
      description: "This is a product description.",
    };
  
    try {
      const response = await fetch("http://localhost:8080/uploadProducts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Realiza una prueba de obtención de productos
  async function testGetProducts() {
    try {
      const response = await fetch("http://localhost:8080/product");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Ejecutar las pruebas
  testSignup();
  testLogin();
  testUploadProducts();
  testGetProducts();