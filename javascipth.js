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
        invoiceProcessing: {
            title: "AI-Powered Invoice Processing & Chat System",
            description: "Automated invoice processing solution using Generative AI and multimodal models that transforms manual invoice handling into intelligent, conversational data extraction. Features multimodal processing for both PDF documents and image formats with batch processing capabilities.",
            technologies: ["LangChain", "Google Gemini Multimodal 2.0", "Flask", "Python", "LLM Memory", "Node.js", "Tailwind CSS", "PDF Parsing", "Cloud-native Architecture"],
            features: [
                "Multimodal Processing: Handles both PDF documents and image formats seamlessly",
                "Batch Processing: Upload and process multiple invoices simultaneously",
                "Conversational Interface: Chat with your invoices to extract specific information",
                "Smart Data Extraction: Automatically identifies vendor details, dates, line items, and totals",
                "Real-time Querying: Ask questions about invoice data in natural language",
                "Time Reduction: Processing time reduced from hours to minutes per batch",
                "Error Prevention: Eliminated manual data entry mistakes completely",
                "Cost Savings: Reduced processing overhead by 75%",
                "Enterprise Scalability: Handles enterprise-level invoice volumes",
                "Finance Automation: Streamlined accounts payable processing",
                "Expense Management: Integrated expense management systems",
                "Audit Compliance: Comprehensive audit and compliance workflows"
            ]
        },
        webaiRestaurant: {
            title: "WebAI: Intelligent Website Assistant for Restaurants",
            description: "24/7 AI-powered customer service solution that transforms restaurant websites into interactive, intelligent assistants capable of answering customer queries instantly. Features seamless website integration, real-time knowledge base updates, and dynamic content management.",
            technologies: ["Python", "Flask", "LangChain", "Next.js", "React", "Tailwind CSS", "Google Generative AI", "FAISS Vector Search", "Vector Embeddings", "Cloud-native Architecture"],
            features: [
                "Website Integration: Seamlessly embedded into existing restaurant websites",
                "Real-time Knowledge Base: Trained on actual website content and menu data",
                "Dynamic Updates: Admin dashboard for instant menu/hours updates",
                "Natural Conversations: Handles complex customer inquiries intelligently",
                "Multi-domain Support: Adaptable for various business types beyond restaurants",
                "24/7 Availability: Continuous customer support without staff overhead",
                "80% Efficiency Gain: Significant reduction in manual FAQ management",
                "Customer Experience: Instant, accurate responses improve satisfaction",
                "Cost Reduction: Eliminates need for additional customer service staff",
                "Weekend Hours Inquiry: Automated responses for operating hours",
                "Menu and Dietary Options: Detailed information about food offerings and restrictions",
                "Daily Specials Information: Real-time updates on special offerings",
                "Reservation Assistance: Streamlined booking process integration"
            ]
        },
        backorderPrediction: {
            title: "ML-Powered Supply Chain Forecasting System",
            description: "Enterprise-grade ML pipeline for supply chain optimization with 92% prediction accuracy, reducing inventory costs by 25% and improving operational efficiency through automated backorder forecasting. Features advanced ensemble methods and real-time API integration.",
            technologies: ["Python", "Scikit-learn", "Flask", "CI/CD", "Docker", "AWS", "Ensemble Methods", "Feature Engineering"],
            features: [
                "Advanced feature engineering with 50+ supply chain variables",
                "Ensemble model architecture achieving 92% prediction accuracy",
                "Real-time prediction API with sub-second response times",
                "Automated model retraining pipeline for continuous improvement",
                "Cost reduction of 25% through optimized inventory management",
                "Containerized deployment with comprehensive CI/CD integration",
                "Comprehensive monitoring and alerting system",
                "Supply chain optimization: Predictive analytics for inventory planning",
                "Enterprise-grade reliability: Production-ready ML infrastructure",
                "Scalable architecture: Handles large-scale supply chain data",
                "Business intelligence: Data-driven insights for strategic decisions"
            ]
        },
        slackRagBot: {
            title: "Enterprise Knowledge Assistant - Slack RAG Bot",
            description: "Retrieval-Augmented Generation (RAG) chatbot integrated with Slack that provides instant access to organizational knowledge, documentation, and FAQs. Features secure access controls, contextual understanding, and real-time knowledge base synchronization.",
            technologies: ["OpenAI GPT Models", "Vector Embeddings", "Slack API", "Webhooks", "Python", "FastAPI", "FAISS", "OAuth", "Permission Management"],
            features: [
                "RAG Architecture: Combines retrieval and generation for accurate responses",
                "Slack Integration: Native `/ask-stackbot` command interface",
                "Contextual Understanding: Maintains conversation context for follow-up queries",
                "Secure Access: Respects organizational permissions and data security",
                "Knowledge Base Sync: Real-time updates from docs, wikis, and internal resources",
                "50% Productivity Boost: Significant reduction in knowledge search time",
                "30% Onboarding Acceleration: Faster new employee integration",
                "Support Efficiency: Reduced internal help desk ticket volume",
                "Knowledge Accessibility: Democratized access to organizational information",
                "1000+ Queries Processed: Consistent weekly query processing volume",
                "95% Accuracy: High precision in information retrieval from knowledge base",
                "Context-switching Reduction: Eliminated external search requirements",
                "Team Collaboration: Improved collaboration efficiency across teams"
            ]
        },
        awsBedrockAgent: {
            title: "Enterprise Sales AI Agent - AWS Bedrock Solution",
            description: "Full-stack conversational AI agent built in 48 hours using AWS Bedrock, designed for sales automation with lead qualification and intelligent customer interactions. Features serverless architecture, conversational memory, and enterprise-ready deployment with comprehensive testing.",
            technologies: ["AWS Bedrock Agent Builder", "AWS Knowledge Base", "Amazon S3", "AWS Lambda", "Python 3.12", "API Gateway", "Serverless Architecture", "Postman"],
            features: [
                "Conversational Memory: Maintains context throughout customer interactions",
                "Lead Qualification: Automated prospect scoring and categorization",
                "Tiered Responses: Service-level appropriate communications",
                "Human-like Interaction: Natural conversation flow and personality",
                "Real-time Processing: Instant response capabilities",
                "Rapid Development: Full solution deployed in 48 hours",
                "Sales Automation: 24/7 lead engagement capability",
                "Qualification Efficiency: Automated prospect filtering and scoring",
                "Scalable Architecture: Enterprise-ready cloud infrastructure",
                "End-to-end Implementation: Complete concept to deployment cycle",
                "Serverless Cost Optimization: Automatic scaling and cost efficiency",
                "Integration-ready API: Designed for seamless system integration",
                "Comprehensive Testing: Validated with Postman and frontend integration",
                "Custom Prompt Engineering: Optimized for sales scenarios",
                "Knowledge Base Optimization: Enhanced product information retrieval",
                "Memory Management: Conversation continuity across sessions",
                "Production-ready Deployment: Complete CI/CD pipeline implementation"
            ]
        },
        sentimentAnalysis: {
            title: "Multi-Modal Sentiment Analysis Engine",
            description: "Advanced NLP system with real-time sentiment classification achieving 94% accuracy across text and audio inputs, supporting multiple languages and domain-specific contexts.",
            technologies: ["Python", "NLTK", "Hugging Face Transformers", "Tkinter", "PyTorch", "Speech Recognition"],
            features: [
                "Multi-modal input processing (text, audio, file uploads)",
                "94% accuracy on sentiment classification tasks",
                "Support for multiple languages and dialects",
                "Domain-specific sentiment models (finance, healthcare, retail)",
                "Real-time processing with sub-second response times",
                "Batch processing capabilities for large datasets",
                "Customizable sentiment thresholds and categories",
                "Export functionality for analysis reports"
            ]
        },
        gestureGame: {
            title: "Computer Vision Gaming Interface",
            description: "Innovative gesture-controlled gaming system using computer vision and MediaPipe, demonstrating practical applications of CV technology in interactive entertainment.",
            technologies: ["Python", "OpenCV", "MediaPipe", "Computer Vision", "Real-time Processing", "Game Development"],
            features: [
                "Real-time hand gesture recognition with 95% accuracy",
                "Low-latency processing optimized for gaming (< 50ms)",
                "Customizable gesture mapping and sensitivity controls",
                "Multi-hand tracking and gesture combination support",
                "Robust performance in varying lighting conditions",
                "Cross-platform compatibility (Windows, macOS, Linux)",
                "Extensible architecture for additional gesture types",
                "Performance analytics and gesture training modules"
            ]
        }
    };

    return projects[projectId];
}

// Enhanced animations and interactions
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll animation for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animate skill levels on scroll
    const skillLevels = document.querySelectorAll('.skill-level');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const level = entry.target.getAttribute('data-level');
                entry.target.style.setProperty('--level', level + '%');
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.5 });

    skillLevels.forEach(skill => {
        observer.observe(skill);
    });

    // Animate cards on scroll
    const cards = document.querySelectorAll('.expertise-card, .project-card');
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        cardObserver.observe(card);
    });

    // Contact form enhancement
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check me-2"></i>Message Sent!';
                submitBtn.classList.add('btn-success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('btn-success');
                    contactForm.reset();
                }, 3000);
            }, 2000);
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        lastScrollY = window.scrollY;
    });

    // Parallax effect for hero background
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroBackground.style.transform = `translateY(${rate}px)`;
        });
    }

    // Stats counter animation
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                const numericValue = parseInt(finalValue.replace(/\D/g, ''));
                
                let current = 0;
                const increment = numericValue / 30;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= numericValue) {
                        current = numericValue;
                        clearInterval(timer);
                    }
                    target.textContent = Math.floor(current) + finalValue.replace(/\d/g, '').replace(/\+/g, '');
                    if (finalValue.includes('+')) {
                        target.textContent += '+';
                    }
                    if (finalValue.includes('%')) {
                        target.textContent = Math.floor(current) + '%';
                    }
                }, 50);
                
                statsObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });

    // Enhanced project card interactions
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        let hoverTimeout;
        
        card.addEventListener('mouseenter', function() {
            clearTimeout(hoverTimeout);
            hoverTimeout = setTimeout(() => {
                const isVideoCard = this.querySelector('.project-video');
                if (isVideoCard) {
                    this.style.transform = 'translateY(-5px) scale(1.01)';
                } else {
                    this.style.transform = 'translateY(-15px) scale(1.02)';
                }
            }, 100);
        });
        
        card.addEventListener('mouseleave', function() {
            clearTimeout(hoverTimeout);
            this.style.transform = 'translateY(0) scale(1)';
        });

        // Prevent overlay from interfering with video playback
        const overlay = card.querySelector('.project-overlay');
        const iframe = card.querySelector('iframe');
        
        if (overlay && iframe) {
            // Add click handler to overlay background (not buttons)
            overlay.addEventListener('click', function(e) {
                // Only handle clicks on the overlay background, not on buttons
                if (e.target === this) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            });
            
            // Ensure iframe clicks work properly
            iframe.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    });

    // Add keyboard navigation for project details
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modal = document.getElementById('projectModal');
            if (modal && modal.classList.contains('show')) {
                const modalInstance = bootstrap.Modal.getInstance(modal);
                if (modalInstance) {
                    modalInstance.hide();
                }
            }
        }
    });

    // Theme toggle (if needed in the future)
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('light-theme');
            localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
        });
    }

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization for scroll events
const optimizedScroll = debounce(function() {
    // Scroll-based animations can be added here
}, 10);

window.addEventListener('scroll', optimizedScroll);

// Error handling for modal
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// Lazy loading enhancement (if needed)
if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}
