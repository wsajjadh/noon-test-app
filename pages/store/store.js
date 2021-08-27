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
          favorite: false,
        },
        {
          userName: "Iron Man",
          profileUrl: "/user-one.jpg",
          postId: 2,
          postImageUrl: "/image-one.jpg",
          postTitle: "Good Cat",
          postDescription: "Some lorem here",
          price: "999",
          totalLikes: 1000,
          totalComments: 999999,
          tags: ["lol", "working?", "I am the best"],
          favorite: false,
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
          favorite: false,
        },
      ],
      favorites: [],
    };
  }

  fetchPosts() {
    return new Promise((resolve) => {
      // Simulating like api response by delaying
      resolve(this.state.posts);
      /* setTimeout(() => {
        resolve(this.state.posts);
      }, 2000); */
    });
  }

  addToFavorite(id) {
    return new Promise((resolve) => {
      this.isExistInFavorite(id)
        .then(() => {
          // console.log(`success`);
          // Not exists, Push to array
          // unshift to push at 1st, So we may get fav order
          this.state.favorites.unshift(id);
          this.updateFavorite(id, true);
          resolve();
        })
        .catch((error) => {
          // console.log(`reject => `, error);
          // Exist, remove from the array
          // Simply I use filter to remove from fav
          this.state.favorites = this.state.favorites.filter(
            (fav) => fav != id
          );
          this.updateFavorite(id, false);
          resolve();
        });
    });
  }

  // I keep this function to show like reacting to changes.
  updateFavorite(id, value) {
    const post = this.state.posts.find((post) => post.postId == id);
    post.favorite = value;
  }

  isExistInFavorite(id) {
    return new Promise((resolve, reject) => {
      // Reject if it is found, else resolve to add
      this.state.favorites.includes(id) ? reject() : resolve();
    });
  }

  fetchFavorites() {
    return new Promise((resolve, reject) => {
      const favorites = this.state.favorites;
      // console.log(`favs => `, favorites);
      let posts = [];
      // Check favorites empty or not
      if (favorites.length == 0) {
        reject();
        return;
      }

      // loop favorites to get post id
      favorites.forEach((id) => {
        // find posts
        const found = this.state.posts.find((post) => id == post.postId);
        // If found, push to post
        found && posts.push(found);
      });

      resolve(posts);
    });
  }
}

export default new Store();
