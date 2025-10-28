// Simulate fetching posts from a database
const posts = [
    {
        id: 1,
        title: "Understanding JavaScript Closures",
        body: "A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).\n\nIn other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time."
    },
    {
        id: 2,
        title: "A Guide to CSS Flexbox",
        body: "Flexbox is a one-dimensional layout model that offers an efficient way to lay out, align, and distribute space among items in a container, even when their size is unknown or dynamic.\n\nKey properties include:\n- display: flex\n- flex-direction: row | column\n- justify-content: center | space-between | ...\n- align-items: center | flex-start | ..."
    },
    {
        id: 3,
        title: "What is an API?",
        body: "API stands for Application Programming Interface. It's a set of rules and protocols that allows different software applications to communicate with each other.\n\nThink of it as a waiter in a restaurant. You (the client) tell the waiter (the API) what you want, and the waiter goes to the kitchen (the server) to get it for you and bring it back."
    }
];

const postsList = document.getElementById("posts-list");
const postTitle = document.getElementById("post-title");
const postBody = document.getElementById("post-body");

// 1. Populate the sidebar with post titles
function loadPostTitles() {
    postsList.innerHTML = ""; // Clear existing list
    posts.forEach(post => {
        const li = document.createElement("li");
        li.innerText = post.title;
        li.dataset.id = post.id; // Store the post ID on the element
        postsList.appendChild(li);
    });
}

// 2. Add click event listener to the list
postsList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        const postId = parseInt(e.target.dataset.id);
        displayPost(postId);
    }
});

// 3. Function to find and display the full post
function displayPost(id) {
    // Find the post in our 'database'
    const post = posts.find(p => p.id === id);
    
    if (post) {
        postTitle.innerText = post.title;
        postBody.innerText = post.body;
    }
}

// Load the titles when the page starts
loadPostTitles();