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
                image: "img/nourish_and_co.png"
            },
            {
                title: "Northline Health",
                type: "Community healthcare brand",
                image: "img/northline_health.png"
            },
            {
                title: "Solstice Studio",
                type: "Creative business identity",
                image: "img/solstice_studio.png"
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
                image: "img/the_annual_edit.png"
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
                image: "img/pause_breathe.png"
            },
            {
                title: "More Than a Meal",
                type: "Food access awareness",
                image: "img/more_than_a_meal.png"
            },
            {
                title: "Built for the Next Step",
                type: "Education enrollment ads",
                image: "img/for_the_next_step.png"
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
                image: "img/bloom_creative.png"
            },
            {
                title: "Local Table",
                type: "Seasonal content system",
                image: "img/local_table.png"
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
                    <div class="case-art">
                        <img
                            src="${project.image}"
                            alt="${project.title} - ${project.type}"
                            loading="lazy"
                        >

                        <div class="case-number">
                            <span>0${index + 1}</span>
                        </div>
                    </div>

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