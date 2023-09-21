
# Bookshelf Backend - NodeJS

Project ini terdiri dari beberapa API yaitu /category, /book dan /user. Model category dan book memiliki relationship dengan model `one-to-many` (satu category dapat memiliki banyak buku).

Saya menggunakan pola arsitektur MVC (Model-View-Controller), dimana pola ini memisahkan aplikasi menjadi komponen utama (Mode, View, Controller) yang memiliki tanggung jawab yang berbeda. Beberapa alasan saya menggunakan pola ini yaitu:

 * Memisahkan komponen-komponen utama aplikasi menjadi tiga bagian, sehingga dengan ini kode akan menjadi lebih mudah dikelola dan mudah melakukan debugging ketika ada error. 
 * Reusabilitas kode dalam pola ini memberikan kita kemudahan dan efisiensi waktu dalam membuat kode. Artinya kita dapat menggunakan satu kode file di beberapa file lainnya. 
 * Kemudahan pengujian/testing 


