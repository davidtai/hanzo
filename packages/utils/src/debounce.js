function debounce(func, wait, immediate) {
  var timeout
  return () => {
  	var context = this, args = arguments
  	clearTimeout(timeout)
  	timeout = setTimeout(function() {
  		timeout = null
  		if (!immediate) func.apply(context, args)
  	}, wait)
  	if (immediate && !timeout) func.apply(context, args)
  }
}

export default debounce
