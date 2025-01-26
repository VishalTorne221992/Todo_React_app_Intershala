import { v4 as uuidv4 } from 'uuid';

export const todolist = [
    {
        id:uuidv4(),
        name: "Brushing Teeth",
        isCompleted : false
    },
    {
        id:uuidv4(),
        name: "Meeting",
        isCompleted : false
    },
    {
        id:uuidv4(),
        name: "Having Lunch",
        isCompleted : false
    }
]