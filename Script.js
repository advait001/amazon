const scroller = document.getElementById("imageScroller");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

// Scroll step size equals the width of one image
const scrollAmount = scroller.offsetWidth * 0.9; // 90% of container

nextBtn.addEventListener("click", () => {
    scroller.scrollBy({ left: scrollAmount + 20, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
    scroller.scrollBy({ left: -scrollAmount - 20, behavior: "smooth" });
});

// Optional: Auto scroll (every 5 seconds)
let autoScroll = false; // Change to true to enable

if (autoScroll) {
    setInterval(() => {
        scroller.scrollBy({ left: scrollAmount + 20, behavior: "smooth" });
    }, 5000);
}
