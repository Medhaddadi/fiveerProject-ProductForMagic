const box = document.getElementById('box');

const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick() {
  if (box.style.display === 'none') {
    box.style.display = 'block';

    btn.textContent = 'Hide div';
  } else {
    box.style.display = 'none';

    btn.textContent = 'Show div';
  }
});
const box2 = document.getElementById('box2');

const btn2 = document.getElementById('btn2');

btn2.addEventListener('click', function handleClick2() {
  if (box2.style.display === 'none') {
    box2.style.display = 'block';

    btn2.textContent = 'Hide div';
  } else {
    box2.style.display = 'none';

    btn2.textContent = 'Show div';
  }
});