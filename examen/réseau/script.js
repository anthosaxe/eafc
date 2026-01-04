// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.section-animate').forEach(section => {
    observer.observe(section);
});

// Tabs Functionality
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const tabId = this.getAttribute('data-tab');
        const parent = this.closest('section');

        // Hide all tab contents in this section
        parent.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });

        // Reset all buttons in this section
        parent.querySelectorAll('.tab-btn').forEach(button => {
            if (button.classList.contains('bg-white')) {
                button.classList.remove('bg-white', 'text-blue-600', 'text-green-600');
                if (parent.id === 'tcp') {
                    button.classList.add('bg-blue-600', 'text-white');
                } else {
                    button.classList.add('bg-green-600', 'text-white');
                }
            }
        });

        // Activate clicked button
        if (parent.id === 'tcp') {
            this.classList.remove('bg-blue-600', 'text-white');
            this.classList.add('bg-white', 'text-blue-600');
        } else {
            this.classList.remove('bg-green-600', 'text-white');
            this.classList.add('bg-white', 'text-green-600');
        }

        // Show selected tab content
        const selectedTab = document.getElementById(tabId);
        if (selectedTab) {
            selectedTab.classList.add('active');
        }
    });
});