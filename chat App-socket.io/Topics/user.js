const users = []

//addUser, removeUser, getUser, getUserInRoom

const addUser = ({ id, username, room }) => {
    //clean the data

    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //validate the data

    if (!username || !room) {
        return {
            error: "username & room is required"
        }

    }
    //checking for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username

    })

    //validate username

    if (existingUser) {
        return {
            error: `User already exist ${username} `
        }
    }
    //store user
    const user = { id, username, room }

    users.push(user)
    return { user }
}
addUser({
    id: 22,
    username: 'xyz',
    room: "bangalore"

})

const res = addUser({
    id: 22,
    username: '',
    room: ""

})
console.log(users);
console.log(res);
