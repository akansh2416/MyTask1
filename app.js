const sliderImgs = ["trybg2.jpg", "trybg3.jpg", "trybg4.jpg", "trybg7.jpg", "trybg5.jpg","trybg1.jpg"];
let sliderImage = document.querySelector('.background-image');
let sliderGrids = [...document.querySelectorAll('.grid-item')];

let currentImage = 0;

setInterval(() => {
    changeSliderImage();
}, 5000);

const changeSliderImage = () => {
    sliderGrids.map((gridItem, index) => {
        setTimeout(() => {
            gridItem.classList.remove('hide');

            setTimeout(() => {

                if (index == sliderGrids.length - 1) {
                    if (currentImage >= sliderImgs.length - 1) {
                        currentImage = 0;
                    } else {
                        currentImage++;
                    }

                    sliderImage.src = `bgimg/${sliderImgs[currentImage]}`;

                    sliderGrids.map((item, i) => {
                        setTimeout(() => {
                            item.classList.add('hide')
                        }, i * 100);
                    })

                }

            }, 100);

        }, index * 100);
    })
}


