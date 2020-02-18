// expander #1
readMore( $('.spoiler'), 4);

function readMore(jObj, lineNum) {
if ( isNaN(lineNum) ) {
  lineNum = 4;
}
var go = new ReadMore (jObj, lineNum);
}

//class
function ReadMore(_jObj, lineNum) {
var READ_MORE_LABEL = 'EXPAND';
var HIDE_LABEL = 'MINIMIZE';

var jObj = _jObj;
var textMinHeight = ''+ (parseInt(jObj.children('.hidden-text').css('line-height'),10)*lineNum) +'px';
var textMaxHeight = ''+jObj.children('.hidden-text').css('height');

jObj.children('.hidden-text').css('height', ''+ textMaxHeight);
jObj.children('.hidden-text').css( 'transition', 'height .5s');
jObj.children('.hidden-text').css('height', ''+ textMinHeight);

jObj.append ('<button class="read-more btn">'+READ_MORE_LABEL+'</button>');

jObj.children('.read-more').click ( function() {
  if (jObj.children('.hidden-text').css('height') === textMinHeight) {
    jObj.children('.hidden-text').css('height', ''+textMaxHeight);
    jObj.children('.read-more').html(HIDE_LABEL).addClass('active');
  } else {
    jObj.children('.hidden-text').css('height', ''+textMinHeight);
    jObj.children('.read-more').html(READ_MORE_LABEL).removeClass('active');
  }
});

}

// expander #2
readMore2( $('.spoiler2'), 5);

function readMore2(jObj2, lineNum2) {
if ( isNaN(lineNum2) ) {
  lineNum2 = 5;
}
var go2 = new ReadMore2 (jObj2, lineNum2);
}

//class
function ReadMore2(_jObj2, lineNum2) {
var READ_MORE_LABEL2 = 'EXPAND';
var HIDE_LABEL2 = 'MINIMIZE';

var jObj2 = _jObj2;
var textMinHeight2 = ''+ (parseInt(jObj2.children('.hidden-text2').css('line-height'),10)*lineNum2) +'px';
var textMaxHeight2 = ''+jObj2.children('.hidden-text2').css('height');

jObj2.children('.hidden-text2').css('height', ''+ textMaxHeight2);
jObj2.children('.hidden-text2').css( 'transition', 'height .5s');
jObj2.children('.hidden-text2').css('height', ''+ textMinHeight2);

jObj2.append ('<button class="read-more2 btn">'+READ_MORE_LABEL2+'</button>');

jObj2.children('.read-more2').click ( function() {
  if (jObj2.children('.hidden-text2').css('height') === textMinHeight2) {
    jObj2.children('.hidden-text2').css('height', ''+textMaxHeight2);
    jObj2.children('.read-more2').html(HIDE_LABEL2).addClass('active2');
  } else {
    jObj2.children('.hidden-text2').css('height', ''+textMinHeight2);
    jObj2.children('.read-more2').html(READ_MORE_LABEL2).removeClass('active2');
  }
});

}

// expander #3
readMore3( $('.spoiler3'), 6);

function readMore3(jObj3, lineNum3) {
if ( isNaN(lineNum3) ) {
  lineNum3 = 6;
}
var go3 = new ReadMore3 (jObj3, lineNum3);
}

//class
function ReadMore3(_jObj3, lineNum3) {
var READ_MORE_LABEL3 = 'EXPAND';
var HIDE_LABEL3 = 'MINIMIZE';

var jObj3 = _jObj3;
var textMinHeight3 = ''+ (parseInt(jObj3.children('.hidden-text3').css('line-height'),10)*lineNum3) +'px';
var textMaxHeight3 = ''+jObj3.children('.hidden-text3').css('height');

jObj3.children('.hidden-text3').css('height', ''+ textMaxHeight3);
jObj3.children('.hidden-text3').css( 'transition', 'height .5s');
jObj3.children('.hidden-text3').css('height', ''+ textMinHeight3);

jObj3.append ('<button class="read-more3 btn">'+READ_MORE_LABEL3+'</button>');

jObj3.children('.read-more3').click ( function() {
  if (jObj3.children('.hidden-text3').css('height') === textMinHeight3) {
    jObj3.children('.hidden-text3').css('height', ''+textMaxHeight3);
    jObj3.children('.read-more3').html(HIDE_LABEL3).addClass('active3');
  } else {
    jObj3.children('.hidden-text3').css('height', ''+textMinHeight3);
    jObj3.children('.read-more3').html(READ_MORE_LABEL3).removeClass('active3');
  }
});

}
