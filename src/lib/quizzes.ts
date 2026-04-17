export type Quiz = {
    id: string;
    title: string;
    answers: string[];
};

export const quizzes: Quiz[] = [
    {
        id: "us-states",
        title: "U.S. States",
        answers: [
            "Alabama", "Alaska", "Arizona", "Arkansas", "California",
            "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
            "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
            "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
            "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
            "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
            "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
            "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
            "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
            "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
        ],
    },
    {
        id: "mbta-b-branch",
        title: 'MBTA "B" Branch Stations',
        answers: [
            "Boston College", "South St", "Chestnut Hill Ave", "Chiswick Rd", "Sutherland Rd",
            "Washington St", "Warren St", "Allston St", "Griggs St", "Harvard Ave",
            "Packard's Corner", "Babcock St", "Amory St", "BU Central", "BU East",
            "Blandford St", "Kenmore", "Hynes", "Copley", "Arlington",
            "Boylston", "Park St", "Gov't Center"
        ],
    },
    {
        id: "first-18-elements",
        title: "First 18 Elements",
        answers: [
            "Hydrogen", "Helium", "Lithium", "Beryllium", "Boron",
            "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon",
            "Sodium", "Magnesium", "Aluminum", "Silicon", "Phosphorus",
            "Sulfur", "Chlorine", "Argon"
        ],
    },
];

export function getQuizById(id: string): Quiz | undefined {
    return quizzes.find((q) => q.id === id);
}