# gmod-loadingscreen
new fresh dark transparent loading screen.

I've worked on this for a few days for a friend, but he decided to cancel his gmod server, so I didn't want my work wasted, I hope anyone finds this usefull, it did take some hard work.

Please don't reupload or take credits for this.

Feel free te edit and use however you please ;)


## Background Photos

- Drop your images into the `images` folder (e.g. `images/photo1.jpg`).
- Open `js/config.js` and set one of the following:
	- Single image: set `Config.backgroundImage = "photo1.jpg";`
	- Multiple images: set `Config.backgroundImages = ["photo1.jpg", "photo2.jpg", "photo3.png"];`
- Optional settings when using multiple images:
	- `Config.backgroundImageInterval = 8000; // milliseconds between changes`
	- `Config.shuffleBackgrounds = true; // randomize order on load`

Note: The CSS references `images/default.jpg`. If you don’t provide a custom image, create that file or set one of the config options above.
