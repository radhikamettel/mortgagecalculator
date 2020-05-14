//interface for select options with label and id
export interface IOptions {
    id: number;
    label: string;
}

//constant for Amortisation Year dropdwon
export const availableYears: IOptions[] = [
    { id: 1, label: "1 Year" },
    { id: 2, label: "2 Year" },
    { id: 3, label: "3 Year" },
    { id: 4, label: "4 Year" },
    { id: 5, label: "5 Year" },
    { id: 6, label: "6 Year" },
    { id: 7, label: "7 Year" },
    { id: 8, label: "8 Year" },
    { id: 9, label: "9 Year" },
    { id: 10, label: "10 Year" }
];

//constant for Amortisation Month dropdwon
export const availableMonths: IOptions[] = [
    { id: 1, label: "January" },
    { id: 2, label: "February" },
    { id: 3, label: "March" },
    { id: 4, label: "April" },
    { id: 5, label: "May" },
    { id: 6, label: "June" },
    { id: 7, label: "July" },
    { id: 8, label: "August" },
    { id: 9, label: "September" },
    { id: 10, label: "October" },
    { id: 11, label: "November" },
    { id: 12, label: "December" }
];