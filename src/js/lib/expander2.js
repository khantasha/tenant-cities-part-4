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
