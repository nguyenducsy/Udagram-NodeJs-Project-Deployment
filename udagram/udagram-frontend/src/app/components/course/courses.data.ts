export interface  Courses {
    id: number;
    name: string;
    cost: string;
    duration: string;
    teacher: string;
    numberOfLessons: string;
    registered: boolean
  }
  
  export const EnglishCourses: Courses[] = [
    {
      id: 1,
      name: "Basic English",
      cost: "$50",
      duration: "2 weeks",
      teacher: "Emily Clark",
      numberOfLessons: "5",
      registered: false
    },
    {
      id: 2,
      name: "Intermediate English",
      cost: "$75",
      duration: "3 weeks",
      teacher: "William Johnson",
      numberOfLessons: "8",
      registered: false
    },
    {
      id: 3,
      name: "Advanced English",
      cost: "$100",
      duration: "4 weeks",
      teacher: "Sophia Lee",
      numberOfLessons: "10",
      registered: false
    },
    {
      id: 4,
      name: "Business English",
      cost: "$120",
      duration: "5 weeks",
      teacher: "James Brown",
      numberOfLessons: "12",
      registered: false
    },
    {
      id: 5,
      name: "English Conversation",
      cost: "$60",
      duration: "2 weeks",
      teacher: "Olivia Smith",
      numberOfLessons: "6",
      registered: false
    },
    {
      id: 6,
      name: "English for Travel",
      cost: "$70",
      duration: "3 weeks",
      teacher: "Liam Williams",
      numberOfLessons: "7",
      registered: false
    },
    {
      id: 7,
      name: "English Grammar",
      cost: "$80",
      duration: "4 weeks",
      teacher: "Charlotte Miller",
      numberOfLessons: "9",
      registered: false
    },
    {
      id: 8,
      name: "English Writing",
      cost: "$90",
      duration: "5 weeks",
      teacher: "Benjamin Davis",
      numberOfLessons: "10",
      registered: false
    },
    {
      id: 9,
      name: "English for Exams",
      cost: "$110",
      duration: "6 weeks",
      teacher: "Amelia Garcia",
      numberOfLessons: "13",
      registered: false
    },
    {
      id: 10,
      name: "English Pronunciation",
      cost: "$65",
      duration: "2 weeks",
      teacher: "Lucas Martinez",
      numberOfLessons: "5",
      registered: false
    }
  ];