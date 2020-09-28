export default function () {
  this.get('/comments', function () {
    return {
      data: [
        {
          id: '1',
          type: 'comments',
          attributes: {
            body: 'Looking forward to using all the new features!',
          },
          relationships: {
            content: {
              data: { id: '1', type: 'posts' },
            },
          },
        },
        {
          id: '2',
          type: 'comments',
          attributes: {
            body: 'Great video! Please make more!',
          },
          relationships: {
            content: {
              data: { id: '2', type: 'videos' },
            },
          },
        },
      ],
      included: [
        {
          id: '1',
          type: 'posts',
          attributes: {
            title: 'Ember Octane Released',
          },
          relationships: {
            comments: {
              data: [{ id: '1', type: 'comments' }],
            },
          },
        },
        {
          id: '2',
          type: 'videos',
          attributes: {
            title: 'Introduction to Ember.js',
          },
          relationships: {
            comments: {
              data: [{ id: '2', type: 'comments' }],
            },
          },
        },
      ],
    };
  });

  this.post('/comments', function (schema, request) {
    return {
      data: {
        id: String(Math.random()),
        type: 'comments',
        attributes: JSON.parse(request.requestBody),
      },
    };
  });

  this.get('/users/:id', function () {
    return {
      data: {
        id: '1',
        type: 'users',
        attributes: {
          name: 'David',
        },
        relationships: {
          'purchased-products': {
            data: [
              { id: '5', type: 'courses' },
              { id: '10', type: 'books' },
            ],
          },
        },
      },
    };
  });

  this.get('/products', function () {
    return {
      data: [
        {
          id: '5',
          type: 'course',
          attributes: {
            title: 'Introduction to Ember Octane',
            length: '2 hours',
          },
        },
        {
          id: '10',
          type: 'book',
          attributes: {
            title: 'Ember Data in the Wild',
            pages: 100,
          },
        },
      ],
    };
  });
}
