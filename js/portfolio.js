const collections = {
    "brand-design": {
        n: "01",
        title: "Brand Design",
        tag: "Building visual worlds with clarity and character.",
        accent: "#c46a78",
        projects: [
            {
                title: "Nourish & Co.",
                type: "Food and wellness identity",
                image: "img/Nourish and Co/nourish_and_co.png",
                gallery: [
                {
                    src: "img/Nourish and Co/nourish_and_co.png",
                    caption: "Brand overview"
                },
                {
                    src: "img/Nourish and Co/nourish_logo.png",
                    caption: "Logo design"
                },
                {
                    src: "img/Nourish and Co/nourish_packaging.png",
                    caption: "Packaging design"
                },
                {
                    src: "img/Nourish and Co/nourish_business_cards.png",
                    caption: "Business cards"
                }
            ]
            },
            {
                title: "Northline Health",
                type: "Community healthcare brand",
                image: "img/Northline Health/northline_health.png",
                gallery: [
                {
                    src: "img/Northline Health/northline_health.png",
                    caption: "Brand overview"
                },
                {
                    src: "img/Northline Health/northline_logo.png",
                    caption: "Logo design"
                },
                {
                    src: "img/Northline Health/northline_packaging.png",
                    caption: "Packaging design"
                },
                {
                    src: "img/Northline Health/northline_business_cards.png",
                    caption: "Business cards"
                }
            ]
            },
            {
                title: "Solstice Studio",
                type: "Creative business identity",
                image: "img/Solstice Studio/solstice_studio.png",
                gallery: [
                {
                    src: "img/Solstice Studio/solstice_studio.png",
                    caption: "Brand overview"
                },
                {
                    src: "img/Solstice Studio/solstice_logo.png",
                    caption: "Logo design"
                },
                {
                    src: "img/Solstice Studio/solstice_packaging.png",
                    caption: "Packaging design"
                },
                {
                    src: "img/Solstice Studio/solstice_business_cards.png",
                    caption: "Business cards"
                }
            ]
            }
        ]
    },

    "marketing-design": {
        n: "02",
        title: "Marketing Design",
        tag: "Information shaped to inspire action.",
        accent: "#5aa6b8",
        projects: [
            {
                title: "Care Starts Here",
                type: "Healthcare poster series",
                image: "img/care_starts_here.png"
            },
            {
                title: "Open Doors",
                type: "Community event campaign",
                image: "img/open_doors.png"
            },
            {
                title: "The Annual Edit",
                type: "Editorial report",
                image: "img/The Annual Edit/the_annual_edit.png"
            }
        ]
    },

    "advertising": {
        n: "03",
        title: "Advertising",
        tag: "Focused ideas made impossible to ignore.",
        accent: "#d28548",
        projects: [
            {
                title: "Pause. Breathe.",
                type: "Mental wellness campaign",
                image: "img/Pause Breathe/pause_breathe.png"
            },
            {
                title: "More Than a Meal",
                type: "Food access awareness",
                image: "img/More Than a Meal/more_than_a_meal.png"
            },
            {
                title: "Built for the Next Step",
                type: "Education enrollment ads",
                image: "img/For the Next Step/for_the_next_step.png"
            }
        ]
    },

    "social-media-branding": {
        n: "04",
        title: "Social Media Branding",
        tag: "Consistent enough to recognize. Flexible enough to grow.",
        accent: "#9274cb",
        projects: [
            {
                title: "Brightside Pediatrics",
                type: "Social content toolkit",
                image: "img/brightside_pediatrics.png"
            },
            {
                title: "Bloom Creative",
                type: "Launch campaign",
                image: "img/Bloom Creative/bloom_creative.png"
            },
            {
                title: "Local Table",
                type: "Seasonal content system",
                image: "img/Local Table/local_table.png"
            }
        ]
    },

    "childrens-work": {
        n: "05",
        title: "Children's Work",
        tag: "Curiosity, color, and stories made to grow with.",
        accent: "#69b59e",
        projects: [
            {
                title: "The Brave Little Brush",
                type: "Dental health story",
                image: "img/brave_little_brush.png"
            },
            {
                title: "Animal Adventure Hub",
                type: "Learning website",
                image: "img/animal_adventure_hub.png"
            },
            {
                title: "Crayon Anything",
                type: "Creative play platform",
                image: "img/crayon_anything.png"
            }
        ]
    },

    "logos": {
        n: "06",
        title: "Logos",
        tag: "Distinctive marks. Carefully reduced.",
        accent: "#c5a56c",
        projects: [
            {
                title: "Little Dreamers",
                type: "Children's creative mark",
                image: "img/little_dreamers.png"
            },
            {
                title: "BrittaneesArtStudio",
                type: "Personal identity mark",
                image: "img/brittanees_art_studio.png"
            },
            {
                title: "CodesandBeyond",
                type: "Studio monogram",
                image: "img/codes_and_beyond.png"
            }
        ]
    }
};

const slug = document.body.dataset.collection;
const collection = collections[slug];

if (collection) {
    document.documentElement.style.setProperty("--accent", collection.accent);

    document.title = `${collection.title} | CodesandBeyond`;

    document.querySelector("#number").textContent = collection.n;
    document.querySelector("#heading").textContent = collection.title;
    document.querySelector("#tagline").textContent = collection.tag;

    const projectsContainer = document.querySelector("#projects");

    projectsContainer.innerHTML = collection.projects
        .map((project, index) => {
            return `
                <article>
                    <button
                        type="button"
                        class="case-art gallery-trigger"
                        data-project="${index}"
                        aria-label="Open gallery for ${project.title}"
                        aria-haspopup="dialog"
                    >
                        <img
                            src="${project.image}"
                            alt="${project.title} - ${project.type}"
                            loading="lazy"
                        >

                        <span class="case-number">
                            <span>0${index + 1}</span>
                        </span>
                    </button>

                    <div class="project-info">
                        <p>${project.type}</p>
                        <h2>${project.title}</h2>
                        <span>
                            Selected concept from the
                            ${collection.title.toLowerCase()} collection.
                        </span>
                    </div>
                </article>
            `;
        })
        .join("");
}

if (collection) {
    const gallery = document.createElement("dialog");
    gallery.className = "project-gallery";
    gallery.setAttribute("aria-labelledby", "gallery-title");

    gallery.innerHTML = `
        <div class="gallery-heading">
            <h2 id="gallery-title"></h2>
            <button type="button" class="gallery-close" autofocus>
                Close ✕
            </button>
        </div>

        <figure class="gallery-figure">
            <img class="gallery-image" alt="">
            <figcaption
                class="gallery-caption"
                aria-live="polite"
                aria-atomic="true"
            ></figcaption>
        </figure>

        <p class="gallery-error" role="status" hidden>
            This image could not load. Please try another item.
        </p>

        <div class="gallery-controls">
            <button type="button" class="gallery-prev"
                aria-label="Previous image">← Previous</button>
            <span class="gallery-count"></span>
            <button type="button" class="gallery-next"
                aria-label="Next image">Next →</button>
        </div>
    `;

    document.body.append(gallery);

    const title = gallery.querySelector("#gallery-title");
    const image = gallery.querySelector(".gallery-image");
    const caption = gallery.querySelector(".gallery-caption");
    const count = gallery.querySelector(".gallery-count");
    const previous = gallery.querySelector(".gallery-prev");
    const next = gallery.querySelector(".gallery-next");
    const error = gallery.querySelector(".gallery-error");

    let items = [];
    let currentIndex = 0;
    let projectTitle = "";
    let opener = null;

    function showImage(index) {
        currentIndex = (index + items.length) % items.length;

        const item = items[currentIndex];

        error.hidden = true;
        image.hidden = false;
        image.alt = item.alt || `${projectTitle}: ${item.caption || "Project image"}`;
        image.src = item.src;

        caption.textContent = item.caption || projectTitle;
        count.textContent = `${currentIndex + 1} / ${items.length}`;

        previous.disabled = items.length < 2;
        next.disabled = items.length < 2;
    }

    image.addEventListener("error", () => {
        image.hidden = true;
        error.hidden = false;
    });

    document.querySelectorAll(".gallery-trigger").forEach((button) => {
        button.addEventListener("click", () => {
            const project = collection.projects[Number(button.dataset.project)];

            items = project.gallery?.length
                ? project.gallery
                : [{ src: project.image, caption: project.type }];

            projectTitle = project.title;
            title.textContent = projectTitle;
            opener = button;

            showImage(0);
            gallery.showModal();
            document.body.classList.add("gallery-open");
        });
    });

    previous.addEventListener("click", () => showImage(currentIndex - 1));
    next.addEventListener("click", () => showImage(currentIndex + 1));

    gallery.querySelector(".gallery-close").addEventListener("click", () => {
        gallery.close();
    });

    gallery.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            showImage(currentIndex + (event.key === "ArrowRight" ? 1 : -1));
        }
    });

    // Close when the visitor clicks outside the popup.
    gallery.addEventListener("click", (event) => {
        const bounds = gallery.getBoundingClientRect();

        if (
            event.target === gallery &&
            (event.clientX < bounds.left ||
             event.clientX > bounds.right ||
             event.clientY < bounds.top ||
             event.clientY > bounds.bottom)
        ) {
            gallery.close();
        }
    });

    // Escape closes a native dialog automatically.
    gallery.addEventListener("close", () => {
        document.body.classList.remove("gallery-open");
        opener?.focus();
    });
}
