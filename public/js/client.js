fetch('http://localhost:8080/api/v0/gallery')
.then(response => response.json())
.then(data => {
  const hikes = data;
  return hikes
}).then(hikes => {
  const gallery = document.querySelector('.gallery');
  let outputHTML = '';
  hikes.forEach(function(hike) {
    outputHTML += `
    <figure class="card">
    <img src="./images/gallery/hike${hike.id}.jpg" height="${hike.height}" width="${hike.width}" alt="${hike.title}"></img>
      <figcaption>${hike.credit}</figcaption>
    </figure>
    `
    gallery.innerHTML = outputHTML;
  })
});

