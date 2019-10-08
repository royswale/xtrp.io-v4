// remove loading class from body when page is loaded, and fire oncroll event when loaded
window.addEventListener("load", () => {
    // fire onscroll event on window
    window.dispatchEvent(new Event("scroll"));

    document.body.classList.remove("loading");
});

// add "not_top" to nav when has scrolled from top of page
window.addEventListener("scroll", () => {
    const scrollPixelsFromTop = window.pageYOffset;
    const navHasNotTopClass = document.querySelector("body > nav").classList.contains("not_top");
    if(scrollPixelsFromTop > 0) {
        if(!navHasNotTopClass) {
            document.querySelector("body > nav").classList.add("not_top");
        }
    } else if (navHasNotTopClass) {
        document.querySelector("body > nav").classList.remove("not_top");
    }
});

// register service worker if possible and console log register status
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/views/assets/js/service_worker.js').then(function(reg){
        console.log("Service Worker Registered Successfully");
    }).catch(function(err) {
        console.log("Service Worker Register Failure: ", err);
    });
}

// add target="_blank" attribute to post content links if link is not on current domain
Array.from(
    document.querySelectorAll("body > div.container .post_content a")
).forEach((link) => {
    if(!link.hasAttribute("target") && link.hostname != window.location.hostname) {
        link.setAttribute("target", "_blank");
    }
});

// load post blocks on scroll functionality
if(typeof postBlocksToLoadOnScroll !== 'undefined') {
    window.addEventListener("scroll", () => {
        const scrollHeight = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
        const scrollPixelsFromTop = window.pageYOffset + window.innerHeight;

        console.log("scroll height: " + scrollHeight);
        console.log("scroll pixels from top: " + scrollPixelsFromTop);

        // if 5rem from bottom of page, load more blocks
        if(scrollHeight - scrollPixelsFromTop < (10 * parseFloat(getComputedStyle(document.documentElement).fontSize)) ){
            if(postBlocksToLoadOnScroll.length <= 15) {
                postBlocksToLoadOnScroll.forEach((blockInBase64) => {
                    document.querySelector("body > div.container > ul.block_list").innerHTML += atob(blockInBase64);
                });
                postBlocksToLoadOnScroll = [];
            }else {
                for(let i = 0; i < 15; i++) {
                    document.querySelector("body > div.container > ul.block_list").innerHTML += atob(postBlocksToLoadOnScroll[i]);
                }
                postBlocksToLoadOnScroll = postBlocksToLoadOnScroll.slice(15);
            }
        }
    });
}