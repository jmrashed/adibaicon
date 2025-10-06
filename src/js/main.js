// Icon search functionality
const iconData = [
    {name: 'adiba-a', code: '\\e800', category: 'letter'},
    {name: 'adiba-b', code: '\\e801', category: 'letter'},
    {name: 'adiba-c', code: '\\e802', category: 'letter'},
    {name: 'adiba-d', code: '\\e803', category: 'letter'},
    {name: 'adiba-e', code: '\\e804', category: 'letter'},
    {name: 'adiba-f', code: '\\e805', category: 'letter'},
    {name: 'adiba-g', code: '\\e806', category: 'letter'},
    {name: 'adiba-h', code: '\\e807', category: 'letter'},
    {name: 'adiba-i', code: '\\e808', category: 'letter'},
    {name: 'adiba-j', code: '\\e809', category: 'letter'},
    {name: 'adiba-k', code: '\\e80a', category: 'letter'},
    {name: 'adiba-l', code: '\\e80b', category: 'letter'},
    {name: 'adiba-m', code: '\\e80c', category: 'letter'},
    {name: 'adiba-n', code: '\\e80d', category: 'letter'},
    {name: 'adiba-o', code: '\\e80e', category: 'letter'},
    {name: 'adiba-p', code: '\\e80f', category: 'letter'},
    {name: 'adiba-q', code: '\\e810', category: 'letter'},
    {name: 'adiba-r', code: '\\e811', category: 'letter'},
    {name: 'adiba-s', code: '\\e812', category: 'letter'},
    {name: 'adiba-t', code: '\\e813', category: 'letter'},
    {name: 'adiba-u', code: '\\e814', category: 'letter'},
    {name: 'adiba-v', code: '\\e815', category: 'letter'},
    {name: 'adiba-w', code: '\\e816', category: 'letter'},
    {name: 'adiba-x', code: '\\e817', category: 'letter'},
    {name: 'adiba-y', code: '\\e818', category: 'letter'},
    {name: 'adiba-z', code: '\\e819', category: 'letter'}
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
