const bars = document.querySelectorAll('.bar');

const landingPage = document.querySelector('.top-div');

const graph = document.querySelector('.graph-container');

const options = { threshold: 0 };

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      for (let i = 0; i < 2; i++) {
        let child = entry.target.children[i];
        child.classList.add('show');
        child.children[0].classList.add('move-text');
      }
    }
  })
  // console.log(entries)
}, options);

observer.observe(landingPage);

// const observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("graph-show");
//       let children = entry.target.children;
//       for (let i = 0; i < children.length; i++) {
//         children[i].children[0].classList.add("bar-grow");
//       }
//     }
//   })
// }, options);

// observer.observe(graph);