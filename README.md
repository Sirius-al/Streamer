# Streamer

#! For this Stream you will need Obs Studio [https://obsproject.com/]

Download the file and in the root folder install in each folders (client/, api, rtmpServer) [npm install]

then, npm start on the root folder, {it will start all servers for the application}

--> Visit the app, and sign_in with google, then create a Stream..

After that open obs studio 
and go to settings ->
![1Capture](https://user-images.githubusercontent.com/72381625/98469524-566e0400-220a-11eb-8f31-e917bcdd4d70.PNG)

after that click on to Streams
![2Capture](https://user-images.githubusercontent.com/72381625/98469549-8b7a5680-220a-11eb-906b-6474b3b97cfd.PNG)

then set
Service: custom
Server: [rtmp://localhost/live]
port: the from the browser url

![4Capture](https://user-images.githubusercontent.com/72381625/98472061-989f4180-221a-11eb-90a1-5304fb758589.PNG)
last number of the url
![3Capture](https://user-images.githubusercontent.com/72381625/98469569-a64ccb00-220a-11eb-84ab-29cad1cb78dc.PNG)

then start stream and you will see the video from your pc appear on the browser screen 
