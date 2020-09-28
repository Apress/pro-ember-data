export default function () {
  this.get('/contacts/:id', function () {
    return {
      contact: {
        id: 1,
        name: 'David'
      }
    };
  });

  this.get('/api/contacts/:id/company', function () {
    return {
      company: {
        id: 7,
        name: 'Company A'
      }
    };
  });

  this.get('/api/contacts/:id/pets', function () {
    return {
      pets: [
        {
          id: 1,
          name: 'Frisky',
          age: 10,
          adopted: true,
          birthday: '2005-11-05T13:15:30Z'
        }
      ]
    };
  });
}
