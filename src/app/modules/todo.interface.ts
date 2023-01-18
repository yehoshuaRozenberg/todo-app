export interface Itodo{
    title: string;
    description: string;
    isCompleted: boolean;
    isArchived: boolean;
    endDate: Date | number | string;
}