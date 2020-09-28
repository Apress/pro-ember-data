export default function () {
  this.get('/comments', function () {
    return [
      {
        id: '1',
        body: 'Looking forward to using all the new features!',
        content: { id: '1', type: 'post' },
      },
      {
        id: '2',
        body: 'Great video! Please make more!',
        content: { id: '2', type: 'video' },
      },
    ];
  });

  this.get('/posts', function () {
    return [
      {
        id: '1',
        title: 'Ember Octane Released',
        comments: ['1'],
      },
    ];
  });

  this.get('/videos', function () {
    return [
      {
        id: '2',
        title: 'Introduction to Ember.js',
        comments: ['2'],
      },
    ];
  });

  this.post('/comments', function (schema, request) {
    const requestPayload = JSON.parse(request.requestBody);
    return Object.assign(requestPayload, {
      id: String(Math.random()),
      content: {
        id: requestPayload.content,
        type: requestPayload.contentType,
      },
    });
  });

  this.get('/users/:id', function () {
    return {
      id: '1',
      name: 'David',
      purchasedProducts: [
        { id: '5', type: 'course' },
        { id: '10', type: 'book' },
      ],
    };
  });

  this.get('/courses', function () {
    return [
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
    ];
  });

  this.get('/books', function () {
    return [
      {
        id: '10',
        title: 'Ember Data in the Wild',
        pages: 100,
      },
    ];
  });
}
