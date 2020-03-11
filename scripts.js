const bars = document.querySelectorAll('.bar');

const graph = document.querySelector('.graph-container');

const options = { threshold: 0.5 };

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("graph-show");
      let children = entry.target.children;
      for (let i = 0; i < children.length; i++) {
        children[i].children[0].classList.add("bar-grow");
      }
    }
  })
}, options);

observer.observe(graph);