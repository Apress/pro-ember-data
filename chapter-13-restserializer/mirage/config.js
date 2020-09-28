export default function () {
  this.get('/comments', function () {
    return {
      comments: [
        {
          id: '1',
          body: 'Looking forward to using all the new features!',
          content: {
            id: '1',
            type: 'post',
          },
        },
        {
          id: '2',
          body: 'Great video! Please make more!',
          content: {
            id: '2',
            type: 'video',
          },
        },
      ],
      posts: [
        {
          id: '1',
          title: 'Ember Octane Released',
          wordCount: 300,
          comments: ['1'],
        },
      ],
      videos: [
        {
          id: '2',
          title: 'Introduction to Ember.js',
          length: 300,
          comments: ['2'],
        },
      ],
    };
  });

  this.post('/comments', function (schema, request) {
    return {
      comment: Object.assign(
        {
          id: String(Math.random()),
        },
        JSON.parse(request.requestBody)
      ),
    };
  });

  this.get('/users/:id', function () {
    return {
      users: {
        id: '1',
        name: 'David',
        purchasedProducts: [
          { id: '5', type: 'course' },
          { id: '10', type: 'book' },
        ],
      },
    };
  });

  this.get('/products', function () {
    return {
      courses: [
        {
          id: '5',
          title: 'Introduction to Ember Octane',
          length: '2 hours',
        },
        {
          id: '15',
          title: 'Getting started with Glimmer Components',
          length: '1 hour',
        },
      ],
      books: [
        {
          id: '10',
          title: 'Ember Data in the Wild',
          pages: 100,
        },
      ],
      // products: [
      //   {
      //     id: '5',
      //     type: 'course',
      //     title: 'Introduction to Ember Octane',
      //     length: '2 hours'
      //   },
      //   {
      //     id: '10',
      //     type: 'book',
      //     title: 'Ember Data in the Wild',
      //     pages: 100
      //   }
      // ]
    };
  });
}
