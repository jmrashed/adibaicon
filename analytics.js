// Simple analytics for adibaIcon usage
class AdibaAnalytics {
    constructor() {
        this.events = [];
        this.sessionId = this.generateSessionId();
    }
    
    generateSessionId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    
    track(event, data = {}) {
        const eventData = {
            event,
            data,
            timestamp: Date.now(),
            sessionId: this.sessionId,
            url: window.location.href
        };
        
        this.events.push(eventData);
        
        // Send to analytics endpoint (placeholder)
        if (typeof fetch !== 'undefined') {
            fetch('/api/analytics', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(eventData)
            }).catch(() => {}); // Silent fail
        }
    }
    
    trackIconUsage(iconName) {
        this.track('icon_used', { icon: iconName });
    }
    
    trackPageView() {
        this.track('page_view');
    }
    
    trackDownload(type) {
        this.track('download', { type });
    }
}

// Auto-track icon usage
if (typeof window !== 'undefined') {
    const analytics = new AdibaAnalytics();
    
    // Track page views
    analytics.trackPageView();
    
    // Track icon clicks
    document.addEventListener('click', (e) => {
        const icon = e.target.closest('[class*="adiba-"]');
        if (icon) {
            const classes = icon.className.split(' ');
            const iconClass = classes.find(c => c.startsWith('adiba-') && !c.includes('xs') && !c.includes('sm') && !c.includes('md') && !c.includes('lg') && !c.includes('xl'));
            if (iconClass) {
                analytics.trackIconUsage(iconClass);
            }
        }
    });
    
    window.adibaAnalytics = analytics;
}