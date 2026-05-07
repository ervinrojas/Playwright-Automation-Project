import { test, expect } from '@playwright/test';
import { TestDataProvider } from '../src/utils/TestDataProvider';

test.describe('Ejercicios de Estructuras de Datos', () => {

  test('Ejercicio 1: Obtener lista de 5 usuarios (Array/List)', async () => {
    const users = TestDataProvider.getFiveUsers();
    
    console.log('--- Ejercicio 1: Usuarios Generados ---');
    users.forEach((user, index) => {
      console.log(`${index + 1}. ${user.fullName()} (${user.getEmail()})`);
    });

    expect(users.length).toBe(5);
    expect(users[0].getEmail()).toContain('user1');
  });

  test('Ejercicio 2: Lookup de URL por Entorno (Map/Dictionary)', async () => {
    const devUrl = TestDataProvider.getBaseUrl('dev');
    const prodUrl = TestDataProvider.getBaseUrl('prod');
    const unknownUrl = TestDataProvider.getBaseUrl('qa'); 

    console.log('--- Ejercicio 2: Mapeo de URLs ---');
    console.log(`DEV URL: ${devUrl}`);
    console.log(`PROD URL: ${prodUrl}`);
    console.log(`UNKNOWN (QA) URL: ${unknownUrl}`);

    expect(devUrl).toBe('https://dev.api.example.com');
    expect(prodUrl).toBe('https://api.example.com');
    expect(unknownUrl).toBe('https://dev.api.example.com');
  });

  test('Ejercicio 3: Detectar duplicados en emails (Set)', async () => {
    const generatedEmails = [
      'test1@example.com',
      'test2@example.com',
      'test1@example.com', 
      'test3@example.com',
      'test2@example.com'  
    ];

    console.log('--- Ejercicio 3: Detección de Duplicados ---');
    console.log('Emails generados:', generatedEmails);

    const uniqueEmails = new Set(generatedEmails);
    
    console.log('Emails únicos (usando Set):', Array.from(uniqueEmails));

    const hasDuplicates = uniqueEmails.size < generatedEmails.length;
    
    console.log(`¿Hay duplicados?: ${hasDuplicates}`);
    console.log(`Cantidad original: ${generatedEmails.length}, Únicos: ${uniqueEmails.size}`);

    expect(hasDuplicates).toBe(true);
    expect(uniqueEmails.size).toBe(3);
  });

});
