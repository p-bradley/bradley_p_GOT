(() => {
	console.log('fired');

	//  variable stack
	// grab the shields at the bttom of the pge
	const 	shields 	= document.querySelectorAll('.sigil-container'),
			lightBox	= document.querySelector('.lightBox'),
			video = document.querySelector('video'),
			closeLB = document.querySelector('.lightbox-close'),
			banners = document.querySelector('#houseImages'),
			houseName = document.querySelector('.houseName'),
			houseInfo = document.querySelector('.house-info');

	const houseData = [//STARK
	`House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. 
	 It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. 
Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders 
of House Stark ruled over the region as the Kings in the North.`

];

	function showLightbox() {

		let targetHouse = this.className.split(" ")[1];

		let targetSrc = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

		//backticks are JS strings
		houseName.textContent = `House ${targetSrc}`;

		houseInfo.textContent = houseData[0];

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
	shields.forEach(shield => shield.addEventListener('click', showLightbox));

	//shields.forEach(shield => shield.addEventListener('click', animateBanner));

	video.addEventListener('ended', hideLightbox);
	closeLB.addEventListener('click', hideLightbox);
})();