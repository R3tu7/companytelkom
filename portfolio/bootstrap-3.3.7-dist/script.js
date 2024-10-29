// event pada saat link di klik
$('.page-scroll').on('click', function(){
    
    // ambil isi href
    var href = $(this).attr('href');
    // tangkap elemen ybs
    var elemenTujuan = $(tujuan);

    console.log(elemenTujuan.offset().top);
});