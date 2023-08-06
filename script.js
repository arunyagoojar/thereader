const blogList = document.querySelector('#blog-list');

fetch('data.json')
    .then(res => res.json())
    .then(data => {
        // For each blog post in the JSON data, create a preview element
        data.forEach(post => {
            const preview = document.createElement('div');
            preview.classList.add('magazine-column');

            // Add the title, date, and first paragraph of content to the preview
            preview.innerHTML = `
                <article class="article">
                    <figure class="article-img">
                        <img src="${post.image}" />
                    </figure>
                    <h2 class="article-title article-title--medium">
                        <a href="blog.html?title=${encodeURIComponent(post.title)}&date=${encodeURIComponent(post.date)}" class="article-link">${post.title}</a>
                    </h2>
                    <div class="article-excerpt" style="font-size: 12px; padding:0 0 1em;">
                        <p>${post.date}</p>
                    </div>
                    <div class="article-excerpt">
                        ${post.content.slice(0, post.content.indexOf('</p>') + 4)}
                    </div>
                </article>`;
            blogList.appendChild(preview);
        });
    });
