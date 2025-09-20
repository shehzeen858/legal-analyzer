
// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-content h1');
    const titleText = heroTitle.textContent;
    heroTitle.textContent = '';
    
    function typeWriter(text, element, speed = 100) {
        let i = 0;
        element.textContent = '';
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
    
    // Start typing animation after page load
    setTimeout(() => {
        typeWriter(titleText, heroTitle, 80);
    }, 500);
    
    // Add terminal-like effect to navigation
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.fontFamily = "'Fira Code', monospace";
        });
    });
    
    // Add Matrix-like animation to background
    function createMatrixRain() {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '-1';
        canvas.style.opacity = '0.1';
        document.body.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789{}[]()<>/*-+';
        const charArray = chars.split('');
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = Array.from({length: columns}, () => 1);
        
        function draw() {
            ctx.fillStyle = 'rgba(13, 17, 23, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#58a6ff';
            ctx.font = fontSize + 'px Fira Code, monospace';
            
            for (let i = 0; i < drops.length; i++) {
                const text = charArray[Math.floor(Math.random() * charArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        
        setInterval(draw, 50);
        
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }
    
    createMatrixRain();
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
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
            
            // Close mobile menu after clicking
            navMenu.classList.remove('active');
        });
    });

    // Contact form handling
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const company = this.querySelectorAll('input[type="text"]')[1].value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Simulate form submission
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    // Hero buttons functionality with enhanced effects
    const startAnalysisBtn = document.querySelector('.btn-primary');
    const watchDemoBtn = document.querySelector('.btn-secondary');
    
    if (startAnalysisBtn) {
        startAnalysisBtn.addEventListener('click', function() {
            showAnalysisModal();
        });
    }
    
    function showAnalysisModal() {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            backdrop-filter: blur(5px);
        `;
        
        modal.innerHTML = `
            <div style="
                background: #0d1117;
                border: 1px solid #30363d;
                border-radius: 12px;
                padding: 0;
                max-width: 90vw;
                max-height: 90vh;
                width: 600px;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
                overflow: hidden;
                position: relative;
            ">
                <div style="
                    background: #161b22;
                    padding: 20px;
                    border-bottom: 1px solid #30363d;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                ">
                    <h3 style="
                        color: #58a6ff;
                        margin: 0;
                        font-family: 'Fira Code', monospace;
                        font-size: 1.4rem;
                    ">📄 Start Contract Analysis</h3>
                    <button onclick="this.closest('.analysis-modal').remove()" style="
                        background: #da3633;
                        color: white;
                        border: none;
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                        cursor: pointer;
                        font-size: 18px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    ">×</button>
                </div>
                <div style="padding: 30px;">
                    <div style="text-align: center; margin-bottom: 30px;">
                        <div style="
                            width: 120px;
                            height: 120px;
                            border: 3px dashed #58a6ff;
                            border-radius: 12px;
                            margin: 0 auto 20px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 3rem;
                            color: #58a6ff;
                            cursor: pointer;
                            transition: all 0.3s ease;
                            background: rgba(88, 166, 255, 0.05);
                        " id="uploadArea" onmouseover="this.style.borderColor='#79c0ff'; this.style.background='rgba(88, 166, 255, 0.1)'" onmouseout="this.style.borderColor='#58a6ff'; this.style.background='rgba(88, 166, 255, 0.05)'">
                            📁
                        </div>
                        <h4 style="
                            color: #e0e0e0;
                            margin-bottom: 10px;
                            font-family: 'Fira Code', monospace;
                        ">Upload Your Contract</h4>
                        <p style="
                            color: #7d8590;
                            margin-bottom: 20px;
                            font-size: 0.95rem;
                        ">Drag and drop your legal document here or click to browse</p>
                        <input type="file" id="fileInput" accept=".pdf,.doc,.docx,.txt" style="display: none;">
                        <button onclick="document.getElementById('fileInput').click()" style="
                            background: linear-gradient(45deg, #238636, #2ea043);
                            color: white;
                            border: none;
                            padding: 12px 24px;
                            border-radius: 8px;
                            font-family: 'Fira Code', monospace;
                            font-weight: 600;
                            cursor: pointer;
                            margin-bottom: 20px;
                            transition: all 0.3s ease;
                        " onmouseover="this.style.background='linear-gradient(45deg, #2ea043, #3fb950)'" onmouseout="this.style.background='linear-gradient(45deg, #238636, #2ea043)'">
                            Choose File
                        </button>
                    </div>
                    
                    <div style="
                        background: #161b22;
                        border-radius: 8px;
                        padding: 20px;
                        margin-bottom: 25px;
                        border: 1px solid #30363d;
                    ">
                        <h5 style="
                            color: #58a6ff;
                            margin: 0 0 15px 0;
                            font-family: 'Fira Code', monospace;
                            display: flex;
                            align-items: center;
                            gap: 8px;
                        ">⚡ What we'll analyze:</h5>
                        <ul style="
                            color: #7d8590;
                            margin: 0;
                            padding-left: 20px;
                            line-height: 1.6;
                        ">
                            <li>Risk assessment and scoring</li>
                            <li>Clause identification and categorization</li>
                            <li>Compliance verification</li>
                            <li>Key terms and conditions review</li>
                            <li>Potential issues and recommendations</li>
                        </ul>
                    </div>
                    
                    <div style="
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr;
                        gap: 15px;
                        margin-bottom: 25px;
                    ">
                        <div style="
                            background: #161b22;
                            padding: 15px;
                            border-radius: 8px;
                            border: 1px solid #30363d;
                            text-align: center;
                        ">
                            <div style="color: #3fb950; font-size: 1.5rem; margin-bottom: 8px;">⚡</div>
                            <div style="color: #e0e0e0; font-weight: 600; margin-bottom: 4px;">Fast</div>
                            <div style="color: #7d8590; font-size: 0.8rem;">Under 30 seconds</div>
                        </div>
                        <div style="
                            background: #161b22;
                            padding: 15px;
                            border-radius: 8px;
                            border: 1px solid #30363d;
                            text-align: center;
                        ">
                            <div style="color: #58a6ff; font-size: 1.5rem; margin-bottom: 8px;">🎯</div>
                            <div style="color: #e0e0e0; font-weight: 600; margin-bottom: 4px;">Accurate</div>
                            <div style="color: #7d8590; font-size: 0.8rem;">99.8% precision</div>
                        </div>
                        <div style="
                            background: #161b22;
                            padding: 15px;
                            border-radius: 8px;
                            border: 1px solid #30363d;
                            text-align: center;
                        ">
                            <div style="color: #ffd33d; font-size: 1.5rem; margin-bottom: 8px;">🔒</div>
                            <div style="color: #e0e0e0; font-weight: 600; margin-bottom: 4px;">Secure</div>
                            <div style="color: #7d8590; font-size: 0.8rem;">Bank-level encryption</div>
                        </div>
                    </div>
                    
                    <div style="text-align: center; margin-top: 20px;">
                        <button id="analyzeBtn" disabled style="
                            background: #30363d;
                            color: #7d8590;
                            border: none;
                            padding: 14px 32px;
                            border-radius: 8px;
                            font-family: 'Fira Code', monospace;
                            font-weight: 600;
                            cursor: not-allowed;
                            margin-right: 15px;
                            font-size: 1rem;
                            transition: all 0.3s ease;
                        ">
                            🤖 Analyze Contract
                        </button>
                        <button onclick="this.closest('.analysis-modal').remove()" style="
                            background: transparent;
                            color: #58a6ff;
                            border: 2px solid #58a6ff;
                            padding: 12px 24px;
                            border-radius: 8px;
                            font-family: 'Fira Code', monospace;
                            font-weight: 600;
                            cursor: pointer;
                            transition: all 0.3s ease;
                        " onmouseover="this.style.background='rgba(88, 166, 255, 0.1)'" onmouseout="this.style.background='transparent'">
                            Cancel
                        </button>
                    </div>
                    
                    <div id="analysisProgress" style="display: none;">
                        <div style="
                            margin-top: 20px;
                            padding: 20px;
                            background: #161b22;
                            border: 1px solid #30363d;
                            border-radius: 8px;
                        ">
                            <div style="
                                display: flex;
                                align-items: center;
                                gap: 10px;
                                margin-bottom: 15px;
                                color: #58a6ff;
                                font-family: 'Fira Code', monospace;
                            ">
                                <div class="spinner" style="
                                    width: 20px;
                                    height: 20px;
                                    border: 2px solid #30363d;
                                    border-top: 2px solid #58a6ff;
                                    border-radius: 50%;
                                    animation: spin 1s linear infinite;
                                "></div>
                                <span id="progressText">Initializing analysis...</span>
                            </div>
                            <div style="
                                background: #0d1117;
                                border-radius: 4px;
                                height: 8px;
                                overflow: hidden;
                            ">
                                <div id="progressBar" style="
                                    background: linear-gradient(45deg, #238636, #2ea043);
                                    height: 100%;
                                    width: 0%;
                                    transition: width 0.3s ease;
                                "></div>
                            </div>
                        </div>
                    </div>
                    <div id="analysisResults" style="display: none;"></div>
                </div>
            </div>
        `;
        
        modal.className = 'analysis-modal';
        
        // File input handling
        const fileInput = modal.querySelector('#fileInput');
        const analyzeBtn = modal.querySelector('#analyzeBtn');
        const uploadArea = modal.querySelector('#uploadArea');
        
        fileInput.addEventListener('change', function(e) {
            if (e.target.files.length > 0) {
                const fileName = e.target.files[0].name;
                const file = e.target.files[0];
                uploadArea.innerHTML = `
                    <div style="display: flex; flex-direction: column; align-items: center;">
                        <div style="font-size: 2rem; margin-bottom: 10px;">✅</div>
                        <div style="font-size: 0.9rem; text-align: center;">${fileName}</div>
                    </div>
                `;
                uploadArea.style.borderColor = '#3fb950';
                uploadArea.style.background = 'rgba(63, 185, 80, 0.1)';
                
                analyzeBtn.disabled = false;
                analyzeBtn.style.background = 'linear-gradient(45deg, #238636, #2ea043)';
                analyzeBtn.style.color = 'white';
                analyzeBtn.style.cursor = 'pointer';
                
                analyzeBtn.onclick = function() {
                    startAnalysis(file);
                };
            }
        });
        
        // Drag and drop functionality
        uploadArea.addEventListener('click', () => fileInput.click());
        
        uploadArea.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.style.borderColor = '#79c0ff';
            this.style.background = 'rgba(88, 166, 255, 0.2)';
        });
        
        uploadArea.addEventListener('dragleave', function(e) {
            e.preventDefault();
            this.style.borderColor = '#58a6ff';
            this.style.background = 'rgba(88, 166, 255, 0.05)';
        });
        
        uploadArea.addEventListener('drop', function(e) {
            e.preventDefault();
            this.style.borderColor = '#58a6ff';
            this.style.background = 'rgba(88, 166, 255, 0.05)';
            
            if (e.dataTransfer.files.length > 0) {
                fileInput.files = e.dataTransfer.files;
                const event = new Event('change', { bubbles: true });
                fileInput.dispatchEvent(event);
            }
        });
        
        // Close modal when clicking outside
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.remove();
            }
        });
        
        // Close modal with Escape key
        const handleEscape = function(e) {
            if (e.key === 'Escape') {
                modal.remove();
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);
        
        document.body.appendChild(modal);
        
        // Animate modal entrance
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.opacity = '1';
            modal.style.transition = 'opacity 0.3s ease';
        }, 10);
    }
    
    // Enhanced Analysis Functionality
    function startAnalysis(file) {
        const modal = document.querySelector('.analysis-modal');
        const progressDiv = modal.querySelector('#analysisProgress');
        const resultsDiv = modal.querySelector('#analysisResults');
        const progressBar = modal.querySelector('#progressBar');
        const progressText = modal.querySelector('#progressText');
        
        // Show progress and hide results
        progressDiv.style.display = 'block';
        resultsDiv.style.display = 'none';
        resultsDiv.innerHTML = '';
        
        // Simulate analysis steps
        const steps = [
            { text: 'Reading document...', progress: 10 },
            { text: 'Extracting text content...', progress: 25 },
            { text: 'Analyzing contract clauses...', progress: 40 },
            { text: 'Performing risk assessment...', progress: 60 },
            { text: 'Checking compliance...', progress: 75 },
            { text: 'Generating insights...', progress: 90 },
            { text: 'Finalizing report...', progress: 100 }
        ];
        
        let currentStep = 0;
        
        function updateProgress() {
            if (currentStep < steps.length) {
                const step = steps[currentStep];
                progressText.textContent = step.text;
                progressBar.style.width = step.progress + '%';
                currentStep++;
                setTimeout(updateProgress, 800 + Math.random() * 400);
            } else {
                // Analysis complete, show results
                setTimeout(showAnalysisResults, 500);
            }
        }
        
        updateProgress();
    }
    
    function showAnalysisResults() {
        const modal = document.querySelector('.analysis-modal');
        const progressDiv = modal.querySelector('#analysisProgress');
        const resultsDiv = modal.querySelector('#analysisResults');
        
        progressDiv.style.display = 'none';
        resultsDiv.style.display = 'block';
        
        // Generate realistic analysis results
        const analysisData = generateAnalysisResults();
        
        resultsDiv.innerHTML = `
            <div style="padding: 20px 0;">
                <h4 style="color: #58a6ff; margin-bottom: 20px; font-family: 'Fira Code', monospace; display: flex; align-items: center; gap: 10px;">
                    ✅ Analysis Complete
                </h4>
                
                <!-- Overall Risk Score -->
                <div class="analysis-result-card">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                        <h5 style="color: #e0e0e0; margin: 0;">Overall Risk Assessment</h5>
                        <span class="risk-score ${analysisData.overallRisk.class}">${analysisData.overallRisk.score}/100</span>
                    </div>
                    <p style="color: #7d8590; margin: 0;">${analysisData.overallRisk.description}</p>
                </div>
                
                <!-- Key Findings -->
                <div class="analysis-result-card">
                    <h5 style="color: #e0e0e0; margin-bottom: 15px;">Key Findings</h5>
                    <ul style="color: #7d8590; margin: 0; padding-left: 20px;">
                        ${analysisData.keyFindings.map(finding => `<li style="margin-bottom: 8px;">${finding}</li>`).join('')}
                    </ul>
                </div>
                
                <!-- Clause Analysis -->
                <div class="analysis-result-card">
                    <h5 style="color: #e0e0e0; margin-bottom: 15px;">Clause Analysis</h5>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                        ${analysisData.clauses.map(clause => `
                            <div style="background: #0d1117; padding: 15px; border-radius: 6px; border: 1px solid #30363d;">
                                <div style="color: #58a6ff; font-weight: bold; margin-bottom: 5px;">${clause.type}</div>
                                <div style="color: #7d8590; font-size: 0.9rem;">${clause.status}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Compliance Check -->
                <div class="analysis-result-card">
                    <h5 style="color: #e0e0e0; margin-bottom: 15px;">Compliance Status</h5>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">
                        ${analysisData.compliance.map(item => `
                            <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: #0d1117; border-radius: 6px; border: 1px solid #30363d;">
                                <span style="color: #e0e0e0;">${item.regulation}</span>
                                <span style="color: ${item.compliant ? '#3fb950' : '#ffd33d'};">
                                    ${item.compliant ? '✅ Compliant' : '⚠️ Review Required'}
                                </span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Recommendations -->
                <div class="analysis-result-card">
                    <h5 style="color: #e0e0e0; margin-bottom: 15px;">Recommendations</h5>
                    <div style="color: #7d8590;">
                        ${analysisData.recommendations.map((rec, index) => `
                            <div style="margin-bottom: 12px; padding: 12px; background: #0d1117; border-radius: 6px; border-left: 3px solid ${rec.priority === 'high' ? '#da3633' : rec.priority === 'medium' ? '#ffd33d' : '#3fb950'};">
                                <div style="font-weight: bold; color: #e0e0e0; margin-bottom: 5px;">${index + 1}. ${rec.title}</div>
                                <div style="font-size: 0.9rem;">${rec.description}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 25px;">
                    <button onclick="downloadReport()" style="
                        background: linear-gradient(45deg, #238636, #2ea043);
                        color: white;
                        border: none;
                        padding: 12px 24px;
                        border-radius: 8px;
                        font-family: 'Fira Code', monospace;
                        font-weight: 600;
                        cursor: pointer;
                        margin-right: 15px;
                        transition: all 0.3s ease;
                    " onmouseover="this.style.background='linear-gradient(45deg, #2ea043, #3fb950)'" onmouseout="this.style.background='linear-gradient(45deg, #238636, #2ea043)'">
                        📄 Download Full Report
                    </button>
                    <button onclick="this.closest('.analysis-modal').remove()" style="
                        background: transparent;
                        color: #58a6ff;
                        border: 2px solid #58a6ff;
                        padding: 10px 24px;
                        border-radius: 8px;
                        font-family: 'Fira Code', monospace;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    " onmouseover="this.style.background='rgba(88, 166, 255, 0.1)'" onmouseout="this.style.background='transparent'">
                        Close
                    </button>
                </div>
            </div>
        `;
    }
    
    function generateAnalysisResults() {
        const riskScores = [
            { score: 25, class: 'risk-low', description: 'Low risk contract with standard terms and minimal legal concerns.' },
            { score: 55, class: 'risk-medium', description: 'Moderate risk level. Some clauses require attention and review.' },
            { score: 85, class: 'risk-high', description: 'High risk contract with several problematic clauses requiring immediate attention.' }
        ];
        
        const selectedRisk = riskScores[Math.floor(Math.random() * riskScores.length)];
        
        return {
            overallRisk: selectedRisk,
            keyFindings: [
                "Payment terms are clearly defined with 30-day payment window",
                "Termination clause includes proper notice period requirements",
                "Liability limitation is within industry standard ranges",
                "Intellectual property rights are adequately protected",
                "Force majeure clause covers standard contingencies"
            ],
            clauses: [
                { type: "Payment Terms", status: "✅ Standard" },
                { type: "Termination", status: "✅ Compliant" },
                { type: "Liability", status: "⚠️ Review" },
                { type: "IP Rights", status: "✅ Protected" },
                { type: "Confidentiality", status: "✅ Standard" },
                { type: "Dispute Resolution", status: "✅ Defined" }
            ],
            compliance: [
                { regulation: "GDPR", compliant: true },
                { regulation: "SOX Compliance", compliant: true },
                { regulation: "Industry Standards", compliant: false },
                { regulation: "Local Regulations", compliant: true }
            ],
            recommendations: [
                {
                    title: "Update liability limitation clause",
                    description: "Consider increasing liability caps to better align with industry standards and project scope.",
                    priority: "medium"
                },
                {
                    title: "Add data protection addendum",
                    description: "Include specific data protection clauses to ensure full GDPR compliance.",
                    priority: "high"
                },
                {
                    title: "Clarify intellectual property ownership",
                    description: "Define more specific terms around derivative works and joint intellectual property.",
                    priority: "low"
                }
            ]
        };
    }
    
    function downloadReport() {
        // Simulate report download
        const reportContent = `
CONTRACT ANALYSIS REPORT
========================

Generated: ${new Date().toLocaleDateString()}

EXECUTIVE SUMMARY
-----------------
This contract has been analyzed using AI-powered legal analysis tools.
Overall risk assessment and key findings are detailed below.

KEY METRICS
-----------
- Overall Risk Score: 55/100 (Medium Risk)
- Clauses Analyzed: 23
- Compliance Issues: 1
- Recommendations: 3

DETAILED FINDINGS
-----------------
[Full detailed analysis would be included here in a real implementation]

This is a demonstration of the LegalAnalyzer platform.
Contact us for full functionality and detailed reporting.
        `;
        
        const blob = new Blob([reportContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'contract-analysis-report.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        
        // Show success message
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #238636;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            z-index: 10001;
            font-family: 'Fira Code', monospace;
            box-shadow: 0 5px 15px rgba(35, 134, 54, 0.3);
        `;
        toast.textContent = '✅ Report downloaded successfully!';
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }
    
    if (watchDemoBtn) {
        watchDemoBtn.addEventListener('click', function() {
            showDemoVideo();
        });
    }
    
    // Demo video modal function
    function showDemoVideo() {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            backdrop-filter: blur(5px);
        `;
        
        modal.innerHTML = `
            <div style="
                background: #0d1117;
                border: 1px solid #30363d;
                border-radius: 12px;
                padding: 0;
                max-width: 90vw;
                max-height: 90vh;
                width: 800px;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
                overflow: hidden;
                position: relative;
            ">
                <div style="
                    background: #161b22;
                    padding: 15px 20px;
                    border-bottom: 1px solid #30363d;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                ">
                    <h3 style="
                        color: #58a6ff;
                        margin: 0;
                        font-family: 'Fira Code', monospace;
                        font-size: 1.2rem;
                    ">🎥 LegalAnalyzer Demo</h3>
                    <button onclick="this.closest('.demo-modal').remove()" style="
                        background: #da3633;
                        color: white;
                        border: none;
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        cursor: pointer;
                        font-size: 16px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    ">×</button>
                </div>
                <div style="padding: 20px;">
                    <div style="
                        background: #21262d;
                        border-radius: 8px;
                        padding: 20px;
                        margin-bottom: 20px;
                        border: 1px solid #30363d;
                    ">
                        <video 
                            controls 
                            autoplay 
                            style="
                                width: 100%;
                                height: 400px;
                                border-radius: 8px;
                                background: #000;
                                border: 1px solid #30363d;
                            "
                            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23000'/%3E%3Ctext x='50%25' y='35%25' font-family='Fira Code, monospace' font-size='28' fill='%2358a6ff' text-anchor='middle' dy='.3em'%3E⚖️ LegalAnalyzer Demo%3C/text%3E%3Ctext x='50%25' y='50%25' font-family='Fira Code, monospace' font-size='16' fill='%23e0e0e0' text-anchor='middle' dy='.3em'%3EAI-Powered Contract Analysis%3C/text%3E%3Ctext x='50%25' y='65%25' font-family='Fira Code, monospace' font-size='14' fill='%237d8590' text-anchor='middle' dy='.3em'%3EClick to watch our platform in action%3C/text%3E%3C/svg%3E"
                        >
                            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
                            <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4">
                            <p style="color: #e0e0e0; text-align: center; font-family: 'Fira Code', monospace;">
                                Your browser doesn't support HTML video. This demo showcases our AI-powered contract analysis platform.
                                <br><a href="#contact" style="color: #58a6ff;">Contact us</a> for a live demonstration.
                            </p>
                        </video>
                    </div>
                    <div style="
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 15px;
                        margin-bottom: 20px;
                    ">
                        <div style="
                            background: #161b22;
                            padding: 15px;
                            border-radius: 8px;
                            border: 1px solid #30363d;
                            text-align: center;
                        ">
                            <div style="color: #3fb950; font-size: 2rem; margin-bottom: 10px;">⚡</div>
                            <h4 style="color: #e0e0e0; margin: 0 0 5px 0; font-family: 'Fira Code', monospace;">Lightning Speed</h4>
                            <p style="color: #7d8590; margin: 0; font-size: 0.9rem;">Analyze contracts in under 30 seconds</p>
                        </div>
                        <div style="
                            background: #161b22;
                            padding: 15px;
                            border-radius: 8px;
                            border: 1px solid #30363d;
                            text-align: center;
                        ">
                            <div style="color: #58a6ff; font-size: 2rem; margin-bottom: 10px;">🎯</div>
                            <h4 style="color: #e0e0e0; margin: 0 0 5px 0; font-family: 'Fira Code', monospace;">99.8% Accuracy</h4>
                            <p style="color: #7d8590; margin: 0; font-size: 0.9rem;">AI-powered risk detection</p>
                        </div>
                    </div>
                    <div style="text-align: center;">
                        <button onclick="this.closest('.demo-modal').remove()" style="
                            background: linear-gradient(45deg, #238636, #2ea043);
                            color: white;
                            border: none;
                            padding: 12px 24px;
                            border-radius: 8px;
                            font-family: 'Fira Code', monospace;
                            font-weight: 600;
                            cursor: pointer;
                            margin-right: 10px;
                            transition: all 0.3s ease;
                        " onmouseover="this.style.background='linear-gradient(45deg, #2ea043, #3fb950)'" onmouseout="this.style.background='linear-gradient(45deg, #238636, #2ea043)'">
                            Get Started
                        </button>
                        <button onclick="this.closest('.demo-modal').remove()" style="
                            background: transparent;
                            color: #58a6ff;
                            border: 2px solid #58a6ff;
                            padding: 10px 24px;
                            border-radius: 8px;
                            font-family: 'Fira Code', monospace;
                            font-weight: 600;
                            cursor: pointer;
                            transition: all 0.3s ease;
                        " onmouseover="this.style.background='rgba(88, 166, 255, 0.1)'" onmouseout="this.style.background='transparent'">
                            Close Demo
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        modal.className = 'demo-modal';
        
        // Close modal when clicking outside
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.remove();
            }
        });
        
        // Close modal with Escape key
        const handleEscape = function(e) {
            if (e.key === 'Escape') {
                modal.remove();
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);
        
        document.body.appendChild(modal);
        
        // Animate modal entrance
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.opacity = '1';
            modal.style.transition = 'opacity 0.3s ease';
        }, 10);
    }
    
    // Add command palette (Ctrl+Shift+P)
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.shiftKey && e.key === 'P') {
            e.preventDefault();
            showCommandPalette();
        }
    });
    
    function showCommandPalette() {
        const palette = document.createElement('div');
        palette.style.cssText = `
            position: fixed;
            top: 10%;
            left: 50%;
            transform: translateX(-50%);
            background: #161b22;
            border: 1px solid #30363d;
            border-radius: 8px;
            padding: 0;
            font-family: 'Fira Code', monospace;
            color: #e0e0e0;
            z-index: 10000;
            width: 500px;
            box-shadow: 0 0 50px rgba(88, 166, 255, 0.3);
        `;
        
        palette.innerHTML = `
            <input type="text" placeholder="Type a command..." style="
                width: 100%;
                background: transparent;
                border: none;
                padding: 15px;
                color: #e0e0e0;
                font-family: 'Fira Code', monospace;
                font-size: 14px;
                outline: none;
            ">
            <div style="border-top: 1px solid #30363d; padding: 10px;">
                <div style="padding: 5px 10px; cursor: pointer;" onmouseover="this.style.background='#21262d'" onmouseout="this.style.background='transparent'" onclick="document.getElementById('home').scrollIntoView({behavior: 'smooth'}); this.parentElement.parentElement.remove();">→ Go to Home</div>
                <div style="padding: 5px 10px; cursor: pointer;" onmouseover="this.style.background='#21262d'" onmouseout="this.style.background='transparent'" onclick="document.getElementById('about').scrollIntoView({behavior: 'smooth'}); this.parentElement.parentElement.remove();">→ Go to About</div>
                <div style="padding: 5px 10px; cursor: pointer;" onmouseover="this.style.background='#21262d'" onmouseout="this.style.background='transparent'" onclick="document.getElementById('how-it-works').scrollIntoView({behavior: 'smooth'}); this.parentElement.parentElement.remove();">→ Go to How It Works</div>
                <div style="padding: 5px 10px; cursor: pointer;" onmouseover="this.style.background='#21262d'" onmouseout="this.style.background='transparent'" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'}); this.parentElement.parentElement.remove();">→ Go to Contact</div>
            </div>
        `;
        
        document.body.appendChild(palette);
        palette.querySelector('input').focus();
        
        palette.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                palette.remove();
            }
        });
        
        document.addEventListener('click', function(e) {
            if (!palette.contains(e.target)) {
                palette.remove();
            }
        });
    }

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.step, .feature-card, .about-text, .about-features');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add active state to navigation based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        const allNavLinks = document.querySelectorAll('.nav-menu a');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all nav links
                allNavLinks.forEach(link => link.classList.remove('active'));
                // Add active class to current nav link
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    });

    // Feature cards hover effect with enhanced animations
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 30px rgba(88, 166, 255, 0.3)';
            
            // Add glitch effect
            this.style.animation = 'glitch 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
            this.style.animation = '';
        });
        
        // Add staggered animation on load
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Add developer console Easter egg
    console.log(`
%c
██╗     ███████╗ ██████╗  █████╗ ██╗      █████╗ ███╗   ██╗ █████╗ ██╗   ██╗███████╗███████╗██████╗ 
██║     ██╔════╝██╔════╝ ██╔══██╗██║     ██╔══██╗████╗  ██║██╔══██╗██║   ██║╚══███╔╝██╔════╝██╔══██╗
██║     █████╗  ██║  ███╗███████║██║     ███████║██╔██╗ ██║███████║██║   ██║  ███╔╝ █████╗  ██████╔╝
██║     ██╔══╝  ██║   ██║██╔══██║██║     ██╔══██║██║╚██╗██║██╔══██║██║   ██║ ███╔╝  ██╔══╝  ██╔══██╗
███████╗███████╗╚██████╔╝██║  ██║███████╗██║  ██║██║ ╚████║██║  ██║╚██████╔╝███████╗███████╗██║  ██║
╚══════╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝

%cHey there, fellow developer! 👨‍💻
Looking at the code? We like your style!

Try these Easter eggs:
• Press Ctrl+Shift+P for command palette
• Type 'konami' in console for a surprise
• Check out our API at /api/v1/docs (coming soon!)

Built with ❤️ for developers, by developers.
`, 
    'color: #58a6ff; font-family: monospace;', 
    'color: #3fb950; font-size: 14px; font-family: "Fira Code", monospace;'
    );
    
    // Konami code Easter egg
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.code);
        konamiCode = konamiCode.slice(-konamiSequence.length);
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            activateDevMode();
            konamiCode = [];
        }
    });
    
    function activateDevMode() {
        document.body.style.filter = 'hue-rotate(180deg)';
        document.body.style.transition = 'filter 1s ease';
        
        const devMsg = document.createElement('div');
        devMsg.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #3fb950;
            color: #0d1117;
            padding: 15px;
            border-radius: 8px;
            font-family: 'Fira Code', monospace;
            font-weight: bold;
            z-index: 10000;
            animation: slideIn 0.5s ease;
        `;
        devMsg.textContent = '🚀 Developer Mode Activated!';
        document.body.appendChild(devMsg);
        
        setTimeout(() => {
            document.body.style.filter = '';
            devMsg.remove();
        }, 3000);
    }
    
    // Add debug info to window object for developers
    window.LegalAnalyzer = {
        version: '2.0.0',
        theme: 'dark',
        debug: true,
        features: ['ai-analysis', 'risk-assessment', 'compliance-check'],
        api: 'https://api.legalanalyzer.dev/v1'
    };
});

// Add CSS for active nav link and animations
const style = document.createElement('style');
style.textContent = `
    .nav-menu a.active {
        color: #58a6ff;
        font-weight: bold;
        background-color: #21262d;
    }
    
    @keyframes glitch {
        0% { transform: translate(0); }
        20% { transform: translate(-2px, 2px); }
        40% { transform: translate(-2px, -2px); }
        60% { transform: translate(2px, 2px); }
        80% { transform: translate(2px, -2px); }
        100% { transform: translate(0); }
    }
    
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            top: 70px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 70px);
            background: #161b22;
            flex-direction: column;
            justify-content: start;
            align-items: center;
            padding-top: 2rem;
            transition: left 0.3s ease;
            box-shadow: 0 2px 10px rgba(0,0,0,0.5);
            border-right: 1px solid #30363d;
            z-index: 999;
        }
        
        .nav-menu.active {
            left: 0;
        }
        
        .nav-menu li {
            margin: 1rem 0;
            width: 100%;
            text-align: center;
        }
        
        .nav-menu a {
            display: block;
            padding: 1rem 2rem;
            width: 100%;
            color: #e0e0e0;
            font-size: 1.1rem;
        }
        
        .nav-toggle.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .nav-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .nav-toggle.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
    }
`;
document.head.appendChild(style);
