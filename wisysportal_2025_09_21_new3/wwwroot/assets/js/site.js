//#region Header Sticky
try {
window.onscroll = function () {
    toggleHeaderPosition();
};

function toggleHeaderPosition() {
    const header = document.getElementsByTagName("header")[0];
    const headerWebMenu = header.querySelector("#web-menu-section");
    const scrollPosition = window.scrollY; // Get current scroll position

    if (scrollPosition > 50) {
        headerWebMenu.classList.add("scrolling");
    } else {
        headerWebMenu.classList.remove("scrolling");
    }
}
//#endregion

//#region Set Header Height
function setHeaderHeight(timeout = 300) {
    // Select the header element
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    setTimeout(() => {
        if (header) {
            // Close collapse menu in header
            header?.querySelector('.collapse.show')?.classList?.remove('show');

            // Get the header's height
            const headerHeight = header.offsetHeight;

            // Get the footer's height
            const footerHeight = footer.offsetHeight;

            // Get the viewport height
            const screenHeight = window.innerHeight;

            // Convert Rate
            const ConvertRate = 5;

            // Set the value in the custom CSS property
            document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
            document.documentElement.style.setProperty('--footer-height', `${footerHeight}px`);
            document.documentElement.style.setProperty('--main-height', `${screenHeight - ConvertRate - headerHeight}px`);
            document.documentElement.style.setProperty('--main-min-height', `${screenHeight - ConvertRate - footerHeight}px`);
        }
    }, timeout);
}

// Call the function on page load
setHeaderHeight();

// Attach the function to the resize event
window.addEventListener('resize', setHeaderHeight);
//#endregion

//#region services swiper
// Declare Swiper globally
let servicesSwiper;

function initSwiper() {
    // Destroy if already initialized
    if (servicesSwiper) {
        servicesSwiper.destroy(true, true);
    }

    // Initialize Swiper
    servicesSwiper = new Swiper('#slider-service-swiper', {
        spaceBetween: 1,
        slidesPerView: "auto", // Fix: remove duplicate slidesPerView
        centeredSlides: true,
        centeredSlidesBounds: true,
        loop: true,
        navigation: {
            nextEl: '.custom-services-swiper-button-next',
            prevEl: '.custom-services-swiper-button-prev',
        }
    });
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
    initSwiper();
});
//#endregion

//#region  toggle password
function togglePassword(icon) {
    const passwordInput = icon.previousElementSibling;
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    } else {
        passwordInput.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
}
//#endregion

//#region Animated Landing Screen Flyer
const fly = document.getElementById("fly");
if (fly) {
    document.addEventListener("mousemove", (e) => {
        // Calculate the relative mouse position
        const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
        const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;

        if (window.innerWidth > 768) {
            // Apply smooth transitions and depth-based parallax effect
            fly.querySelector('.flyer.flyer-1').style.transform = `translate(${x * 5}px,  ${y * 5}px)`;
            fly.querySelector('.flyer.flyer-2').style.transform = `translate(${x * 15}px, ${-y * 15}px)`;
            fly.querySelector('.flyer.flyer-3').style.transform = `translate(${-x * 20}px, ${y * 20}px)`;
            fly.querySelector('.flyer.flyer-4').style.transform = `translate(${-x * 10}px, ${-y * 10}px)`;
        }
    });

    // Add smooth transitions using CSS
    const flyers = document.querySelectorAll('.flyer svg');
    flyers.forEach(flyer => {
        flyer.style.transition = 'transform 0.2s ease-out'; // Smooth transition effect
    });
}
//#endregion

//#region Function to update the input value based on the select value
function setupSelectListener(selectId, inputId) {
    // Get the select and input elements
    const selectElement = document.getElementById(selectId);
    const inputElement = document.getElementById(inputId);

    if (!selectElement || !inputElement) {
        console.error("Select or input element not found.");
        return;
    }

    // Update input value when select changes
    $('#' + selectId).on('change.select2', function () {
        inputElement.value = this.value;
    });

    // Set the initial value
    inputElement.value = selectElement.value;
}
function setupSelectListenerWithPlaceholder(selectId, inputId, placeholderId) {
    // Get the select and input elements
    const selectElement = document.getElementById(selectId);
    const inputElement = document.getElementById(inputId);
    const placeholderElement = document.getElementById(placeholderId);

    if (!selectElement || !inputElement) {
        console.error("Select or input element not found.");
        return;
    }

    // Update input value when select changes
    $('#' + selectId).on('change.select2', function () {
        inputElement.value = selectElement.options[selectElement.selectedIndex].getAttribute('value');
    });

    // Update input value when select changes
    $('#' + selectId).on('change.select2', function () {
        placeholderElement.placeholder = selectElement.options[selectElement.selectedIndex].getAttribute('placeholder');
    });

    // Set the initial value
    inputElement.value = selectElement.value;
    placeholderElement.placeholder = selectElement.options[selectElement.selectedIndex].getAttribute('placeholder');
}
//#endregion

//#region automatically adjust textarea height
function setupAutoHeightTextarea(textareaId) {
    const textarea = document.getElementById(textareaId);

    if (!textarea) {
        console.error(`Textarea with ID "${textareaId}" not found.`);
        return;
    }

    // Function to adjust height dynamically
    const adjustHeight = () => {
        textarea.style.height = 'auto'; // Reset height
        textarea.style.height = `${textarea.scrollHeight + 2}px`; // Set height to fit content
    };

    // Add event listener to adjust height on input
    textarea.addEventListener('input', adjustHeight);

    // Adjust height initially if there's pre-filled content
    adjustHeight();
}
//#endregion

//#region Initialize Select2 on your dropdown
$(document).ready(function () {
    function initializeSelect2() {
        $('.select-two').select2({
            dropdownPosition: 'below',
            placeholder: "",
            width: '100%',
            minimumResultsForSearch: Infinity
        });
    }

    initializeSelect2(); // Initial load

    // Re-initialize Select2 on window resize
    let resizeTimeout;
    $(window).resize(function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function () {
            if ($('.select-two').data('select2')) {
                $('.select-two').select2('destroy');
            }
            initializeSelect2();
        }, 300); // Delay execution to avoid performance issues
    });
});
//#endregion

//#region Alert Helper
class AlertHelper {
    //#region Constructor
    constructor(alertSelector) {
        this.alertElement = document.querySelector(alertSelector);
        if (!this.alertElement) {
            console.error(`Alert element not found for selector: ${alertSelector}`);
            return;
        }

        // Add event listener for close button
        const closeButton = this.alertElement.querySelector('.close');
        if (closeButton) {
            closeButton.addEventListener('click', () => this.hideAlert());
        }
    }
    //#endregion

    //#region Public Methods
    // Show the alert
    showAlert() {
        if (this.alertElement) {
            this.alertElement.classList.remove('hide');
            this.preventScroll();
        }
    }

    // Hide the alert
    hideAlert() {
        if (this.alertElement) {
            this.alertElement.classList.add('hide');
            this.allowScroll();
        }
    }
    //#endregion

    //#region Private Methods
    // Prevent scrolling on the body
    preventScroll() {
        document.body.style.overflow = 'hidden';
    }

    // Allow scrolling on the body
    allowScroll() {
        document.body.style.overflow = '';
    }
    //#endregion
}
//#endregion

//#region toggle Faq using [data-toggle="faq"]
document.addEventListener("DOMContentLoaded", function () {
    initToggleFaq();
});
/**
 * @constant {NodeList} faqSections
 * @description Selects all FAQ sections with the attribute `data-toggle="faq"`.
 */
function initToggleFaq() {
    const faqSections = document.querySelectorAll('[data-toggle="faq"]');

    faqSections.forEach((faqSection) => {
        /**
         * @attribute data-toggle-close-all
         * @type {boolean}
         * @description Determines whether only one FAQ item can be open at a time.
         */
        const closeAll = faqSection.getAttribute("data-toggle-close-all") === "true";

        /**
         * @constant {NodeList} items
         * @description Selects all items within the current FAQ section with the attribute `data-toggle-item`.
         */
        const items = faqSection.querySelectorAll("[data-toggle-item]");

        items.forEach((item) => {
            const question = item.querySelector(".faq-question");
            const answer = item.querySelector(".faq-answer");

            question.addEventListener("click", () => {
                if (closeAll) {
                    items.forEach((otherItem) => {
                        if (otherItem !== item) {
                            otherItem.classList.remove("open");
                            otherItem.querySelector(".faq-answer").style.maxHeight = null;
                        }
                    });
                }

                if (item.classList.contains("open")) {
                    item.classList.remove("open");
                    answer.style.maxHeight = null;
                } else {
                    item.classList.add("open");
                    //1200 value is related to padding brake point
                    //.faq-answer {
                    //  padding: toRem(32px) 0 0;
                    //  @include resDown(xl) {
                    //    padding: toRem(16px) 0 0;
                    //  }
                    //}
                    if (window.innerWidth > 1200) {
                        answer.style.maxHeight = `${answer.scrollHeight + 32}px`;
                    } else {
                        answer.style.maxHeight = `${answer.scrollHeight + 16}px`;
                    }

                    // Navigate to the opened element after 0.15s
                    setTimeout(() => {
                        item.scrollIntoView({ behavior: "smooth", block: "center" });
                    }, 150);
                }
            });
        });
    });
}
//#endregion

//#region go back to the previous page in the browser's history
function goBack() {
    window.history.back();
}
//#endregion

//#region Set Height To CSS Variable
function setHeightToCSSVariable(className, cssVariable) {
    function updateHeight() {
        // Get all elements matching the class name
        const elements = document.querySelectorAll(`.${className}`);

        if (elements.length > 0) {
            let finalHeight = 0;
            elements.forEach(element => {
                if (element.offsetHeight > finalHeight) {
                    finalHeight = element.offsetHeight;
                }
            });

            document.documentElement.style.setProperty(cssVariable, `${finalHeight}px`);
        } else {
            console.warn(`No elements found with class name: ${className}`);
        }
    }

    // Ensure the DOM is fully loaded
    setTimeout(updateHeight, 50);
    // Recalculate height on window resize
    window.addEventListener('resize', updateHeight);
}
//#endregion

//#region video js event listener
function setVideoJS(videoId) {
    setTimeout(() => {

        const video = document.getElementById(videoId);
        const videoContainer = video.closest(".video-container");

        // Check if the poster image is loaded
        if (video.getAttribute("poster")) {
            const poster = new Image();
            poster.src = video.getAttribute("poster");

            poster.onload = function () {
                videoContainer.classList.add("loaded");
            };
        } else {
            video.classList.add("bg-primary-900");
            videoContainer.classList.add("loaded");
        }

        // Set up Video.js player
        const player = videojs(videoId, {
            autoplay: false,
            controls: true,
            loop: false,
            responsive: true,
            fluid: true,
        });

        // Custom play button functionality
        const customPlayButton = videoContainer.querySelector("#custom-play-button");

        customPlayButton.addEventListener("click", function () {
            player.play();
        });

        player.on("play", function () {
            customPlayButton.classList.add("hidden");
        });

        player.on("ended", function () {
            customPlayButton.classList.remove("hidden");
        });
    }, 300);
}
//#endregion

//#region Swup
document.addEventListener("DOMContentLoaded", () => {
    if (Swup) {
        // Initialize Swup
        const swup = new Swup();

        // Get reference to the transition element
        const transitionElement = document.querySelector('.swup-transition');

        // Add hooks for advanced transitions
        swup.hooks.on('visit:start', () => {
            // Start the exit animation
            transitionElement.classList.add('swup-transition-enter');
            transitionElement.classList.remove('swup-transition-exit');
        });

        swup.hooks.on('visit:end', () => {
            // Start the entry animation
            transitionElement.classList.remove('swup-transition-enter');
            transitionElement.classList.add('swup-transition-exit');
        });

        swup.hooks.on('page:view', () => {
            console.log("Swup content replaced. Re-executing scripts...");

            // Find all <script> tags with the "rereunafterswup" attribute
            document.querySelectorAll('script[RerunAfterSwup]').forEach((script) => {
                const newScript = document.createElement('script');
                newScript.textContent = script.textContent; // Copy script content
                document.body.appendChild(newScript); // Execute script
                document.body.removeChild(newScript); // Clean up
            });

            // Re-initialize Select2
            setTimeout(function () {
                if ($('.select-two').data('select2')) {
                    $('.select-two').select2('destroy');
                }
                $('.select-two').select2({
                    dropdownPosition: 'below',
                    placeholder: "",
                    width: '100%',
                    minimumResultsForSearch: Infinity
                });
            }, 300);

            // Re-initialize Toggle Faq
            initToggleFaq();
        });
    }
});


} catch (err) {
    console.log("Global script site.js check:", err);
}
//#endregion