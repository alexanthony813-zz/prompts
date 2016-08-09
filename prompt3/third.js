$(document).ready(function(){

  $('.rect').on('click', function(ev){
    ev.stopPropagation();
    clickHandler.apply(this);
  });

  function clickHandler(){
    //change background to transparent to get rid of parent rectangle
    $(this).css('background-color','inherit');

    //append two new child rectangles. would like to set up as constructor but running out of time
    var first = makeRect($(this));
    var second = makeRect($(this));
    $(this).append(first);
    $(this).append(second);
  }

  function makeRect(rect){
    var newHeight = rect.height()/2 + 'px';
    var newWidth = rect.width() + 'px';
    var randColor = getRandomColor(); //helper function, see below
    var styles = ["height:", newHeight, "; width :", newWidth, "; background-color : ", randColor,"; border: solid;"].join('');
    var newDiv = $("<div class='rect' style='"+ styles + "'></div>");

    newDiv.on('click', function(ev){
      ev.stopPropagation();
      clickHandler.apply(this);
    });

    return newDiv;
  }


  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});