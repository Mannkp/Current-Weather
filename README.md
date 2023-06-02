# Current-Weather
know the weather all around the world
Api used from: https://openweathermap.org/api
Api used: 1)Current Weather Data 2)Geocoding API

JavaScript concepts used:
1) fetch
2) Async
3) Await
4) DOM Manipulation
5) addEventListener


please note: in the first version of the app, I used "Geocoding API" to generate Longitudes and Latitudes of City, and then pass it in API call, but it was unable to provide weather for cities in my country (INDIA);
             what I mean is that if I search for "SURAT", it would show me weather of Surat in Australia!
-> so I added another script named as simpleWayScript.js wherein I have passed city name as query in API Call.
