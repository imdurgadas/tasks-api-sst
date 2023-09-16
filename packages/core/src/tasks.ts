const tasks: Record<number, any> = {
    1: {
        name: "Youtube video for SST",
        userId: 1,
        content: "lorem epsum...",
        createdAt: Date.now()
    },
    2: {
        name: "This is task 2",
        userId: 10,
        content: "Task 2 content goes here",
        createdAt: Date.now() - 20000
    }
}

export default tasks;