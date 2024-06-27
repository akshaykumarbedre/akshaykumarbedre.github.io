function showProjectDetails(projectId) {
    var projectDetails = getProjectDetails(projectId);
    document.getElementById("projectModalLabel").textContent = projectDetails.title;
    document.getElementById("modalDescription").textContent = projectDetails.description;
    
    var techList = document.getElementById("modalTechnologies");
    techList.innerHTML = "";
    projectDetails.technologies.forEach(function(tech) {
        var li = document.createElement("li");
        li.textContent = tech;
        techList.appendChild(li);
    });

    var featureList = document.getElementById("modalFeatures");
    featureList.innerHTML = "";
    projectDetails.features.forEach(function(feature) {
        var li = document.createElement("li");
        li.textContent = feature;
        featureList.appendChild(li);
    });

    var modal = new bootstrap.Modal(document.getElementById('projectModal'));
    modal.show();
}

function getProjectDetails(projectId) {
var projects = {
backorderPrediction: {
    title: "Backorder Prediction System",
    description: "An end-to-end machine learning pipeline for predicting product backorders in supply chain management, featuring CI/CD integration.",
    technologies: ["Python", "Scikit-learn", "Flask", "CI/CD","Modular Coding" ],
    features: [
        "Data preprocessing and feature engineering",
        "Model training and evaluation",
        "Hyperparameter tuning",
        "Containerized deployment",
        "Ensemble Algo",
        "Continuous Integration and Deployment pipeline"
    ]
},
portfolioManagement: {
    title: "Portfolio Management & Stock Filter",
    description: "A comprehensive Flask application for intelligent portfolio management and analysis, deployed as an end-to-end solution.",
    technologies: ["Python", "Flask", "Pandas", "Matplotlib", "HTML/CSS/JavaScript","SQL" ],
    features: [
        "User authentication and portfolio tracking",
        "Real-time stock data fetching and analysis",
        "Custom stock filtering based on user-defined criteria",
        "Interactive data visualizations",
        "Automated portfolio rebalancing suggestions",
        "Performance reporting and risk analysis"
    ]
},
sentimentAnalysis: {
    title: "Sentiment Analysis Tool",
    description: "A Tkinter-based application for real-time sentiment analysis using NLP techniques.",
    technologies: ["Python", "NLTK", "Tkinter","Hugging face"],
    features: [
        "Real-time text sentiment analysis",
        "User-friendly GUI for input and results display",
        "Customizable sentiment thresholds",
        "Both type and audio input"
    ]
},
movieRecommendation: {
    title: "Movie Recommendation System",
    description: "A Jupyter Notebook-based movie recommendation system using collaborative filtering techniques.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Jupyter Notebook"],
    features: [
        "Collaborative filtering algorithm implementation",
        "User-based and item-based recommendation modes",
        "Interactive recommendation generation",
        "Performance evaluation metrics"
    ]
},
gestureGame: {
    title: "Hand Gesture-Controlled Hill Climb Racing Game",
    description: "An innovative integration of computer vision and gaming using MediaPipe and OpenCV for hand gesture control.",
    technologies: ["Python", "OpenCV", "MediaPipe", "Scikit-learn"],
    features: [
        "Real-time hand gesture recognition",
        "Custom game physics engine",
        "Responsive game controls based on hand movements",
        "Dynamic obstacle generation",
        "Score tracking and leaderboard system"
    ]
},
stockAnalysis: {
    title: "Real-Time Stock Analysis Software",
    description: "A powerful tool for analyzing stock market trends and making data-driven investment decisions in real-time.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "yfinance"],
    features: [
        "Real-time stock data fetching and processing",
        "Technical indicator calculations (e.g., Moving Averages, RSI)",
        "Customizable stock screening criteria",
        
        "Automated trading signal generation"
    ]
},
diabetesPrediction: {
    title: "Diabetes Prediction System",
    description: "Forecasting Future Health: Developing a Machine Learning Model for Diabetes Prediction",
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Flask"],
    features: [
        "Data preprocessing and feature selection",
        "Multiple machine learning model comparisons",
        "Model interpretability with SHAP values",
        "Web-based interface for predictions",
        "Risk factor analysis and visualization"
    ]
}
};

return projects[projectId];
}
