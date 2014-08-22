---
layout: post
title: "Death Stick"
description: 
headline: 
modified: 2014-08-14 17:43:25 +0600
category: personal
tags: []
imagefeature: 
mathjax: 
chart: 
comments: false
featured: false
---

<style>
@import url(http://fonts.googleapis.com/css?family=Ubuntu+Mono|Roboto+Slab:700);
#container {
	margin-top: -60px;
	margin-bottom: 50px;
	text-align: center
}
#lighter {
  position: relative;
  display: inline-block;
  z-index: 50;
  margin-right: 50px;
  height: 174px;
  width: 52px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
#lighter #top {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-color: transparent;
  position: absolute;
  z-index: 100;
  width: 50px;
  height: 29px;
}
#lighter #top #topback {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-color: transparent;
  position: absolute;
  left: -2px;
  z-index: 10;
  width: 31px;
  height: 29px;
  border: 2px solid #6b5339;
  border-left: 0;
  border-bottom: 0;
  border-right: 0;
  border-top-right-radius: 6px 6px;
  border-top-left-radius: 12px 20px;
  -webkit-box-shadow: 0 4px 0 0 #d4985a inset;
  box-shadow: 0 4px 0 0 #d4985a inset;
}
#lighter #top #topback:after {
  content: '';
  display: block;
  position: absolute;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #6b5339;
  height: 10px;
  width: 42px;
  left: 10px;
  top: 2px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #d4985a;
  -webkit-box-shadow: 3px 2px 0px 1px #eebe7e inset, 0px -2px 0px 0px #9f6529 inset;
  box-shadow: 3px 2px 0px 1px #eebe7e inset, 0px -2px 0px 0px #9f6529 inset;
}
#lighter #top #topback:before {
  content: '';
  display: block;
  position: absolute;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  z-index: -18;
  background-color: #d4985a;
  width: 39px;
  height: 16px;
  border-bottom: 1px solid #6b5339;
  border-right: 2px solid #6b5339;
  left: 10px;
  top: 10px;
}
#lighter #top #topback #strikebutton {
  display: block;
  position: absolute;
  z-index: -18;
  background-color: transparent;
  width: 36px;
  height: 14px;
  left: 10px;
  top: 11px;
  overflow: hidden;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAAAZiS0dEAAUAAgAi50ehhQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB94IDQAcDb48ZQMAAAAdaVRYdENvbW1lbnQAAAAAAENyZWF0ZWQgd2l0aCBHSU1QZC5lBwAAAE9JREFUCB0BRAC7/wHZ2dkAAAAAAAAAAAMmJib9AgAAAAAAAABCAAAAbAAAAAAEAAAAAAAAADQAAAAgAAAAAAH///8AAAAAAAAAAAAAAAAARekIBd7L9tAAAAAASUVORK5CYII=) repeat;
}
#lighter #top #topleft {
  z-index: 120;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  position: absolute;
  top: 3px;
  left: 0;
  background-color: #d4985a;
  margin-left: -2px;
  border-top-left-radius: 6px 6px;
  border-top-right-radius: 4px ;
  border-bottom-right-radius: 6px 6px;
  border: 2px solid #6b5339;
  border-top: 1px solid #6b5339;
  width: 29px;
  height: 28px;
  -webkit-box-shadow: 3px 2px 3px 1px #eebe7e inset, 2px 0px 0 0 rgba(0, 0, 0, 0.3);
  box-shadow: 3px 2px 3px 1px #eebe7e inset, 2px 0px 0 0 rgba(0, 0, 0, 0.3);
}
#lighter #body {
  position: absolute;
  top: 29px;
  margin-top: -2px;
  z-index: 90;
  height: 146px;
  width: 95%;
  border: 2px solid #6b5339;
  border-top: 1px solid #6b5339;
  border-top-left-radius: 12% 2%;
  border-top-right-radius: 12% 2%;
  border-bottom-right-radius: 12% 2%;
  border-bottom-left-radius: 12% 2%;
  background-color: #efe3b1;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-shadow: -4px 0 0 0 rgba(119, 75, 34, 0.2) inset, 4px 0 0 0 #f6efd3 inset;
  box-shadow: -4px 0 0 0 rgba(119, 75, 34, 0.2) inset, 4px 0 0 0 #f6efd3 inset;
}
#lighter #body:before {
  content: '';
  display: block;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  z-index: -1000;
  width: 6px;
  height: 6px;
  position: relative;
  top: -3px;
  left: -5px;
  border-left: 2px solid #6b5339;
  border-top: 2px solid #6b5339;
  border-bottom: 2px solid #6b5339;
  background-color: black;
}
#deathstick {
  margin: auto;
  margin-top: 30px;
  margin-right: 40px;
  height: 166px;
  width: 16.6px;
  border: 2px solid #6b5339;
  border-radius: 2px;
  display: inline-block;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-shadow: -5px 0 2px 0 rgba(119, 75, 34, 0.2) inset;
  box-shadow: -5px 0 2px 0 rgba(119, 75, 34, 0.2) inset;
  background-color: transparent;
  position: relative;
}
#deathstick #stick {
  background-color: #ffffff;
  width: 100%;
  height: 116.2px;
  z-index: -12;
  position: absolute;
}
#deathstick #filter {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #e3a53f;
  height: 49.8px;
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: -12;
  -webkit-box-shadow: 5px 0 0 0 #e9ba6c inset;
  box-shadow: 5px 0 0 0 #e9ba6c inset;
}
#deathstick #filter:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 7px;
  top: 0;
  left: 0;
  background-color: #edc482;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border-top: 1px solid #6b5339;
  border-bottom: 2px solid #6b5339;
}
#deathstick #filter #filterpattern {
  width: 100%;
  height: 100%;
  background-color: transparent;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAqCAYAAACHgLrMAAAAAXNSR0IArs4c6QAAAAZiS0dEAAUAAgAi50ehhQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB94IDQkpB/MJdSQAAAAdaVRYdENvbW1lbnQAAAAAAENyZWF0ZWQgd2l0aCBHSU1QZC5lBwAACBVJREFUSA0BCgj19wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///28AAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///9vAAAAAAAAAAAAAAAAAP///2////9vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAP///28AAAA/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAQEBUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///28AAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///2////9vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///2////9vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////bwAAAAAAAAAAAQEBkQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///28AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////bwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////bwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///28AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///28AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///9v////bwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///28AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///28AAAAABAAAAAAAAAAA////rgEBAVIAAAAAAAAAAAAAAAAAAAAA////bwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///9vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGMLUH+aSZb3AAAAAElFTkSuQmCC) repeat;
}
#pack {
  position: relative;
  border: 2px solid #6b5339;
  display: inline-block;
  height: 179px;
  width: 142px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-border-radius: 5px;
  -webkit-background-clip: padding-box;
  -moz-border-radius: 5px;
  -moz-background-clip: padding;
  border-radius: 5px;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  -webkit-box-shadow: -3px -3px 4px 0px #f5d5a6 inset, 3px 3px 4px 0px #ffffff inset;
  box-shadow: -3px -3px 4px 0px #f5d5a6 inset, 3px 3px 4px 0px #ffffff inset;
  background-color: #fef9e5;
  -webkit-background-size: 100px 100px;
  background-size: 100px 100px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAAXNSR0IArs4c6QAAAAZiS0dEAAUAAgAi50ehhQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB94IDQkXNA0cD08AAAAdaVRYdENvbW1lbnQAAAAAAENyZWF0ZWQgd2l0aCBHSU1QZC5lBwAAADJJREFUCB0BJwDY/wAAAAAAAAAAAPbhwv8CAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAGbjA519LaOPAAAAAElFTkSuQmCC) repeat;
}
#pack:before {
  z-index: 99;
  content: '';
  display: block;
  position: absolute;
  width: 141px;
  height: 60px;
  background-color: transparent;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #6b5339;
  border-radius: 5px;
  top: -1px;
  left: -1px;
  -webkit-box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.3);
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.3);
}
#pack #origredbranding {
  position: absolute;
  display: block;
  top: 9px;
  left: 6px;
  background-color: #fffde8;
  padding: 1px;
  font-size: 0.36em;
  font-family: "Arial", "Sans-serif";
  color: #ec371c;
}
#pack #esttab {
  position: absolute;
  display: inline-block;
  right: 13px;
  width: 32px;
  height: 21px;
  padding-top: 3px;
  background-color: #ec371c;
  border: 1px solid #efce27;
  border-top: 0;
  -webkit-box-shadow: 0 1px 0 0 #f88254 inset;
  box-shadow: 0 1px 0 0 #f88254 inset;
}
#pack #esttab #est {
  display: block;
  position: relative;
  margin: auto;
  margin-top: 3px;
  margin-bottom: 2px;
  width: 23px;
  font-size: 0.5em;
  line-height: 0.3em;
  font-family: "Arial", "Sans-serif";
  color: #efce27;
}
#pack #esttab #estdate {
  display: block;
  position: relative;
  margin: auto;
  margin-left: 4.21px;
  width: 23px;
  font-size: 0.55em;
  font-family: "Arial", "Sans-serif";
  color: white;
}
#pack #warning {
  display: inline-block;
  position: absolute;
  width: 130px;
  height: 47px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: 5px solid #842706;
  padding: auto;
  padding-top: 2px;
  padding-bottom: 2px;
  background-color: #fffee9;
  -webkit-box-shadow: 0 0 2px 2px #fffee9;
  box-shadow: 0 0 2px 2px #fffee9;
  margin: auto;
  bottom: 7px;
  left: 4px;
  color: #842706;
  font-weight: 700;
  font-size: 0.84em;
  text-align: center;
}
#pack #seal {
  text-align: center;
  /**************************/
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 1;
  display: block;
  position: absolute;
  left: 50%;
  margin-left: -41px;
  top: 32px;
  width: 82px;
  height: 82px;
  background-color: #ec371c;
  border-radius: 50%;
  background: #ec371c;
  /* Old browsers */
  /* FF3.6+ */
  background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, #ec371c), color-stop(0%, #ec371c), color-stop(65%, #ec371c), color-stop(68%, #efce27), color-stop(70%, #ec371c));
  /* Chrome,Safari4+ */
  background: -webkit-radial-gradient(center, ellipse cover, #ec371c 0%, #ec371c 0%, #ec371c 65%, #efce27 68%, #ec371c 70%);
  /* Chrome10+,Safari5.1+ */
  /* Opera 12+ */
  /* IE10+ */
  background: -webkit-radial-gradient(center, ellipse, #ec371c 0%, #ec371c 0%, #ec371c 65%, #efce27 68%, #ec371c 70%);
  background: radial-gradient(ellipse at center, #ec371c 0%, #ec371c 0%, #ec371c 65%, #efce27 68%, #ec371c 70%);
  /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ec371c', endColorstr='#ec371c', GradientType=1);
  /* IE6-9 fallback on horizontal gradient */
}
#pack #seal #sealinnertext {
  /*background-color: rgba(0,0,0,0.3);*/
  position: absolute;
  display: block;
  width: 82px;
  font-family: 'Roboto Slab', serif;
  font-weight: 700;
  color: white;
  text-align: center;
  text-justify: distribute;
  width: 62px;
  top: 29px;
  left: 50%;
  font-size: 0.86em;
  margin-left: -31px;
  line-height: 0.9em;
}
#pack #seal .sealoutertext {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  position: absolute;
  display: block;
  font-family: 'Ubuntu Mono', "Arial", "Sans-Serif";
  font-size: 0.4em;
  color: #efce27;
}
#pack #seal .sealoutertext#top {
  position: relative;
  display: block;
  width: 82px;
  height: 82px;
  top: 3px;
  left: -2px;
}
#pack #seal .sealoutertext#top span {
  font-size: 6px;
  height: 36px;
  position: absolute;
  vertical-align: top;
  -webkit-transform-origin: bottom center;
  -ms-transform-origin: bottom center;
  transform-origin: bottom center;
}
#pack #seal .sealoutertext#top .char30 {
  -webkit-transform: rotate(108deg);
  -ms-transform: rotate(108deg);
  transform: rotate(108deg);
}
#pack #seal .sealoutertext#top .char29 {
  -webkit-transform: rotate(101deg);
  -ms-transform: rotate(101deg);
  transform: rotate(101deg);
}
#pack #seal .sealoutertext#top .char28 {
  -webkit-transform: rotate(94deg);
  -ms-transform: rotate(94deg);
  transform: rotate(94deg);
}
#pack #seal .sealoutertext#top .char27 {
  -webkit-transform: rotate(87deg);
  -ms-transform: rotate(87deg);
  transform: rotate(87deg);
}
#pack #seal .sealoutertext#top .char26 {
  -webkit-transform: rotate(80deg);
  -ms-transform: rotate(80deg);
  transform: rotate(80deg);
}
#pack #seal .sealoutertext#top .char25 {
  -webkit-transform: rotate(73deg);
  -ms-transform: rotate(73deg);
  transform: rotate(73deg);
}
#pack #seal .sealoutertext#top .char24 {
  -webkit-transform: rotate(66deg);
  -ms-transform: rotate(66deg);
  transform: rotate(66deg);
}
#pack #seal .sealoutertext#top .char23 {
  -webkit-transform: rotate(59deg);
  -ms-transform: rotate(59deg);
  transform: rotate(59deg);
}
#pack #seal .sealoutertext#top .char22 {
  -webkit-transform: rotate(52deg);
  -ms-transform: rotate(52deg);
  transform: rotate(52deg);
}
#pack #seal .sealoutertext#top .char21 {
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
#pack #seal .sealoutertext#top .char20 {
  -webkit-transform: rotate(38deg);
  -ms-transform: rotate(38deg);
  transform: rotate(38deg);
}
#pack #seal .sealoutertext#top .char19 {
  -webkit-transform: rotate(31deg);
  -ms-transform: rotate(31deg);
  transform: rotate(31deg);
}
#pack #seal .sealoutertext#top .char18 {
  -webkit-transform: rotate(24deg);
  -ms-transform: rotate(24deg);
  transform: rotate(24deg);
}
#pack #seal .sealoutertext#top .char17 {
  -webkit-transform: rotate(17deg);
  -ms-transform: rotate(17deg);
  transform: rotate(17deg);
}
#pack #seal .sealoutertext#top .char16 {
  -webkit-transform: rotate(10deg);
  -ms-transform: rotate(10deg);
  transform: rotate(10deg);
}
#pack #seal .sealoutertext#top .char15 {
  -webkit-transform: rotate(3deg);
  -ms-transform: rotate(3deg);
  transform: rotate(3deg);
}
#pack #seal .sealoutertext#top .char14 {
  -webkit-transform: rotate(-4deg);
  -ms-transform: rotate(-4deg);
  transform: rotate(-4deg);
}
#pack #seal .sealoutertext#top .char13 {
  -webkit-transform: rotate(-11deg);
  -ms-transform: rotate(-11deg);
  transform: rotate(-11deg);
}
#pack #seal .sealoutertext#top .char12 {
  -webkit-transform: rotate(-18deg);
  -ms-transform: rotate(-18deg);
  transform: rotate(-18deg);
}
#pack #seal .sealoutertext#top .char11 {
  -webkit-transform: rotate(-25deg);
  -ms-transform: rotate(-25deg);
  transform: rotate(-25deg);
}
#pack #seal .sealoutertext#top .char10 {
  -webkit-transform: rotate(-32deg);
  -ms-transform: rotate(-32deg);
  transform: rotate(-32deg);
}
#pack #seal .sealoutertext#top .char9 {
  -webkit-transform: rotate(-39deg);
  -ms-transform: rotate(-39deg);
  transform: rotate(-39deg);
}
#pack #seal .sealoutertext#top .char8 {
  -webkit-transform: rotate(-46deg);
  -ms-transform: rotate(-46deg);
  transform: rotate(-46deg);
}
#pack #seal .sealoutertext#top .char7 {
  -webkit-transform: rotate(-53deg);
  -ms-transform: rotate(-53deg);
  transform: rotate(-53deg);
}
#pack #seal .sealoutertext#top .char6 {
  -webkit-transform: rotate(-60deg);
  -ms-transform: rotate(-60deg);
  transform: rotate(-60deg);
}
#pack #seal .sealoutertext#top .char5 {
  -webkit-transform: rotate(-67deg);
  -ms-transform: rotate(-67deg);
  transform: rotate(-67deg);
}
#pack #seal .sealoutertext#top .char4 {
  -webkit-transform: rotate(-74deg);
  -ms-transform: rotate(-74deg);
  transform: rotate(-74deg);
}
#pack #seal .sealoutertext#top .char3 {
  -webkit-transform: rotate(-81deg);
  -ms-transform: rotate(-81deg);
  transform: rotate(-81deg);
}
#pack #seal .sealoutertext#top .char2 {
  -webkit-transform: rotate(-88deg);
  -ms-transform: rotate(-88deg);
  transform: rotate(-88deg);
}
#pack #seal .sealoutertext#top .char1 {
  -webkit-transform: rotate(-95deg);
  -ms-transform: rotate(-95deg);
  transform: rotate(-95deg);
}
#pack #seal .sealoutertext#bottom {
  position: relative;
  display: block;
  width: 82px;
  height: 82px;
  bottom: 3px;
  right: -2px;
  vertical-align: bottom;
}
#pack #seal .sealoutertext#bottom span {
  font-size: 6px;
  display: inline;
  vertical-align: bottom;
  height: 36px;
  position: absolute;
  line-height: 66px;
  margin-top: -38px;
  margin-left: -3px;
  -webkit-transform-origin: top center;
  -ms-transform-origin: top center;
  transform-origin: top center;
}
#pack #seal .sealoutertext#bottom .char19 {
  -webkit-transform: rotate(-97deg);
  -ms-transform: rotate(-97deg);
  transform: rotate(-97deg);
}
#pack #seal .sealoutertext#bottom .char18 {
  -webkit-transform: rotate(-88deg);
  -ms-transform: rotate(-88deg);
  transform: rotate(-88deg);
}
#pack #seal .sealoutertext#bottom .char17 {
  -webkit-transform: rotate(-79deg);
  -ms-transform: rotate(-79deg);
  transform: rotate(-79deg);
}
#pack #seal .sealoutertext#bottom .char16 {
  -webkit-transform: rotate(-70deg);
  -ms-transform: rotate(-70deg);
  transform: rotate(-70deg);
}
#pack #seal .sealoutertext#bottom .char15 {
  -webkit-transform: rotate(-61deg);
  -ms-transform: rotate(-61deg);
  transform: rotate(-61deg);
}
#pack #seal .sealoutertext#bottom .char14 {
  -webkit-transform: rotate(-52deg);
  -ms-transform: rotate(-52deg);
  transform: rotate(-52deg);
}
#pack #seal .sealoutertext#bottom .char13 {
  -webkit-transform: rotate(-43deg);
  -ms-transform: rotate(-43deg);
  transform: rotate(-43deg);
}
#pack #seal .sealoutertext#bottom .char12 {
  -webkit-transform: rotate(-34deg);
  -ms-transform: rotate(-34deg);
  transform: rotate(-34deg);
}
#pack #seal .sealoutertext#bottom .char11 {
  -webkit-transform: rotate(-25deg);
  -ms-transform: rotate(-25deg);
  transform: rotate(-25deg);
}
#pack #seal .sealoutertext#bottom .char10 {
  -webkit-transform: rotate(-16deg);
  -ms-transform: rotate(-16deg);
  transform: rotate(-16deg);
}
#pack #seal .sealoutertext#bottom .char9 {
  -webkit-transform: rotate(-7deg);
  -ms-transform: rotate(-7deg);
  transform: rotate(-7deg);
}
#pack #seal .sealoutertext#bottom .char8 {
  -webkit-transform: rotate(2deg);
  -ms-transform: rotate(2deg);
  transform: rotate(2deg);
}
#pack #seal .sealoutertext#bottom .char7 {
  -webkit-transform: rotate(11deg);
  -ms-transform: rotate(11deg);
  transform: rotate(11deg);
}
#pack #seal .sealoutertext#bottom .char6 {
  -webkit-transform: rotate(20deg);
  -ms-transform: rotate(20deg);
  transform: rotate(20deg);
}
#pack #seal .sealoutertext#bottom .char5 {
  -webkit-transform: rotate(29deg);
  -ms-transform: rotate(29deg);
  transform: rotate(29deg);
}
#pack #seal .sealoutertext#bottom .char4 {
  -webkit-transform: rotate(38deg);
  -ms-transform: rotate(38deg);
  transform: rotate(38deg);
}
#pack #seal .sealoutertext#bottom .char3 {
  -webkit-transform: rotate(47deg);
  -ms-transform: rotate(47deg);
  transform: rotate(47deg);
}
#pack #seal .sealoutertext#bottom .char2 {
  -webkit-transform: rotate(56deg);
  -ms-transform: rotate(56deg);
  transform: rotate(56deg);
}
#pack #seal .sealoutertext#bottom .char1 {
  -webkit-transform: rotate(65deg);
  -ms-transform: rotate(65deg);
  transform: rotate(65deg);
}
</style>


<div id='container'>
  <div id='lighter'>
    <div id='top'>
      <div id='topback'>
        <div id='strikebutton'></div>
      </div>
      <div id='topleft'></div>
    </div>
    <div id='body'></div>
  </div>
  <div id='deathstick'>
    <div id='stick'></div>
    <div id='filter'>
      <div id='filterpattern'></div>
    </div>
  </div>
  <div id='pack'>
    <div id='origredbranding'>ORIGINAL RED</div>
    <div id='esttab'>
      <div id='est'>E S T</div>
      <div id='estdate'>2012</div>
    </div>
    <div id='seal'>
      <div class='sealoutertext' id='top'>HM FAYSAL TOBACCO COMPANY</div>
      <div id='sealinnertext'>HM<br />FAYSAL</div>
      <div class='sealoutertext' id='bottom'>Est BOSTON MA USA</div>
    </div>
    <div id='warning'>Smoking is good<br />for your brain.</div>
  </div>
</div>

<script src='http://cdnjs.cloudflare.com/ajax/libs/lettering.js/0.6.1/jquery.lettering.min.js'></script>

<script>
$(".sealoutertext#top").lettering();
$(".sealoutertext#bottom").lettering();
//@ sourceURL=pen.js
</script>

