
  const slider = document.querySelector('.testimonial-slider');
  const cards = document.querySelectorAll('.testimonial-card');
  const cardWidth = 320 + 32; // width + gap
  const visibleCards = 2;
  let index = 0;

  setInterval(() => {
    index++;
    if (index > cards.length / visibleCards - 1) index = 0;
    slider.style.transform = `translateX(-${index * cardWidth * visibleCards}px)`;
  }, 2000);



counters.forEach(counter => {
  const target = parseInt(counter.getAttribute('data-target'));
  const format = counter.getAttribute('data-format');

  let count = 0;

  const updateCount = () => {
    const increment = Math.ceil(target / speed);

    if (count < target) {
      count += increment;
      counter.innerText = formatCount(count, format);
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = formatCount(target, format);
    }
  };

  const formatCount = (num, formatType) => {
    if (formatType === "k") {
      return `${(num / 1000).toFixed(1).replace('.0', '')}K+`;
    } else if (formatType === "plus") {
      return `${num.toLocaleString()}+`;
    } else {
      return num;
    }
  };

  updateCount();
});

function scrollSlider(direction) {
  const slider = document.getElementById("slider");
  const scrollAmount = 370; // Width of one image + gap
  slider.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}



