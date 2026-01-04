// ignore
var Config = {};

/**
 * What should the text in the center of the screen be?
 * if empty it will fill in your Server Name
 */
Config.title = "";

/**
 * Enable map text in the top left corner of the screen?
 */
Config.enableMap = true;

/**
 * Enable steamId text in the top right corner of the screen?
 */
Config.enableSteamID = true;

/**
 * Enable announcements?
 */
Config.enableAnnouncements = true;

/**
 * What messages do you want to show up?
 * only works if enableAnnouncements = true
 */
Config.announceMessages = [
  "Sunucu HARD-RP Tabanlıdır!",
  "Discord'a Katımak Zorunludur"
];

/**
 * How many miliseconds for each announcement?
 * only works if enableAnnouncements = true
 */
Config.announcementLength = 3000;

/**
 * Single background image filename (optional)
 * OR use backgroundImages below for multiple images.
 * Drop images in the "images" folder.
 */
Config.backgroundImage = "";

/**
 * Multiple background images (optional)
 * Example: ["photo1.jpg", "photo2.png", "city.webp"]
 * If provided, these will rotate on the background.
 */
Config.backgroundImages = [
  "1.png",
];

/**
 * Slideshow interval in milliseconds (only if backgroundImages is used)
 */
Config.backgroundImageInterval = 8000;

/**
 * Shuffle the backgroundImages order once on load
 */
Config.shuffleBackgrounds = true;

/**
 * Enable debug messages?
 */
Config.enableDebug = false;
