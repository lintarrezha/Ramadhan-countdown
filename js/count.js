document.addEventListener('DOMContentLoaded', function () {
  // Tetapkan tanggal target Ramadhan 2025
  var countDownDate = new Date('Feb 28, 2025 00:00:00').getTime();

  // Fungsi untuk memperbarui hitungan
  function updateCounter() {
    // Dapatkan waktu saat ini
    var now = new Date().getTime();

    // Hitung selisih waktu
    var distance = countDownDate - now;

    // Hitung hari, jam, menit, dan detik
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Perbarui elemen dengan ID yang sesuai
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    // Periksa apakah hitungan mundur sudah selesai
    if (distance < 0) {
      clearInterval(x);
      document.getElementById('days').innerHTML = '0';
      document.getElementById('hours').innerHTML = '0';
      document.getElementById('minutes').innerHTML = '0';
      document.getElementById('seconds').innerHTML = '0';

      // Tambahkan pesan saat Ramadhan sudah tiba
      document.querySelector('h1').innerHTML = 'Ramadhan Mubarak!';
    }
  }

  // Jalankan fungsi sekali untuk menghindari keterlambatan tampilan
  updateCounter();

  // Perbarui setiap detik
  var x = setInterval(updateCounter, 1000);
});
