### Petful Server

Petful is an API for a pet adoption app that utilizes a queue data structure for an orderly. 

Techn Stack: Node.js with Express


GET /people returns an array of strings, representing peoples names in a queue:

```
['Jim Lahey', 'Trevor Cory', '...etc'];

POST /people adds to the end of the queue array.

```
['Jim Lahey', 'Trevor Cory', 'Your name'];

GET /pets returns an array of cat/dog objects in a queue.

```
dogs: [
    {
      age: 3,
      breed: 'Golden Retriever',
      description: 'A smiling golden-brown golden retreiver listening to music.',
      gender: 'Male',
      imageURL: 'https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'Zim',
      story: 'Owner Passed away'
    },
];   

DELETE /pets deletes a key 'dogs' or 'cats' and the value of the single object.


