function hideAIOverview() {
  // Try the known data attribute
  const overview = document.querySelector('[data-attrid="ai_overview"]');
  if (overview) {
    overview.style.display = 'none';
  }

  // Try matching for a class name (adjust as needed if Google changes it)
  const possibleSelectors = [
    'div[data-attrid="ai_overview"]',
    'div[jsname="gGF8Vb"]', // Sometimes Google's AI Overview uses this jsname
    'div:has(h2:contains("AI Overview"))', // Experimental: if AI Overview heading exists
    'div[aria-label="AI Overview"]',
    'div:has([aria-label="AI Overview"])'
  ];

  for (const sel of possibleSelectors) {
    document.querySelectorAll(sel).forEach(el => {
      el.style.display = 'none';
    });
  }
}

// Run on load
window.addEventListener('load', hideAIOverview);

// Also run when new content is loaded (dynamic search results)
const observer = new MutationObserver(hideAIOverview);
observer.observe(document.body, { childList: true, subtree: true });