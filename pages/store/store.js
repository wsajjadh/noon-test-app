class Store {
  constructor() {
    this.state = {
      posts: [
        {
          userName: "Prashanthi Shanmugasundaram",
          profileUrl: "/user-two.jpg",
          postId: 1,
          postImageUrl: "/image-two.jpg",
          postTitle: "Good girl from Noon",
          postDescription: "Thanks for contacting me for the test",
          price: "250",
          totalLikes: 32,
          totalComments: 12,
          tags: ["cat", "fluffy", "black"],
        },
        {
          userName: "Iron Man",
          profileUrl: "/user-one.jpg",
          postId: 2,
          postImageUrl: "/image-one.jpg",
          postTitle: "Bad Cat",
          postDescription: "Some lorem here",
          price: "999",
          totalLikes: 1000,
          totalComments: 999999,
          tags: ["lol", "working?", "I am the best"],
        },
        {
          userName: "WS The Great",
          profileUrl: "/user-three.jpg",
          postId: 3,
          postImageUrl: "/image-three.jpg",
          postTitle: "I am the best, Always",
          postDescription:
            "I know I am  the best but don't take it seriously and do not reject my application",
          price: "1250",
          totalLikes: 67,
          totalComments: 3,
          tags: ["tiger", "bahaha", "pushycat"],
        },
      ],
      favorites: [],
    };
  }

  fetchPosts() {
    return new Promise((resolve) => {
      //   Simulating like api response by delaying
      setTimeout(() => {
        resolve(this.state.posts);
      }, 2000);
    });
  }

  getDetails() {
    return new Promise((resolve) => {
      //   Simulating like api response by delaying
      setTimeout(() => {
        resolve(this.state);
      }, 2000);
    });
  }
}

export default new Store();
