export function initImageSwitcher(mainImgSelector, thumbnailSelector) {
    const mainImg = document.querySelector(mainImgSelector);
    const thumbnails = document.querySelector(thumbnailSelector);

    if (!mainImg || !thumbnails.length) {
        console.warn('Image switcher elements not found!');
        return;
    }
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            mainImg.src = thumbnail.src;
        });
    });
}