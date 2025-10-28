// Campus Reporting System - Main JavaScript
// Interactive functionality and data management

// Sample data for demonstration
const sampleReports = [
    {
        id: 'L2510010004',
        title: 'Broken Light Fixture in Engineering Building',
        category: 'infrastructure',
        status: 'pending',
        priority: 'medium',
        location: 'Engineering Building, Room 205',
        submittedBy: 'John Smith',
        submittedAt: '2024-01-15T10:30:00Z',
        description: 'The ceiling light in room 205 is flickering and needs immediate attention.',
        images: ['resources/report-sample-1.jpg'],
        assignedTo: 'Maintenance Team A'
    },
    {
        id: 'L2510010005',
        title: 'AC Not Working in Library',
        category: 'facilities',
        status: 'processing',
        priority: 'high',
        location: 'Main Library, 3rd Floor',
        submittedBy: 'Sarah Johnson',
        submittedAt: '2024-01-15T14:20:00Z',
        description: 'Air conditioning unit on the 3rd floor of the library is not functioning properly.',
        images: ['resources/report-sample-2.jpg'],
        assignedTo: 'HVAC Team'
    },
    {
        id: 'L2510010006',
        title: 'Damaged Sidewalk Near Student Center',
        category: 'infrastructure',
        status: 'completed',
        priority: 'low',
        location: 'Student Center Walkway',
        submittedBy: 'Mike Davis',
        submittedAt: '2024-01-14T09:15:00Z',
        description: 'Several concrete slabs are cracked and pose a tripping hazard.',
        images: ['resources/report-sample-3.jpg'],
        assignedTo: 'Grounds Maintenance'
    },
    {
        id: 'L2510010007',
        title: 'Projector Issue in Lecture Hall B',
        category: 'academic',
        status: 'processing',
        priority: 'high',
        location: 'Lecture Hall B',
        submittedBy: 'Dr. Emily Chen',
        submittedAt: '2024-01-16T08:45:00Z',
        description: 'Projector in Lecture Hall B is displaying distorted images and needs repair.',
        images: [],
        assignedTo: 'AV Support Team'
    },
    {
        id: 'L2510010008',
        title: 'Security Camera Outage - Parking Lot C',
        category: 'security',
        status: 'completed',
        priority: 'high',
        location: 'Parking Lot C',
        submittedBy: 'Security Department',
        submittedAt: '2024-01-13T16:30:00Z',
        description: 'Security cameras in Parking Lot C are offline and need immediate attention.',
        images: [],
        assignedTo: 'Security Systems'
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize typewriter effect
    initTypewriter();
    
    // Initialize particle background
    initParticleBackground();
    
    // Initialize charts
    initializeCharts();
    
    // Populate reports list
    populateReportsList();
    
    // Animate statistics counters
    animateCounters();
    
    // Initialize search functionality
    initializeSearch();
    
    // Add scroll animations
    initScrollAnimations();
}

// Typewriter effect for hero section
function initTypewriter() {
    const typed = new Typed('#typed-text', {
        strings: [
            'Campus Reporting Dashboard',
            'Streamlined Operations',
            'Efficient Issue Resolution',
            'Data-Driven Insights'
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
}

// Particle background effect
function initParticleBackground() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1;
            this.opacity = Math.random() * 0.3 + 0.1;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
            ctx.fill();
        }
    }
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Initialize charts
function initializeCharts() {
    initStatusChart();
    initCategoryChart();
}

function initStatusChart() {
    const chartDom = document.getElementById('statusChart');
    if (!chartDom) return;
    
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            textStyle: {
                fontSize: 12
            }
        },
        series: [
            {
                name: 'Report Status',
                type: 'pie',
                radius: ['40%', '70%'],
                center: ['60%', '50%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 8,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 16,
                        fontWeight: 'bold'
                    },
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 342, name: 'In Progress', itemStyle: { color: '#3b82f6' } },
                    { value: 892, name: 'Completed', itemStyle: { color: '#10b981' } },
                    { value: 156, name: 'Pending', itemStyle: { color: '#f59e0b' } },
                    { value: 89, name: 'Rejected', itemStyle: { color: '#ef4444' } }
                ]
            }
        ]
    };
    
    myChart.setOption(option);
    
    // Add click interaction
    myChart.on('click', function(params) {
        filterReportsByStatus(params.name.toLowerCase().replace(' ', '-'));
    });
    
    // Responsive
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

function initCategoryChart() {
    const chartDom = document.getElementById('categoryChart');
    if (!chartDom) return;
    
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['Security', 'Academic', 'Facilities', 'Infrastructure', 'Maintenance']
        },
        series: [
            {
                name: 'Reports Count',
                type: 'bar',
                data: [45, 89, 156, 234, 178],
                itemStyle: {
                    color: function(params) {
                        const colors = ['#06b6d4', '#8b5cf6', '#f59e0b', '#3b82f6', '#10b981'];
                        return colors[params.dataIndex];
                    },
                    borderRadius: [0, 4, 4, 0]
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.3)'
                    }
                }
            }
        ]
    };
    
    myChart.setOption(option);
    
    // Add click interaction
    myChart.on('click', function(params) {
        const categoryMap = {
            'Security': 'security',
            'Academic': 'academic',
            'Facilities': 'facilities',
            'Infrastructure': 'infrastructure',
            'Maintenance': 'maintenance'
        };
        filterReportsByCategory(categoryMap[params.name]);
    });
    
    // Responsive
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// Animate statistics counters
function animateCounters() {
    const counters = [
        { element: 'total-reports', target: 1247, duration: 2000 },
        { element: 'in-progress', target: 342, duration: 1800 },
        { element: 'resolved', target: 892, duration: 2200 }
    ];
    
    counters.forEach(counter => {
        const element = document.getElementById(counter.element);
        if (!element) return;
        
        anime({
            targets: { count: 0 },
            count: counter.target,
            duration: counter.duration,
            easing: 'easeOutExpo',
            update: function(anim) {
                element.textContent = Math.floor(anim.animatables[0].target.count);
            }
        });
    });
    
    // Animate response time
    anime({
        targets: { value: 0 },
        value: 2.4,
        duration: 2000,
        easing: 'easeOutExpo',
        update: function(anim) {
            const element = document.getElementById('response-time');
            if (element) {
                element.textContent = anim.animatables[0].target.value.toFixed(1) + 'h';
            }
        }
    });
}

// Populate reports list
function populateReportsList() {
    const reportsList = document.getElementById('reportsList');
    if (!reportsList) return;
    
    reportsList.innerHTML = '';
    
    sampleReports.slice(0, 5).forEach(report => {
        const reportElement = createReportElement(report);
        reportsList.appendChild(reportElement);
    });
    
    // Add stagger animation
    anime({
        targets: '#reportsList > div',
        translateY: [20, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
        duration: 600,
        easing: 'easeOutExpo'
    });
}

function createReportElement(report) {
    const div = document.createElement('div');
    div.className = 'border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors cursor-pointer';
    div.onclick = () => viewReportDetail(report.id);
    
    const statusClass = getStatusClass(report.status);
    const timeAgo = getTimeAgo(report.submittedAt);
    
    div.innerHTML = `
        <div class="flex items-start justify-between mb-2">
            <div class="flex-1">
                <h4 class="text-sm font-medium text-gray-900 mb-1">${report.title}</h4>
                <p class="text-xs text-gray-600 mono">#${report.id}</p>
            </div>
            <span class="status-badge ${statusClass}">${report.status}</span>
        </div>
        <div class="flex items-center justify-between text-xs text-gray-500">
            <span>${report.location}</span>
            <span>${timeAgo}</span>
        </div>
        <div class="mt-2 flex items-center space-x-2">
            <span class="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">${report.category}</span>
            ${report.priority === 'high' ? '<span class="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">High Priority</span>' : ''}
        </div>
    `;
    
    return div;
}

function getStatusClass(status) {
    const statusClasses = {
        'pending': 'status-pending',
        'processing': 'status-processing',
        'completed': 'status-completed',
        'rejected': 'status-rejected'
    };
    return statusClasses[status] || 'status-pending';
}

function getTimeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
}

// Search and filter functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(filterReports, 300));
    }
}

function filterReports() {
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const statusFilter = document.getElementById('statusFilter')?.value || '';
    const categoryFilter = document.getElementById('categoryFilter')?.value || '';
    
    const filteredReports = sampleReports.filter(report => {
        const matchesSearch = !searchTerm || 
            report.title.toLowerCase().includes(searchTerm) ||
            report.id.toLowerCase().includes(searchTerm) ||
            report.location.toLowerCase().includes(searchTerm);
            
        const matchesStatus = !statusFilter || report.status === statusFilter;
        const matchesCategory = !categoryFilter || report.category === categoryFilter;
        
        return matchesSearch && matchesStatus && matchesCategory;
    });
    
    updateReportsList(filteredReports);
}

function updateReportsList(reports) {
    const reportsList = document.getElementById('reportsList');
    if (!reportsList) return;
    
    reportsList.innerHTML = '';
    
    if (reports.length === 0) {
        reportsList.innerHTML = `
            <div class="text-center py-8 text-gray-500">
                <svg class="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <p>No reports found matching your criteria.</p>
            </div>
        `;
        return;
    }
    
    reports.slice(0, 5).forEach(report => {
        const reportElement = createReportElement(report);
        reportsList.appendChild(reportElement);
    });
}

function filterReportsByStatus(status) {
    const statusFilter = document.getElementById('statusFilter');
    if (statusFilter) {
        statusFilter.value = status;
        filterReports();
    }
}

function filterReportsByCategory(category) {
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.value = category;
        filterReports();
    }
}

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

function viewReportDetail(reportId) {
    // Store report ID for detail page
    localStorage.setItem('selectedReportId', reportId);
    window.location.href = 'report-detail.html';
}

function showAdvancedFilters() {
    const modal = document.getElementById('advancedSearchModal');
    if (modal) {
        modal.classList.remove('hidden');
        anime({
            targets: modal.querySelector('div'),
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutExpo'
        });
    }
}

function hideAdvancedFilters() {
    const modal = document.getElementById('advancedSearchModal');
    if (modal) {
        anime({
            targets: modal.querySelector('div'),
            scale: [1, 0.8],
            opacity: [1, 0],
            duration: 200,
            easing: 'easeInExpo',
            complete: () => {
                modal.classList.add('hidden');
            }
        });
    }
}

function refreshReports() {
    // Simulate refresh with animation
    const refreshButton = event.target;
    anime({
        targets: refreshButton,
        rotate: 360,
        duration: 600,
        easing: 'easeInOutQuad'
    });
    
    // Re-populate reports
    setTimeout(() => {
        populateReportsList();
    }, 300);
}

function updateChart(period) {
    // Update chart based on selected period
    console.log(`Updating chart for period: ${period}`);
    // This would typically fetch new data and update the chart
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    translateY: [20, 0],
                    opacity: [0, 1],
                    duration: 600,
                    easing: 'easeOutExpo'
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animation
    document.querySelectorAll('.card-hover').forEach(el => {
        observer.observe(el);
    });
}

// Handle page visibility changes for real-time updates
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        // Page is visible again, refresh data
        console.log('Page became visible, refreshing data...');
        // This would typically poll for new data
    }
});

// Export functions for global access
window.filterReports = filterReports;
window.showAdvancedFilters = showAdvancedFilters;
window.hideAdvancedFilters = hideAdvancedFilters;
window.refreshReports = refreshReports;
window.updateChart = updateChart;
window.viewReportDetail = viewReportDetail;