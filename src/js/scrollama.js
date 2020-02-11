var homepage = document.getElementById('homepage');
if(homepage){
  const intob = require('intersection-observer');
  const scrollama = require('scrollama');
  const d3 = require('d3');

  // using d3 for convenience
  // first scrollrama
  var scrolly = d3.select('#scrolly');
  var figure = scrolly.select('figure');
  var currImg = figure.select('#img1');
  var article = scrolly.select('article');
  var step = article.selectAll('.step');
  // initialize the scrollama
  var scroller = scrollama();

  // second scrollrama
  var scrolly2 = d3.select('#scrolly2');
  var figure2 = scrolly2.select('figure');
  var currImg2 = figure2.select('#image1');
  var article2 = scrolly2.select('article');
  var step2  = article2.selectAll('.step');
  // initialize the scrollama
  var scroller2 = scrollama();

  // third scrollrama
  var scrolly3 = d3.select('#scrolly3');
  var figure3 = scrolly3.select('figure');
  var currImg3 = figure3.select('#photo1');
  var article3 = scrolly3.select('article');
  var step3  = article3.selectAll('.step');
  // initialize the scrollama
  var scroller3 = scrollama();

  // fourth scrollrama
  var scrolly4 = d3.select('#scrolly4');
  var figure4 = scrolly4.select('figure');
  var currImg4 = figure4.select('#picture1');
  var article4 = scrolly4.select('article');
  var step4  = article4.selectAll('.step');
  // initialize the scrollama
  var scroller4 = scrollama();

  // for first scrollrama
  // generic window resize listener event
  function handleResize() {
  	// 1. update height of step elements
  	var stepH = Math.floor(window.innerHeight * 0.8);
  	step.style('height', stepH + 'px');
  	var figureHeight = window.innerHeight / 2
  	var figureMarginTop = (window.innerHeight - figureHeight) / 2
  	figure
  		.style('height', figureHeight + 'px')
  		.style('top', figureMarginTop + 'px');
  	// 3. tell scrollama to update new element dimensions
  	scroller.resize();
  }
  // scrollama event handlers
  function handleStepEnter(response) {
  	//console.log(response)
  	// response = { element, direction, index }
  	// add color to current step only
  	step.classed('is-active', function (d, i) {
  		return i === response.index;
  	})
  	// update graphic based on step
  	var increment = response.index + 1;
  	currImg.classed('is-visible', false);
  	currImg = figure.select('#img' + increment);
  	currImg.classed('is-visible', true);
  }
  function setupStickyfill() {
  	d3.selectAll('.sticky').each(function () {
  		Stickyfill.add(this);
  	});
  }

  // for second scrollrama
  // generic window resize listener event
  function handleResize2() {
  	// 1. update height of step elements
  	var stepH = Math.floor(window.innerHeight * 0.8);
  	step2.style('height', stepH + 'px');
  	var figureHeight = window.innerHeight / 2
  	var figureMarginTop = (window.innerHeight - figureHeight) / 2
  	figure2
  		.style('height', figureHeight + 'px')
  		.style('top', figureMarginTop + 'px');
  	// 3. tell scrollama to update new element dimensions
  	scroller2.resize();
  }
  // scrollama event handlers
  function handleStepEnter2(response) {
  	//console.log(response)
  	// response = { element, direction, index }
  	// add color to current step only
  	step2.classed('is-active', function (d, i) {
  		return i === response.index;
  	})
  	// update graphic based on step
  	var increment = response.index + 1;
  	currImg2.classed('is-visible', false);
  	currImg2 = figure2.select('#image' + increment);
  	currImg2.classed('is-visible', true);
  }

  // for third scrollrama
  // generic window resize listener event
  function handleResize3() {
  	// 1. update height of step elements
  	var stepH = Math.floor(window.innerHeight * 0.8);
  	step3.style('height', stepH + 'px');
  	var figureHeight = window.innerHeight / 2
  	var figureMarginTop = (window.innerHeight - figureHeight) / 2
  	figure3
  		.style('height', figureHeight + 'px')
  		.style('top', figureMarginTop + 'px');
  	// 3. tell scrollama to update new element dimensions
  	scroller3.resize();
  }
  // scrollama event handlers
  function handleStepEnter3(response) {
  	//console.log(response)
  	// response = { element, direction, index }
  	// add color to current step only
  	step3.classed('is-active', function (d, i) {
  		return i === response.index;
  	})
  	// update graphic based on step
  	var increment = response.index + 1;
  	currImg3.classed('is-visible', false);
  	currImg3 = figure3.select('#photo' + increment);
  	currImg3.classed('is-visible', true);
  }

  // for fourth scrollrama
  // generic window resize listener event
  function handleResize4() {
  	// 1. update height of step elements
  	var stepH = Math.floor(window.innerHeight * 0.8);
  	step4.style('height', stepH + 'px');
  	var figureHeight = window.innerHeight / 2
  	var figureMarginTop = (window.innerHeight - figureHeight) / 2
  	figure4
  		.style('height', figureHeight + 'px')
  		.style('top', figureMarginTop + 'px');
  	// 3. tell scrollama to update new element dimensions
  	scroller4.resize();
  }
  // scrollama event handlers
  function handleStepEnter4(response) {
  	//console.log(response)
  	// response = { element, direction, index }
  	// add color to current step only
  	step4.classed('is-active', function (d, i) {
  		return i === response.index;
  	})
  	// update graphic based on step
  	var increment = response.index + 1;
  	currImg4.classed('is-visible', false);
  	currImg4 = figure4.select('#picture' + increment);
  	currImg4.classed('is-visible', true);
  }

  function init() {

  	setupStickyfill();
  	// 1. force a resize on load to ensure proper dimensions are sent to scrollama
    handleResize()
		handleResize2()
    handleResize3()
    handleResize4()
  	// 2. setup the scroller passing options
  	// 		this will also initialize trigger observations
  	// 3. bind scrollama event handlers (this can be chained like below)
  	scroller.setup({
  		step: '#scrolly article .step',
  		offset: 0.68,
  		debug: false,
  	})
  		.onStepEnter(handleStepEnter)
      window.addEventListener('resize', handleResize)

    scroller2.setup({
  		step: '#scrolly2 article .step',
  		offset: 0.98,
  		debug: false,
  	})
  		.onStepEnter(handleStepEnter2)

    scroller3.setup({
  		step: '#scrolly3 article .step',
  		offset: 0.68,
  		debug: false,
  	})
  		.onStepEnter(handleStepEnter3)

    scroller4.setup({
  		step: '#scrolly4 article .step',
  		offset: 0.98,
  		debug: false,
  	})
  		.onStepEnter(handleStepEnter4)

  }
  // kick things off
  init();
}
