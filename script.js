const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1  /* 0 dan başlatınca sorun oluyor çalışmıyor klasik algoritma mantığıyla devam*/

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length /* sayı artacak iyi güzel de fonksiyon ile beraber dairelerin de etkilenmesi lazım*/
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
}) 

function update() { /* index ve circle ikilisi ele alınacak artık 
ve aktifleştirilmeyen her yuvarlak aktifleşebilir artık html kısmından kontrol et istersen*/
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    /* 1in altına inmeyelim diye inaktif kalcak prev
    4ün üstüne çıkmayalım diye inaktif kalcak next
    onun dışında iki buton da aktif olacak*/
    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}