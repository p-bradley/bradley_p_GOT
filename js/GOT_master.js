(() => {
	console.log('fired');

	//  variable stack
	// grab the shields at the bttom of the pge
	const 	shields 	= document.querySelectorAll('.sigil-container'),
			lightBox	= document.querySelector('.lightBox'),
			video = document.querySelector('video'),
			closeLB = document.querySelector('.lightbox-close'),
			banners = document.querySelector('#houseImages');

	function showLightbox() {

		let targetHouse = this.className.split(" ")[1];

		let targetSrc = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

		video.src = `video/House-${targetSrc}.mp4`;

		lightBox.classList.add('show-lightBox');

		video.load();
		video.play();
	}

	function hideLightbox() {
		lightBox.classList.remove('show-lightBox');
		video.currentTime = 0;
		video.pause();
	}

	function animateBanner() {
		const offSet = 600;

		totalOffset = this.dataset.offset * offSet; /* + "px"; */

		TweenMax.to(banners, 0.8, {right: totalOffset});
	}

	/*shields can also be sigil*/
	/*shields.forEach(shield => shield.addEventListener('click', showLightbox));*/

	shields.forEach(shield => shield.addEventListener('click', animateBanner));

	video.addEventListener('ended', hideLightbox);
	closeLB.addEventListener('click', hideLightbox);
})();