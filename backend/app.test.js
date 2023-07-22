// import { toBeOneOf } from 'jest-extended';
// expect.extend({toBeOneOf});
const request = require('supertest');
const express = require('express');
//const mongoose = require('mongoose');
const app = require('./index'); // Asegúrate de que el archivo se llame app.js y esté en el mismo directorio

describe('Test de la API', () => {
  it('Debería responder "Va corriendo" en la ruta raíz', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Va corriendo');
  });

  it('Debería registrar un nuevo usuario', async () => {
    const response = await request(app)
      .post('/signup')
      .send({
        firstname: 'Kevin',
        lastname: 'Doe',
        email: 'Correoprueba5@yahoo.com',
        password: 'password123',
        confirmpassword: 'password123',
        image: 'profile.jpg',
      });
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Email is already registered');
  });

  it('Debería iniciar sesión con un usuario registrado', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        email: 'Correoprueba5@yahoo.com',
        password: 'password123',
      });
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('You logged in successfully');
    expect(response.body.alert).toBe(true);
    expect(response.body.data).toBeDefined();
  });

  // it('Debería cargar un producto', async () => {
  //   const response = await request(app)
  //     .post('/uploadProducts')
  //     .send({
  //       name: 'Product 1',
  //       category: 'Category 1',
  //       image: 'product.jpg',
  //       price: '19.99',
  //       description: 'This is a product description.',
  //     });
  //   expect(response.statusCode).toBe(200);
  //   expect(response.body.message).toBe('Product Uploaded 🤩');
  // });

  it('Debería obtener una lista de productos', async () => {
    const response = await request(app).get('/product');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
  }, 30000);
});



