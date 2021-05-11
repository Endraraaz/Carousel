var carouselWrapper = document.getElementById('carousel-wrapper');

var manualControlPrevious = document.createElement("a");
var manualControlNext = document.createElement("a");
carouselWrapper.appendChild(manualControlPrevious);
carouselWrapper.appendChild(manualControlNext);
manualControlPrevious.className += "manual-control-previous";
manualControlNext.className += "manual-control-next";
manualControlPrevious.setAttribute('onclick', 'plusSlides(-1)');
manualControlNext.setAttribute('onclick', 'plusSlides(1)');
manualControlPrevious.text = '❮';
manualControlNext.text = '❯';

var dotClass = document.createElement("div");
carouselWrapper.appendChild(dotClass);
dotClass.className += "dot-class";
dotClass.style["text-align"] = "center";
var carouselWrapperLength = carouselWrapper.querySelectorAll("img").length;
for (let i = 1; i <= carouselWrapperLength; i++) {
    let span = document.createElement("span");
    span.className += "dot";
    dotClass.appendChild(span);
    span.setAttribute('onclick', 'currentSlide(' + i + ')');
};

let imageClass = carouselWrapper.querySelectorAll("img");
for (let i = 0; i < carouselWrapperLength; i++) {
    imageClass[i].className += "slides";
}
