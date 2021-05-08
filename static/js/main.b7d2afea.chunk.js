(this["webpackJsonpreact-gh-pages"]=this["webpackJsonpreact-gh-pages"]||[]).push([[0],{81:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a(7),o=a.n(n),r=a(117),s=a(47),c=a(111),d=a(112),l=a(113),h=a(110),u=a(118),m=a(120),b=a(121),g=a(115),p=a(33),w=a.n(p),j=a(59),f=a.n(j),y=a(58),v=a.n(y),x=a(60),O=a.n(x),k=a(57),I=a.n(k),T=a(61),S=a.n(T),C=a(106),H=a(108),B=a(2),E=Object(C.a)((function(e){return{blogHeader:{marginBottom:10,marginTop:20,color:e.palette.primary.main},divider:{marginTop:15,marginBottom:15,backgroundColor:e.palette.primary.main}}}));function P(e){var t=E();return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(H.a,{className:t.divider}),Object(B.jsx)(h.a,{className:t.blogHeader,variant:"h5",children:Object(B.jsx)("b",{children:e.text})})]})}var R=Object(C.a)((function(e){return{blogHeader:{marginBottom:10,marginTop:20}}}));function A(e){R();return Object(B.jsx)(h.a,{variant:"body1",children:Object(B.jsx)("span",{dangerouslySetInnerHTML:{__html:e.text}})})}var F=Object(C.a)((function(e){return{blogHeader:{marginBottom:10,marginTop:20}}}));function D(e){F();return Object(B.jsxs)("div",{style:{flexDirection:"column"},children:[Object(B.jsx)(P,{text:e.header}),Object(B.jsx)(A,{text:e.paragraph})]})}function M(){var e=["About Me","Hi, welcome to my portfolio. My name is Grady Thomas and I am a second year student at MIT majoring in Electrical Engineering         and Computer Science (6-2) and concentrating in Music. I am most interested in embedded system development and projects that         physically interact with the world around us. This site has a little bit about various school and personal projects         I have completed. Take a look around! Outside of school, I enjoy playing guitar and recording music, being outside and climbing, biking, and camping,         and seeing live music. I grew up in Atlanta where I went to The Westminster Schools and now live in Boston while I attend MIT."],t=["Site Design","This website was created with React, hosted by Github Pages, and the source code is located in my GitHub profile.         I chose React because I wanted an opportunity to practice what I had learned at my internships at GTRI and BetterLesson, where I did full stack development         that included React frontends. Although this site is not currently very dynamic, which is what React is best known for, I wanted to keep the door open to easily         integrate any web apps I may create in the future. Since I am not much of a designer, although I am working on my design skills, I am using Material UI for basic         components and structure. At the moment, there is no real backend since the site is mostly static. However, if I eventually integrate some sort of web app, I plan         on using the Flask framework and SQL and hosting it with Heroku."];return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)("div",{style:{display:"flex",flexDirection:"row",flexWrap:window.innerWidth<750?"wrap":"nowrap"},children:[Object(B.jsx)(D,{header:e[0],paragraph:e[1]}),Object(B.jsx)("img",{style:{marginLeft:50,marginTop:10},src:"/projects/self_pic.jpeg",height:"321",width:"271"})]}),Object(B.jsx)(D,{header:t[0],paragraph:t[1]}),Object(B.jsx)(h.a,{component:"div",style:{height:"50vh"}})]})}var G=Object(C.a)((function(e){return{imgBox:{margin:30},imgContainer:{display:"flex",width:"100%",flexDirection:"row",justifyContent:"center"}}}));function N(e){var t=G();return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("div",{className:t.imgContainer,children:Object(B.jsx)("img",{className:t.imgBox,src:e.src,width:e.width,height:e.height})}),Object(B.jsx)("div",{className:t.imgContainer,children:Object(B.jsx)(h.a,{variant:"body2",children:Object(B.jsx)("i",{children:e.caption})})})]})}var L=Object(C.a)((function(e){return{imgBox:{margin:30},imgContainer:{display:"flex",width:"100%",flexDirection:"row",justifyContent:"center",marginTop:20,marginBottom:10}}}));function U(){var e=L(),t=["Background","In the 2020 Spring Semester I took 6.08, or <i>Introduction to Computer Science and Electrical Engineering via Interconnected Embedded Systems</i>.         This class was very hands on and used the ESP32 microcontroller and a class Python server to teach the basics of embedded system design         and the Internet of Things through labs and projects. I really loved this class, and it is probably my favorite class I've taken so far at MIT.         For our final project, we were given 4 weeks in teams of 5 to build something interesting and complex that used both our ESP32 system and a REST API hosted         on the class server. We decided to build a sampler, a musical instrument that can record a sound and then play it back with a keyboard. Unfurtonately we         were sent home due to COVID-19 in March 2020, so the whole of this project was done remotely. This meant all of our collaboration was done over GitHub and Zoom,         and the teaching team shipped us any extra parts we needed, such as the speaker and copper tape."],a=["Capabilities","Our final product was a fairly robust sampling and song creation machine. There was a UI displayed on the ESP LCD screen that was controlled with two buttons.         A user could record a sound through the microphone, where the raw sound data would then be sent to the server to be put through our Python pitch shifting         algorithm that returned the 12 notes of the chromatic scale back down to the ESP, where it was stored in memory. The user could then choose to record a song with         the new sound, and use the capacitive touch keyboard to do so. Each touch triggered a note to be played out of the speaker. Once the song was finished,         it was sent to and stored on the         server in a SQL database. Users could use their browser to click through and listen to various songs and sounds recorded by other users."],i=["Personal Challenges","Since this was a team project, I focused on some parts more than others. Specifically, I worked a lot on the hardware part of sound: recording through the mic         and playing it back through the speaker. Recording was not very difficult, as all you have to do is directly read the voltages off the correct analog IO pin.         The ESP32 has a 12 bit ADC, so we got 12 bit numbers from reading this input. However, the amplifier/speaker breakout board we used needed 8 bit input, and to write         to a <code>wav</code> file (for the browser interface and testing) we needed either 8 bit or 16 bit input. Our initial approach was to use a mu-law encoding algorithm we had         used in a previous lab; however this created quite a bit of distortion. We then tried linearly shifting the numbers (i.e. divide everything by 16) which initially         led to a strange bug of seemingly playing no sound. However, we discovered that dividing by 16 led to getting quite a few 0's in our data, which when sending to the         server as binary data was interpreted as a null character and ended the string prematurely. Shifting all 0's to 1 fixed the issue and gave us clean, 8 bit audio.         Once the data was 8 bit, playing the audio was relatively straight forward and did not require any complex third party libraries. Initially, we had planned to write         each note to a <code>wav</code> file on an SD card, and play those files when triggered. However, we had just enough flash memory to store the notes' binary data in char arrays         and therefore decided not to complicate it with external storage. Playing these notes was as straightforward as writing the data from each array to the DAC pin;         the tricky part was getting the audio to play back at the right rate. Since it was recording at 8000 kHz, it needed to be written to the DAC at the same rate, which was         achieved by slowing down the internal clock with delay functions to 8000 kHz. <br /><br />        Another part of the project I worked on a fair amount was figuring out how to write raw audio data (essentially just a list of voltages) to a <code>wav</code> file. This proved         more difficult than we initially thought, as most libraries expected some sort of encoded data or data that had been recorded in Python into some sort of object.         However, we just had an array of numbers. As I read more into the documentation for the Python standard library <code>wave</code>, I found functions for writing binary data         to a <code>wav</code> file. However, this was my first time every interacting with binary data, especially in the realm of sound, and it took quite a bit of trial and error         to get the framerate, data size, and date rate to match properly between the ESP32 and Python script. However, once everything was matched up properly, the data         was packed up into structs and written to a <code>wav</code> file as 8 bit audio that could be played for testing and in the browser. Getting this working quickly was very         important as it was very difficult to test our recording and pitch shifting without any playback capabilities. <br /><br />         I intentionally worked primarily on parts of the project dealing with binary data and low level hardware, as those were areas I felt least comfortable and wanted         to learn about the most. I think this project prepared me very well for the work I did at GTRI dealing with reading, writing, and encoding raw binary data. I also         found it very satisfying to see how computers dealt with (and implement myself) recorded sound and sound files at the lowest level."];return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(D,{header:t[0],paragraph:t[1]}),Object(B.jsx)(N,{src:"/projects/sampler_pic.jpg",width:"504",height:"378",caption:"The final product"}),Object(B.jsx)(D,{header:a[0],paragraph:a[1]}),Object(B.jsx)(N,{src:"/projects/song_ui.png",width:"60%",height:"60%",caption:"Browser UI"}),Object(B.jsx)(D,{header:i[0],paragraph:i[1]}),Object(B.jsx)(P,{text:"Demonstration"}),Object(B.jsx)("div",{className:e.imgContainer,children:Object(B.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/D0RY7BqFPo0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),Object(B.jsx)("div",{className:e.imgContainer,children:Object(B.jsx)(h.a,{variant:"body2",children:Object(B.jsx)("i",{children:"Recorded by teammate for final report"})})})]})}var _=Object(C.a)((function(e){return{videoBox:{display:"flex",justifyContent:"center",paddingTop:10},blogHeader:{marginBottom:10,marginTop:20}}}));function q(){var e=_();return Object(B.jsxs)(B.Fragment,{children:[[["Background","<b>nugs.net</b> is a streaming service for primarily live music and              seems to be built on the AngularJS framework. I felt that nugs was a little unpolished compared to some other streaming services,              specifically with things like authentication and streaming optimization, and wanted to poke around the code to see what was going              on under the hood. I had messed around with the chrome dev tools before, and decided to try and see if I could find out how the music was streamed.              From my initial looking, the web app used AngularJS for its UI."],["Vulnerability Description","Using the chrome dev tools, I discovered that when a song is played, the angular callback is added in a new file              that includes a URL stored in the key streamLink. This file is a few levels down in the sources section;              it seems to be related to something called BigRiver, which could be an internal or external JS library.              Following the URL from the file leads to a blank page where the mp3 file is embedded in a basic              html video player with the audio/mp3 file type. Right clicking on this file allows you to save the audio as a file to your computer."],["Analysis","Given that nugs.net is purely a web or phone streaming application, and not for downloading or purchasing music, the user should not be able             to download any music from the site. However, because their file storage site is not secure, it is very easy to download any song stored there.             Obviously that violates their Terms of Service so I have not done so, but I have reached out to nugs.net about the issue. I believe it would be a             relatively easy fix, perhaps by making the file server private, or requiring some sort of authentication from the client before serving the file."]].map((function(e){return Object(B.jsx)(D,{header:e[0],paragraph:e[1]})})),Object(B.jsx)(P,{text:"Demonstration"}),Object(B.jsx)("div",{className:e.videoBox,children:Object(B.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/q_uS7ZxgQzw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})})]})}function W(){return Object(B.jsx)(h.a,{variant:"body1",children:"This page documents the brushless motor I designed and created for 6.A01, or my freshman advising seminar about making at MIT."})}var z=Object(C.a)((function(e){return{videoBox:{display:"flex",justifyContent:"center",paddingTop:10},blogHeader:{marginBottom:10,marginTop:20}}}));function J(){var e=z(),t=["Background","Guitar playing and music have been one of my biggest hobbies for about 6 years now. While I also love listening to music,         a few years ago I been recording my own music. That has since snowballed into a big interest in music production and         technology. I have recorded a fair amount of songs, but at this point only released one, with my friend Lonnie Reid         on vocals (as well as lyric songwriting)."];return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(D,{header:t[0],paragraph:t[1]}),Object(B.jsx)("div",{className:e.videoBox,children:Object(B.jsx)("iframe",{src:"https://open.spotify.com/embed/track/32OTogCfNH5ZoaZsLlb5Vb",width:"300",height:"380",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"})})]})}var Z=Object(C.a)((function(e){return{root:{display:"flex",flexDirection:"column",height:"100%"},title:{flexGrow:1},container:{padding:40,backgroundColor:"#FFFFFF",height:"100%",flexGrow:1}}}));function V(){var e=Z(),t=Object(i.useState)(!1),a=Object(s.a)(t,2),n=a[0],o=a[1],r=Object(i.useState)(null),p=Object(s.a)(r,2),j=p[0],y=p[1],x=Object(i.useState)(0),k=Object(s.a)(x,2),T=k[0],C=k[1],H=function(e){C(e.target.value),o(!1)},E={0:"Home",1:"6.08 Sampler Project",2:"nugs.net Exploit",3:"6.A01 Brushless Motor",4:"Recorded Music",5:"API Reverse Engineering"};return Object(B.jsxs)("div",{className:e.root,children:[Object(B.jsx)(c.a,{position:"sticky",children:Object(B.jsxs)(d.a,{children:[Object(B.jsx)(l.a,{edge:"start",color:"inherit",onClick:function(e){o(!0),y(e.currentTarget)},children:Object(B.jsx)(w.a,{})}),Object(B.jsx)(h.a,{variant:"h6",className:e.title,children:E[T]}),Object(B.jsx)(u.a,{anchorEl:j,open:n,onClose:function(){return o(!1)},children:Object.keys(E).map((function(e){return Object(B.jsx)(m.a,{value:e,onClick:H,children:E[e]})}))}),Object(B.jsx)(b.a,{title:"LinkedIn",color:"inherit",children:Object(B.jsx)(l.a,{onClick:function(e){window.open("https://www.linkedin.com/in/grady-thomas-7530a71a2","_blank")},children:Object(B.jsx)(I.a,{})})}),Object(B.jsx)(b.a,{title:"GitHub",color:"inherit",children:Object(B.jsx)(l.a,{onClick:function(e){window.open("https://github.com/gradythomas","_blank")},children:Object(B.jsx)(v.a,{})})}),Object(B.jsx)(b.a,{title:"Resume",color:"inherit",children:Object(B.jsx)(l.a,{onClick:function(e){window.open("/projects/ResumePDF.pdf","_blank")},children:Object(B.jsx)(f.a,{})})}),Object(B.jsx)(b.a,{title:"Spotify",color:"inherit",children:Object(B.jsx)(l.a,{onClick:function(e){window.open("https://open.spotify.com/artist/6TkfOksTZM6tfOU8knP0gd?si=caVUG_9wR0utpYd2MEan6A","_blank")},children:Object(B.jsx)(O.a,{})})}),Object(B.jsx)(b.a,{title:"Email",color:"inherit",children:Object(B.jsx)(l.a,{onClick:function(e){window.open("mailto:gradyt@mit.edu")},children:Object(B.jsx)(S.a,{})})})]})}),Object(B.jsxs)(g.a,{className:e.container,maxWidth:"md",children:[0==T&&Object(B.jsx)(M,{}),1==T&&Object(B.jsx)(U,{}),2==T&&Object(B.jsx)(q,{}),3==T&&Object(B.jsx)(W,{}),4==T&&Object(B.jsx)(J,{})]})]})}var Y=a(116),Q=a(46),K=a(62),X=Object(K.a)({palette:{primary:{main:"#086788"},secondary:{main:"#19857b"},error:{main:Q.a.A400},background:{default:"#0E0E52"}}});function $(){return Object(B.jsxs)(Y.a,{theme:X,children:[Object(B.jsx)(r.a,{}),Object(B.jsx)(V,{})]})}o.a.render(Object(B.jsx)($,{}),document.querySelector("#root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.b7d2afea.chunk.js.map