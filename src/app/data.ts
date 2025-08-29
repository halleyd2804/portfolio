export type ProjectSchema = {
  id: number;
  name: string,
  achievements: string[],
  description: string,
  thumbnail: string[],
  links: {
    link: string,
    source: "Github" | "Tableau"
  }[],
  technologies: string[],
}
export const Projects: ProjectSchema[] = [
  {
    id: 1,
    name: "Medical Pantry - Medical Item Identification and Inventory Manager",
    description: "An admin portal and item-matching engine to manage medical supplies and identify products using fuzzy matching of scanned text and barcodes.",
    achievements: ["Applied AGILE methodologies with Jira and Confluence to manage projects, issues, and tasks",
        "Collaborated on a fuzzy matching indexing system in JavaScript, leveraging tokens from scanned text and barcodes with enhanced weighting for barcodes, achieving 80% matching accuracy in MongoDB",
        "Developed the UI for the web app using HTML, CSS, React and Javascript"],
    thumbnail: ["/ProjectAssets/demo.mp4"],
    links:[{
      link: "https://github.com/wfltaylor/IT-Project-Team-58",
      source: "Github"
    }],
    technologies: ["JavaScript","Confluence", "Jira", "HTML", "CSS", "React", "MongoDB"],
  },
  {
    id: 2,
    name: "Books Store Recommendation Systems",
    description: "A recommendation system using Content-Based and Collaborative Filtering techniques",
    achievements: ["Applied collaborative filtering and content-based models to create a recommendation system, achieving a 88% accuracy rate",
      "Built an end-to-end recommendation system, utilizing matrix factorization, Pandas for data manipulation, NLTK for text preprocessing, and Matplotlib for exploratory data analysis (EDA) and visualizations"],
    thumbnail: ['https://booknet.com.au/wp-content/uploads/2020/05/5-Advantages-of-an-Online-Bookshop.jpg'],
    links:[{
      link: "https://github.com/halleyd2804/bookRecSys",
      source: "Github"
    }],
    technologies: ["Scikit-learn","Surprise", "Pandas", "NTLK", "Matplotlib", "Python"],
  },
  {
    id: 3,
    name: 'Financial Portfolio Construction',
    thumbnail: ['/ProjectAssets/financial_portfolio.jpeg'],
    description: "A financial portfolio by predicting future returns based on historical financial factors using Ridge regression",
    achievements: [
      "Developed a Ridge regression model to predict future returns based on historical financial factors, optimizing portfolio performance by selecting the best regularization parameter using Sharpe ratio maximization",
        "Performed data preprocessing and normalization, handling missing values and computing pairwise correlations over rolling 3-year windows, ensuring clean and reliable data for accurate forecasting",
    "Constructed and evaluated financial portfolios, utilizing predicted returns to allocate weights and measure performance, identifying optimal alpha value to maximize portfolio returns and minimize risk"
    ],
    technologies: ["Scikit-learn", "NumPy", "Pandas", "Matplotlib"],
    links:[{
      link: "https://github.com/halleyd2804/Financial-Portfolio-Construction",
      source: "Github"
    }],
    
}, 
{
  id: 4,
  name: "Analyse 10-K reports using GENAI",
  description: "Perform sentimental analysis and report summarization on the 10-K reports using the Gemini API.",
  achievements: ["Utilized Gemini to analyse AI-related risks, opportunities, and investment strategies in 10-K reports from 10 publicly traded companies, providing sentiment analysis on stock performance", 
    "Cleaned and preprocessed raw text from 10-K filings and parse HTML reponse from Gemini to extract relevant sections and remove unwanted characters",
"Engineered prompts to guide Gemini in generating structured summaries of financial data, ensuring accurate extraction of key insights for AI-related investments and trends"
],
  thumbnail: ['/ProjectAssets/ai_rankng.jpeg'],
  links:[{
    link: "https://github.com/halleyd2804/Analyse-10-K-reports-using-GENAI",
    source: "Github"
  }],
  technologies: ["Gemini API", "regex", "Beautiful Soup", "Pandas"],
},
{
  id: 5,
  name: "COVID-19 Dataset Exploration and Visualization",
  description: "Explores and visualizes the global impact of COVID-19, highlighting key trends in deaths, confirmed cases, and recoveries across countries in 2020 and 2021",
  achievements: ["Utilizes SQL for data exploration and Pandas for transforming COVID-19 datasets",
                  "Employs Tableau to visualize top deaths, confirmed cases, and recoveries in 2020 and 2021, along with predictive insights for 2021",
                  "Provides a geographical analysis of the pandemic’s impact using a combination of data engineering and visualization tools"],
  thumbnail: ['/ProjectAssets/dashboard_covid.jpeg'],
  
  links:[{
    link: "https://github.com/halleyd2804/Covid_19_dataset_exploration_viz",
    source: "Github"
  },
{
  link:"https://public.tableau.com/app/profile/halley.dao/viz/Covid-19WorldwideData_16897336975680/Dashboard1",
  source: "Tableau"
}],
  technologies: ["SQL(MySQL)", "Tableau", "Pandas"],
},
{
  id: 6,
  name: "Fraud Detection",
  description: "A fraud detection system using machine learning models, including Logistic Regression and Neural Networks to predict fraudulent transactions based on various features",
  achievements: ["Constructed Logistic Regression models in statsmodels and Neural Networks in TensorFlow, applying advanced feature engineering with Pandas to improve prediction accuracy",
                  "Attained an AUC score of 0.81 for the Neural Network model and optimized prediction accuracy through model evaluation"],
  thumbnail: ['/ProjectAssets/FD.jpeg'],
  
  links:[{
    link: "https://github.com/halleyd2804/Fraud-Detection",
    source: "Github"
  }],
  technologies: ["statsmodels", "TensorFlow", "Pandas", "Matplotlib"],
},
{
  id: 7,
  name: "Employee Turnover and Attrition Analysis",
  description: "A Power BI dashboard to uncover attrition drivers and highlight high-risk employee groups, supporting HR retention strategies.",
  achievements: ["Identified employee groups with up to 2 times higher attrition risk by analysing patterns across demographics, job satisfaction, work-life balance, and overtime",
"Developed a Power BI dashboard that enabled HR leaders to compare attrition trends between departments, job levels, and employee segments",
"Provided actionable insights on improving employee engagement and retention through better recognition, balanced workloads, and enhanced work-life support"],
  thumbnail: ['public/ProjectAssets/image copy.png'],
  
  links:[{
    link: "https://github.com/halleyd2804/Employee-Attrition-Analysis",
    source: "Github"
  }],
  technologies: ["Power BI"],
}
]