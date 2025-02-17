function preventHorizontalScroll() {
    if (window.innerWidth < 1024) {  // Only apply if width is less than 1024px (tablets & mobile)
        document.body.style.overflowX = "hidden";
        document.documentElement.style.overflowX = "hidden";
    } else {  // Enable horizontal scrolling on desktop (1024px and above)
        document.body.style.overflowX = "";
        document.documentElement.style.overflowX = "";
    }
}

// Run on page load
document.addEventListener("DOMContentLoaded", preventHorizontalScroll);

// Run when resizing the window
window.addEventListener("resize", preventHorizontalScroll);