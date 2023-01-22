export interface Itodo{
    id: string;
    title: string;
    description: string;
    isCompleted: boolean;
    isArchived: boolean;
    endDate: Date | number | string;
    selected: boolean;
}