const employeeList = [
    {
        "id" : 1,
        "name" : "John Doe",
        "position" : "CEO & Co-Founder",
        "image" : "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=26f427f929772c4a2bb1da62b3edca86&auto=format&fit=crop&w=800&q=60",
        "bio" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        "id" : 2,
        "name" : "Jane Doe",
        "position" : "Director of Communications",
        "image" : "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7e89aa20603ea9fe62ddc6014276ca41&auto=format&fit=crop&w=800&q=60",
        "bio" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        "id" : 3,
        "name" : "Ron Doe",
        "position" : "Co-Founder",
        "image" : "https://images.unsplash.com/photo-1525879000488-bff3b1c387cf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=79c830c4f066fc500b70e97f39cab4a7&auto=format&fit=crop&w=800&q=60",
        "bio" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        "id" : 4,
        "name" : "Bill Doe",
        "position" : "President",
        "image" : "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d5e48aaf974a21a3d71e72722a57e03b&auto=format&fit=crop&w=800&q=60",
        "bio" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        "id" : 5,
        "name" : "Sophi Doe",
        "position" : "CEO",
        "image" : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a3fa46375259c39d07d0227e8ade6daa&auto=format&fit=crop&w=800&q=60",
        "bio" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        "id" : 6,
        "name" : "John Doe",
        "position" : "CEO",
        "image" : "https://images.unsplash.com/photo-1529808431514-65ce4a3d59f2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eb011da7b9ee20720f6922750c7ce6c9&auto=format&fit=crop&w=800&q=60",
        "bio" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        "id" : 7,
        "name" : "John Doe",
        "position" : "CEO",
        "image" : "https://images.unsplash.com/photo-1525863076872-bd16ca4ceef3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b4ae89335a53ccaf096a8d9e3c32f6d2&auto=format&fit=crop&w=800&q=60",
        "bio" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        "id" : 8,
        "name" : "John Doe",
        "position" : "CEO",
        "image" : "https://images.unsplash.com/photo-1520295187453-cd239786490c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eeee65a6be46965c1e7f058e7bf1783f&auto=format&fit=crop&w=800&q=60",
        "bio" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        "id" : 9,
        "name" : "John Doe",
        "position" : "CEO",
        "image" : "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63ff45d79414b3166b08b800a32018be&auto=format&fit=crop&w=800&q=60",
        "bio" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        "id" : 10,
        "name" : "John Doe",
        "position" : "CEO",
        "image" : "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b6ded683923a678ad03fae323169beb4&auto=format&fit=crop&w=800&q=60",
        "bio" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        "id" : 11,
        "name" : "John Doe",
        "position" : "CEO",
        "image" : "https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa796277aadb1d4149e0c39c5b02115d&auto=format&fit=crop&w=800&q=60",
        "bio" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
]

export default employeeList;