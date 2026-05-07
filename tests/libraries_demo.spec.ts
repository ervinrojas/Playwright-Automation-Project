import { test, expect } from '@playwright/test';
import _ from 'lodash';
import { format } from 'date-fns';
import { faker } from '@faker-js/faker';

test.describe('Ejercicio 1: Trabajando con Librerías', () => {

  test('Uso de lodash, date-fns y faker', async () => {
    console.log('--- Demostración de Librerías ---');

    const randomUser = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      address: faker.location.streetAddress()
    };
    console.log('Datos generados con Faker:', randomUser);

    const now = new Date();
    const formattedDate = format(now, 'eeee, do MMMM yyyy');
    console.log('Fecha formateada con date-fns:', formattedDate);

    const items = [1, 2, 2, 3, 4, 4, 5];
    const uniqueItems = _.uniq(items);
    console.log('Items originales:', items);
    console.log('Items únicos con lodash:', uniqueItems);

    expect(randomUser.name).toBeDefined();
    expect(formattedDate).toContain('2026');
    expect(uniqueItems.length).toBe(5);
  });

});
