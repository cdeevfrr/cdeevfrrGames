## Cutscene framework

Games can all (optionally) make cutscenes using a shared method here.

Games define a character, which is just a collection of image files for angry, happy, sad, or other moods.

Then, the game can use a cutscene manager component with an array of {characters, speaker, text} and users click to go from one dialogue scene to the next.

## Generating new characters

I gave up on using SVGs or anything.

Just ask gemini to generate a character in a few poses. Remove the background with https://bgremovefree.com/. Crop with your computer (mac -> preview)

I'm sure there are much better ways to do it but this works *shrug