// src/components/projectsData.js
import recipeImage from '../assets/traditional-dominican-dessert.png';
import craft from '../assets/stirs.png';
import privatepo from '../assets/private.png';
import quizap from '../assets/learn-quiz.png';
import book from '../assets/book.png';
import todo from '../assets/todoapp.png';
import project5 from '../assets/projects5.png';
import paycheck from '../assets/paycheck.png';



const projects = [
  {
    id: 1,
    title: 'Traditional Dominican Recipes',
    description: 'This project is a webpage built using the MERN stack that allows users to place orders for different desserts available in the store.',
    concept: 'Allow the users make orders of the traditional dominican dessert availaible in the store.',
    technologies: ['Mongoose', 'Express','React', 'Bootstrap', 'Node.js','Postman','Heroku','Vercel'],
    features: ['Browse recipes', 'Images included', 'Responsive design'],
    live: 'https://frontend-oi20vm80e-mileiny-s-projects.vercel.app/',
    code: 'https://github.com/mileiny1/frontend',
    image: recipeImage,
  },
  {
    id: 2,
    title: 'Stirs Craft Cocktails',
    description: 'A sophisticated Django web application for cocktail enthusiasts, bartenders, and culinary professionals. Team lead for production-ready platform with comprehensive social features, advanced database relationships, and professional deployment Sophisticated demo data system with 15+ themed users, 316 total favorites, and 209 professional cocktails with metadata.',

    concept: 'Cocktail recipe manager built with full-stack tools.',
    technologies: ['Django', 'Python', 'PostgreSQL', 'Bootstrap', 'CSS', 'Heroku'],
    features: ['Modern, responsive design, user authentication, social features, advanced database relationships, production deployment'],
    live: 'https://stircraft-app-0dd06cf5d30a.herokuapp.com/',
    code: 'https://github.com/mileiny1/stir-craft',
    image: craft,
  },
  {
    id: 3,
    title: 'To Do List App',
    description: 'Help users manage and organize their tasks effectively.',
    concept: 'Task management that helps users stay organized and productive.',
    technologies: ['React', 'Node.js', 'CSS','Vercel'],
    features: ['Modern Web Design', 'Add, delete tasks', 'Responsive layout'],
    live: 'https://to-do-app-azure-eta.vercel.app/',
    code: 'https://github.com/mileiny1/To-Do-App',
    image: todo,
  },
  {
    id: 4,
    title: 'Quiz App Language Learning',
    description: 'Interactive language learning quiz app.',
    concept: 'Educational game for practicing languages.',
    technologies: ['React', 'Typescript', 'CSS','Vercel'],
    features: ['Timed quizzes', 'Score tracking', 'Multiple languages'],
    live: 'https://language-quiz-gray.vercel.app/',
    code: 'https://github.com/mileiny1/language-quiz',
    image: quizap,
  },
  {
    id: 5,
    title: 'Book Tracker',
    description: 'Review and manage books with ratings and notes.',
    concept: 'Book Tracker is a simple, friendly way to organize the books you read, want to read, and love. It started as a passion project to help readers stay consistent and discover patterns in their reading habits.',
    technologies: ['React', 'Bootstrap', 'CSS','Vercel'],
    features: ['Add books', 'Rate & review', 'Search & filter'],
    live: 'https://book-tracker-eight-ivory.vercel.app/',
    code: 'https://github.com/mileiny1/Book-Tracker/tree/main',
    image: book,
  },

  {
    id: 6,
    title: 'Vet Connect',
    description: 'A web application designed to connect pet owners with veterinary services. The platform provides an easy way for users to manage appointments times, store pet information, and communicate with veterinary professionals.',
    concept: 'Connecting pet owners with veterinary services.',
    technologies: ['Python', 'Django', 'SQL', 'HTML', 'Bootstrap', 'CSS','Javascript','Heroku'],
    features: ['User authentication, appointment scheduling, vet directory, responsive design'],
    live: 'https://vetconnect-57f3b024748b.herokuapp.com/appointments/',
    code: 'https://github.com/mileiny1/VetConnect',
    image: project5,
  },
  {
    id: 7,
    title: 'Paycheck Calculator',
    description: 'A simple paycheck calculator web application that helps users calculate their net pay after taxes and deductions and also provides a bookfinder for books and students directory and guestbook for students and teachers.',
    concept: 'A tool to calculate net pay based on user input. It also includes a bookfinder, student directory, and guestbook. The bookfinder allows users to search for books by title or author, the student directory provides information about students, and the guestbook allows users to leave messages. The guestbook is a space where users can leave messages and connect with each other. The student directory is a list of students with their contact information, and the bookfinder is a search tool that allows users to find books by title or author. ',
    technologies: ['Bootstrap', 'HTML', 'CSS','PHP','MySQL'],
    features: ['User-friendly interface', 'Tax calculations', 'Responsive design'],
    live: 'https://mileinyproject.infinityfree.me/index.php',
    code: 'https://github.com/mileiny1/Paycheck-Calculator-Student-Directory-Web-Application',
    image: paycheck,
  } 

];


export default projects;
