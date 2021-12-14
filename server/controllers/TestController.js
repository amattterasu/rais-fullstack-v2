class TestController {
  getTest(req, res) {
    const test = [
      {
        id: 1,
        title: "Post title 1",
        description: "Description post",
        author_id: 7,
      },
      {
        id: 2,
        title: "Post title 2",
        description: "Description post",
        author_id: 4,
      },
      {
        id: 3,
        title: "Post title 3",
        description: "Description post",
        author_id: 4,
      },
      {
        id: 4,
        title: "Post title 4",
        description: "Description post",
        author_id: 7,
      },
    ];

    res.send(JSON.stringify(test));
  }
}

export default new TestController();
