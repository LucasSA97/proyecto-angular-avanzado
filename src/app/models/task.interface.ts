export enum LEVELS{
    "INFO",
    "URGENTE",
    "BLOCKING"
}

export interface ITask{
    title: string;
    description: string;
    completed: boolean;
    level: LEVELS;
}