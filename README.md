# :tea: Blue-tea
### Startpage with Weather and To-Do List features

![Preview](https://github.com/emanuelep57/Blue-tea/blob/main/assets/Bluetea.jpg)

## Table of contents
- [Features](#features)
- [Settings](#settings)
  - [Links](#links)
  - [Weather Setting](#weather-setting)

## Features
- **Dark/Light Theme** changes depending on the time of day, you can also switch it manually
- **Weather** displays current temperature, description of weather conditions and city name
- **To-Do List** allows you to add tasks, mark as completed and delete tasks that you add
- **Search** gives you the ability to search on any sites that you can add yourself, at the moment research supports:
- Netflix --> -n + "name of what you want to search"
- Amazon --> -a + "name of what you want to search"
- ArchWIki --> -w + "name of what you want tosearch"
- Reddit --> -r + "specific name of the subreddit"
- Spotify (web) --> -s "name of what you want to search"
- DuckDuckGo --> -d + "query of your research"
- GitHub --> -g + "name of the repo you are looking"
- -YouTUbe --> y + "name of what you want to search"
- Default : will search what you type on google.
- Help : -h will show you all the options for the research.
- **EXAMPLE** *-w Xorg* will lead on Xorg Archwiki page.  

## Settings
### Links
To add your own link to your favorite site, you just need to add a line to the HTML code, for example:

```html
<a href="https://www.reddit.com/" target="_blank">
  <i class="fab fa-reddit"></i>
</a>
```

### Weather Setting
To display the weather you need to have a free API key, which can be obtained from the [OpenWeatherMap](https://openweathermap.org/api) website.

> If you generated a **new** API key and the weather doesn't work, then try to wait for a while until the key is activated.

As weather icons I used icons from [this project](https://github.com/erikflowers/weather-icons#readme).
