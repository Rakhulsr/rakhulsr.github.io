document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.navbar a').forEach(anchor =>  {
    anchor.addEventListener('click', function(e) {
      e.preventdefult();

      document.querySelector(this.getAttribute(href)).scrolIntoView(
        {behavior : 'smooth'
      });
    });
  });
});

// email

// Inisialisasi EmailJS dengan User ID Anda

function kirimEmail() {
  var params = {
    nama :document.getElementById('nama').value,
    email : document.getElementById('email').value,
    pesan : document.getElementById('pesan').value
  }
  // Kirim email menggunakan EmailJS

  emailjs.send("service_ij7odxn", "template_nsbkk6c", params)
  .then(function(response) {
     console.log('Email terkirim!', response);
  }, function(error) {
     console.log('Gagal mengirim email:', error);
  });
}


