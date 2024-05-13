// test.js
const { spec } = require('pactum');

it('should get a response with status code 200', async () => {
  await spec()
    .get('http://httpbin.org/status/200')
    .expectStatus(200);
});

it('should get first post', async () => {
  await spec()
    .get('http://jsonplaceholder.typicode.com/posts/1')
    .expectStatus(200)
    .expectJsonLike({
      "userId": 1,
      "id": 1
    })
});

it('should get single user', async () => {
  await spec()
    .get('https://reqres.in/api/users/2')
    .expectStatus(200)
    .expectJsonLike({
      "data": {
          "id": 2,
          "email": "janet.weaver@reqres.in",
          "first_name": "Janet",
          "last_name": "Weaver",
          "avatar": "https://reqres.in/img/faces/2-image.jpg"
      },
      "support": {
          "url": "https://reqres.in/#support-heading",
          "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
      }
  });
});
