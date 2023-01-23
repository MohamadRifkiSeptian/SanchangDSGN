const kiriPanjang = document.querySelectorAll('.kiri .panjang');
kiriPanjang.forEach(e => {
  e.setAttribute('data-aos', 'fade-up')
  e.setAttribute('data-aos-delay', '50')
})

const kananPanjang = document.querySelectorAll('.kanan .panjang');
kananPanjang.forEach(e => {
  e.setAttribute('data-aos', 'fade-up')
  e.setAttribute('data-aos-delay', '50')
})

const kiriKotak = document.querySelectorAll('.kiri .kotak');
kiriKotak.forEach(e => {
  e.setAttribute('data-aos', 'fade-up')
})

const kananKotak = document.querySelectorAll('.kanan .kotak');
kananKotak.forEach(e => {
  e.setAttribute('data-aos', 'fade-up')
})


const tinggi = outerHeight;
const lebar = outerWidth;
const muncul = 80/100*tinggi;
const hasil = tinggi - muncul;


console.log('height'+tinggi);
console.log('width'+lebar);



