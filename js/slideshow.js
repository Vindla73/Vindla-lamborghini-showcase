const carImages = [
    'https://paultan.org/image/2019/08/Lamborghini-Aventador-SVJ-63-Roadster-1.jpg',
    'https://media.drive.com.au/obj/tx_q:80,rs:auto:1280:720:1/driveau/upload/cms/uploads/vyLGTShRgqEJ0TwuXSzP',
    'https://simonfurlonger.co.uk/wp-content/uploads/2023/cars/166962853315848.jpg',
    'https://spots.ag/2024/12/06/lamborghini-aventador-lp700-4-roadster-98b49-c892206122024183459_3.jpg',
    'https://images.unsplash.com/photo-1621135802920-133df287f89c',
    'https://www.lamborghiniranchomirage.com/static/dealer-14400/Lamborghini-Revuelto-639378.jpg',
    'https://hdqwalls.com/wallpapers/lamborghini-aventador-sv-4k-ae.jpg',
    'https://www.autocar.co.uk/sites/autocar.co.uk/files/Egoistamusum2.jpg',
    'https://cdn.motor1.com/images/mgl/1MoB9/s1/lamborghini-urus-by-keyvany.jpg',
    'https://images.hdqwalls.com/download/2019-lamborghini-terzo-millennio-digital-art-jj-2880x1800.jpg'
    
];
let currentSlide = 0;
function initializeSlideshow() {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.innerHTML = '';
    
    carImages.forEach(image => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.style.backgroundImage = `url(${image})`;
        slidesContainer.appendChild(slide);
    });
    
    updateSlidePosition();
}
function changeSlide(direction) {
    currentSlide = (currentSlide + direction + carImages.length) % carImages.length;
    updateSlidePosition();
}
function updateSlidePosition() {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}