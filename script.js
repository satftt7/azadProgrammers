CheckTheConnection();
accordion();
scroll();

function CheckTheConnection(){
	let el = document.createElement("div")
	document.querySelector(".content").prepend(el)

	window.addEventListener('online', (event) => {
	    el.textContent = "شما آنلاین هستید"
	    el.className = "alert"
	    el.classList.add("alert-success")
	});

	window.addEventListener('offline', (event) => {
	    el.textContent = "شما آفلاین هستید"
	    el.className = "alert"
	    el.classList.add("alert-danger")
	});
}


function accordion(){
		let accordions = document.querySelectorAll(".accordion")
	accordions.forEach(accordion => {
		Array.from(accordion.children).forEach(wrapper => {
			if (wrapper.classList.contains("show")) {
				wrapper.querySelector("div").style.maxHeight = wrapper.querySelector("div").scrollHeight + 30 + 'px'
			}
			wrapper.querySelector("span").addEventListener("click", e => {
				let span = e.target
				let wrapper = span.parentElement
				let div = span.nextElementSibling
				wrapper.classList.toggle("show")
				if (wrapper.classList.contains("show")) {
					div.style.maxHeight = div.scrollHeight + 30 + 'px'
				} else {
					div.style.maxHeight = null
				}
				Array.from(accordion.children).forEach(w => {
					if (w != wrapper) {
						w.classList.remove("show")
						w.querySelector('div').style.maxHeight = null
					}
				})
			})
		})
	})
}


function scroll(){
		let scroll = document.querySelector("button.scroll")
	window.addEventListener("scroll", e => {
		if (window.scrollY > 300 & window.scrollY < 500) {
			scroll.classList.add("showSc")
		} else {
			scroll.classList.remove("showSc")
		}
	})
	scroll.addEventListener("click", e => {
		if (scroll.classList.contains("showSc")) {
			window.scrollTo({top: 0, behavior: "smooth"})
		}
	})


	let scroll2 = document.querySelector("button.scroll2")
	window.addEventListener("scroll", e => {
		if (window.scrollY > 500) {
			scroll2.classList.add("showSc")
		} else {
			scroll2.classList.remove("showSc")
		}
	})
	scroll2.addEventListener("click", e => {
		if (scroll2.classList.contains("showSc")) {
			document.querySelector("#articles").scrollIntoView({top: 0, behavior: "smooth"})
		}
	})
}