document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    const authButtons = document.querySelector('.auth-buttons');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            authButtons.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Featured Profiles Slider
    const profilesSlider = document.getElementById('profilesSlider');
    const prevProfileBtn = document.getElementById('prevProfile');
    const nextProfileBtn = document.getElementById('nextProfile');
    
    if (profilesSlider) {
        // Check if profiles are already in the HTML
        const existingProfiles = profilesSlider.querySelectorAll('.profile-card');
        
        // If profiles exist in HTML, use those instead of dynamic loading
        if (existingProfiles.length > 0) {
            let currentIndex = 0;
            const profilesPerView = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
            
            function updateProfilesVisibility() {
                existingProfiles.forEach((profile, index) => {
                    if (index >= currentIndex && index < currentIndex + profilesPerView) {
                        profile.style.display = 'block';
                    } else {
                        profile.style.display = 'none';
                    }
                });
            }
            
            // Initial visibility update
            updateProfilesVisibility();
            
            // Event listeners for slider controls
            if (prevProfileBtn && nextProfileBtn) {
                prevProfileBtn.addEventListener('click', function() {
                    if (currentIndex > 0) {
                        currentIndex--;
                        updateProfilesVisibility();
                    }
                });
                
                nextProfileBtn.addEventListener('click', function() {
                    if (currentIndex + profilesPerView < existingProfiles.length) {
                        currentIndex++;
                        updateProfilesVisibility();
                    }
                });
            }
            
            // Responsive slider
            window.addEventListener('resize', function() {
                const newProfilesPerView = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
                
                if (newProfilesPerView !== profilesPerView) {
                    profilesPerView = newProfilesPerView;
                    updateProfilesVisibility();
                }
            });
        } else {
            // Original dynamic loading code (keep this as a fallback)
            // Sample profile data - in a real app, this would come from a database
            const profiles = [
                {
                    id: 1,
                    name: 'Priya S.',
                    age: 28,
                    location: 'Mumbai',
                    occupation: 'Software Engineer',
                    image: 'images/profile1.jpg',
                    bio: 'Passionate about technology and travel. Looking for someone who shares my interests.',
                    tags: ['Tech', 'Travel', 'Music']
                },
                {
                    id: 2,
                    name: 'Rahul K.',
                    age: 32,
                    location: 'Delhi',
                    occupation: 'Doctor',
                    image: 'images/profile2.jpg',
                    bio: 'Doctor by profession, photographer by passion. Seeking a partner who values honesty and compassion.',
                    tags: ['Healthcare', 'Photography', 'Reading']
                },
                {
                    id: 3,
                    name: 'Ananya M.',
                    age: 27,
                    location: 'Bangalore',
                    occupation: 'Marketing Manager',
                    image: 'images/profile3.jpg',
                    bio: 'Creative soul with a love for art and culture. Looking for someone who appreciates the finer things in life.',
                    tags: ['Art', 'Culture', 'Fitness']
                },
                {
                    id: 4,
                    name: 'Vikram S.',
                    age: 30,
                    location: 'Chennai',
                    occupation: 'Entrepreneur',
                    image: 'images/profile4.jpg',
                    bio: 'Business owner with a passion for innovation. Looking for a supportive partner to share life\'s journey.',
                    tags: ['Business', 'Innovation', 'Travel']
                },
                {
                    id: 5,
                    name: 'Neha R.',
                    age: 26,
                    location: 'Pune',
                    occupation: 'Architect',
                    image: 'images/profile5.jpg',
                    bio: 'Creative architect who loves designing spaces. Seeking someone who appreciates art and architecture.',
                    tags: ['Design', 'Art', 'Nature']
                },
                {
                    id: 6,
                    name: 'Arjun P.',
                    age: 31,
                    location: 'Hyderabad',
                    occupation: 'Financial Analyst',
                    image: 'images/profile6.jpg',
                    bio: 'Finance professional who enjoys hiking and outdoor activities. Looking for an adventurous partner.',
                    tags: ['Finance', 'Adventure', 'Fitness']
                }
            ];
            
            let currentIndex = 0;
            const profilesPerView = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
            
            // Function to render profiles
            function renderProfiles() {
                profilesSlider.innerHTML = '';
                
                for (let i = currentIndex; i < currentIndex + profilesPerView; i++) {
                    const profileIndex = i % profiles.length;
                    const profile = profiles[profileIndex];
                    
                    const profileCard = document.createElement('div');
                    profileCard.className = 'profile-card';
                    
                    profileCard.innerHTML = `
                        <div class="profile-image">
                            <img src="${profile.image}" alt="${profile.name}">
                        </div>
                        <div class="profile-info">
                            <h3>${profile.name}</h3>
                            <div class="profile-meta">
                                <span>${profile.age} years</span>
                                <span>${profile.location}</span>
                            </div>
                            <p class="profile-bio">${profile.bio}</p>
                            <div class="profile-tags">
                                ${profile.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                            </div>
                            <div class="profile-actions">
                                <a href="profile.html?id=${profile.id}" class="btn btn-outline">View Profile</a>
                                <a href="connect.html?id=${profile.id}" class="btn btn-primary">Connect</a>
                            </div>
                        </div>
                    `;
                    
                    profilesSlider.appendChild(profileCard);
                }
            }
            
            // Initial render
            renderProfiles();
            
            // Event listeners for slider controls
            if (prevProfileBtn && nextProfileBtn) {
                prevProfileBtn.addEventListener('click', function() {
                    currentIndex = (currentIndex - 1 + profiles.length) % profiles.length;
                    renderProfiles();
                });
                
                nextProfileBtn.addEventListener('click', function() {
                    currentIndex = (currentIndex + 1) % profiles.length;
                    renderProfiles();
                });
            }
            
            // Responsive slider
            window.addEventListener('resize', function() {
                const newProfilesPerView = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
                
                if (newProfilesPerView !== profilesPerView) {
                    profilesPerView = newProfilesPerView;
                    renderProfiles();
                }
            });
        }
    }
    
    // Newsletter Form Submission
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email) {
                // In a real app, this would send the email to a server
                alert(`Thank you for subscribing with ${email}! You'll receive our newsletter soon.`);
                emailInput.value = '';
            }
        });
    }
    
    // Animated Counter for Stats
    const statCounts = document.querySelectorAll('.count');
    
    if (statCounts.length > 0) {
        const animateCounter = (counter, target) => {
            const count = +counter.innerText.replace(/[^\d]/g, '');
            const increment = target / 100;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment).toLocaleString() + '+';
                setTimeout(() => animateCounter(counter, target), 10);
            } else {
                counter.innerText = target.toLocaleString() + '+';
            }
        };
        
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.innerText.replace(/[^\d]/g, ''));
                    
                    setTimeout(() => {
                        animateCounter(counter, target);
                    }, 200);
                    
                    observer.unobserve(counter);
                }
            });
        };
        
        const observer = new IntersectionObserver(observerCallback, {
            threshold: 0.5
        });
        
        statCounts.forEach(counter => {
            observer.observe(counter);
        });
    }
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form Validation for Login/Register
    const authForms = document.querySelectorAll('.auth-form');
    
    if (authForms.length > 0) {
        authForms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                let isValid = true;
                const formInputs = this.querySelectorAll('input[required]');
                
                formInputs.forEach(input => {
                    if (!input.value.trim()) {
                        isValid = false;
                        input.classList.add('is-invalid');
                    } else {
                        input.classList.remove('is-invalid');
                    }
                    
                    // Email validation
                    if (input.type === 'email' && input.value.trim()) {
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if (!emailRegex.test(input.value.trim())) {
                            isValid = false;
                            input.classList.add('is-invalid');
                        }
                    }
                    
                    // Password validation
                    if (input.type === 'password' && input.value.trim()) {
                        if (input.value.length < 8) {
                            isValid = false;
                            input.classList.add('is-invalid');
                        }
                    }
                });
                
                if (isValid) {
                    // In a real app, this would submit the form to a server
                    alert('Form submitted successfully!');
                    this.reset();
                } else {
                    alert('Please fill in all required fields correctly.');
                }
            });
        });
    }
    
    // Profile Tabs
    const profileTabs = document.querySelectorAll('.profile-tab');
    const profileSections = document.querySelectorAll('.profile-section');
    
    if (profileTabs.length > 0 && profileSections.length > 0) {
        profileTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const targetSection = this.getAttribute('data-section');
                
                // Update active tab
                profileTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                // Show target section, hide others
                profileSections.forEach(section => {
                    if (section.id === targetSection) {
                        section.style.display = 'block';
                    } else {
                        section.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Search Filters Toggle
    const filterToggle = document.querySelector('.filter-toggle');
    const filterContent = document.querySelector('.filter-content');
    
    if (filterToggle && filterContent) {
        filterToggle.addEventListener('click', function() {
            filterContent.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
});