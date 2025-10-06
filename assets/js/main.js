// Icon search functionality
const iconData = [
    // Letters
    {name: 'adiba-a', code: '\\e800', category: 'letters'},
    {name: 'adiba-b', code: '\\e801', category: 'letters'},
    {name: 'adiba-c', code: '\\e802', category: 'letters'},
    // UI Icons
    {name: 'adiba-home', code: '\\e807', category: 'ui', semantic: true},
    {name: 'adiba-user', code: '\\e814', category: 'ui', semantic: true},
    {name: 'adiba-menu', code: '\\e804', category: 'ui', semantic: true},
    {name: 'adiba-close', code: '\\e817', category: 'ui', semantic: true},
    {name: 'adiba-search', code: '\\e812', category: 'ui', semantic: true},
    // Arrows
    {name: 'adiba-arrow-up', code: '\\e800', category: 'arrows', semantic: true},
    {name: 'adiba-arrow-down', code: '\\e800', category: 'arrows', semantic: true},
    {name: 'adiba-arrow-left', code: '\\e800', category: 'arrows', semantic: true},
    {name: 'adiba-arrow-right', code: '\\e800', category: 'arrows', semantic: true},
    // Social
    {name: 'adiba-heart', code: '\\e807', category: 'social', semantic: true},
    {name: 'adiba-star', code: '\\e812', category: 'social', semantic: true},
    {name: 'adiba-d', code: '\\e803', category: 'letters'},
    {name: 'adiba-e', code: '\\e804', category: 'letters'}
];

function searchIcons(query) {
    if (!query) return iconData;
    return iconData.filter(icon => 
        icon.name.toLowerCase().includes(query.toLowerCase()) ||
        icon.category.toLowerCase().includes(query.toLowerCase())
    );
}

function filterIconsOnPage(query) {
    const icons = document.querySelectorAll('.span3');
    icons.forEach(icon => {
        const iconName = icon.querySelector('.i-name')?.textContent || '';
        if (iconName.toLowerCase().includes(query.toLowerCase()) || !query) {
            icon.style.display = 'block';
        } else {
            icon.style.display = 'none';
        }
    });
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('input[name="search"]');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.trim();
            filterIconsOnPage(query);
        });
    }
});

// Copy to clipboard functionality
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard:', text);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}
