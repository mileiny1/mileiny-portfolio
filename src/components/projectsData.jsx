// src/components/projectsData.js
import craft from '../assets/stirs.png';
import quizgame from '../assets/quizgame.png';
import todo from '../assets/todoapp.png';
import project5 from '../assets/projects5.png';
import paycheck from '../assets/paycheck.png';
import aifood from '../assets/aifood.png';



const projects = [
 
  {
    id: 1,
    title: 'Stirs Craft Cocktails',
    description: 'A sophisticated Django web application for cocktail enthusiasts, bartenders, and culinary professionals. Team lead for production-ready platform with comprehensive social features, advanced database relationships, and professional deployment Sophisticated demo data system with 15+ themed users, 316 total favorites, and 209 professional cocktails with metadata.',

    concept: 'Cocktail recipe manager built with full-stack tools.',
    technologies: ['Django', 'Python', 'PostgreSQL', 'Bootstrap', 'HTML', 'JavaScript', 'CSS', 'Heroku'],
    features: ['Modern, responsive design, user authentication, social features, advanced database relationships, production deployment'],
    live: 'https://stircraft-app-0dd06cf5d30a.herokuapp.com/',
    code: 'https://github.com/mileiny1/stir-craft',
    image: craft,
  },
  {
    id: 2,
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
    id: 3,
    title: 'Quiz Game',
    description: 'Quiz Game is an interactive web application designed to test users\' knowledge through a series of multiple choice questions. Players must answer each question within a 10 second time limit while the application tracks their score and provides instant feedback on their responses.',

    concept: 'Interactive quiz game that challenges players to answer multiple choice questions within a time limit while tracking their score and providing instant feedback.',
    technologies: ['HTML', 'Javascript', 'CSS','Vercel'],
    features: ['Timed quizzes', 'Score tracking'],
    live: 'https://mileiny1.github.io/quiz-game/',
    code: 'https://github.com/mileiny1/language-quiz',
    image: quizgame,
  },
  {
    

  
    id: 4,
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
    id: 5,
    title: 'Paycheck Calculator',
    description: 'A simple paycheck calculator web application that helps users calculate their net pay after taxes and deductions and also provides a bookfinder for books and students directory and guestbook for students and teachers.',
    concept: 'A tool to calculate net pay based on user input. It also includes a bookfinder, student directory, and guestbook. The bookfinder allows users to search for books by title or author, the student directory provides information about students, and the guestbook allows users to leave messages. The guestbook is a space where users can leave messages and connect with each other. The student directory is a list of students with their contact information, and the bookfinder is a search tool that allows users to find books by title or author. ',
    technologies: ['Bootstrap', 'HTML', 'CSS','PHP','MySQL'],
    features: ['User-friendly interface', 'Tax calculations', 'Responsive design'],
    live: 'https://mileinyproject.infinityfree.me/index.php',
    code: 'https://github.com/mileiny1/Paycheck-Calculator-Student-Directory-Web-Application',
    image: paycheck,
  },
  {
  id: 6,
  title: 'AI Food Search',
  description: 'AI Food Search is a smart restaurant discovery web app that allows users to find nearby dining options using AI powered restaurant recommendations, natural language queries, and advanced filters.',
  concept: 'A web application that allows users to search for nearby restaurants using natural language queries and smart filters. The frontend handles geocoding through OpenStreetMap Nominatim to convert user-typed locations into coordinates, then sends the search request to the Django backend which routes it through Yelp or Google Places and optionally enhances results with OpenAI recommendations. Users can create an account, manage their profile, and view their search history. The backend supports JWT authentication with access and refresh tokens, Redis backed response caching, and a mock fallback mode for development without API keys.',
  technologies: ['React', 'Vite', 'Bootstrap', 'JavaScript', 'Python', 'Django', 'PostgreSQL', 'Redis', 'Vercel', 'Heroku',  'CSS'],
  features: ['AI powered restaurant recommendations', 'Location aware search with filters', 'JWT authentication with token refresh', 'User profile management', 'Per user search history', 'Responsive design'],
  live: 'https://ai-foodsearch-frontend.vercel.app/',
  code: 'https://github.com/mileiny1/Ai-foodsearch-frontend',
  image: aifood,
}

];


export default projects;
