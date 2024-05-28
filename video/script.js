let btns = document.querySelector('.btn')
        let video = document.querySelector('.video')
        btns.addEventListener("click", function () {
            if (!btns.classList.contains("slide")) {
                btns.classList.add("slide")
                video.pause()
            } else {
                btns.classList.remove("slide")
                video.play()
            }
        })