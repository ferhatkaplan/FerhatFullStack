package com.ferhatkaplan.linux;

public class LinuxCodes {

//    Linux
//1-) Shell (Kabuk)     ==> Kullanıcıdan gelen istekleri Kernel'a iletir.'

//    GNU =GNU is not Unix
//    GNU/GPL
//    GPL Temel Özgürlük ilkesi
//1-) programım istediğimiz gibi kullanabiliriz
//2-) kod ekle , sil , oku
//3-) Kopyası alıp dağıtım
//4-) var olan sürümü değiştirip dağıtabiliriz.
//
//########################################################################################
//    sudo apt install curl
//    curl --version
//    sudo apt-get  install zip
//    sudo apt-get  install gunzip
//    sudo apt install vim
//
//    ping google.com
//    curl google.com
//
//    man mkdir  ==> detaylı gösterim.
//    info mkdir ==> bilgi almak
//    whereis java
//    hostname --help
//    pwd ==> Bulunduğumuz dizini gösterir.
//            hostname  ==> ağ adını
//    whoami    ==> user
//            clear
//    history   ==> önceki yazdığımız komutları getirir
//
//# dizine gitmek
//    cd dizinAdi
//    cd .
//            cd ..
//    cd ~
//    cd /
//
//            # listeleme
//    ls -l   ==> küçükten büyüğe doğru
//    ls -al  ==> gizli dosyaları göster küçükten büyüğe
//    ls -lar ==> büyükten küçüğe
//    ls -t   ==> zamana göre
//    d rwx r-x r-x  ==> d=directory r=read w=write x=execute
//
//
//#isim değiştirme(rename) ve taşımak için kullanıyoruz.
//    mv deneme.txt degisti.txt
//    mv degisti.txt cloneDizini
//
//#copy
//    cp degisti.txt clone
//
//#diff
//    diff deneme.txt deneme2.txt
//
//
//# dizin oluştur
//    mkdir dizin
//
//# dizin sil
//    rmdir dizin
//
//# eğer dizin içinde dizin varsa yani dizin dolu ise
//    rm -r dizin
//    rm -rf dizin
//
//# dosya yazma ve okumak
//    cat >> deneme.txt ==> son satırdan devam eder
//    cat > deneme.txt ==> bütün dosya siler sona ekler
//    vim deneme.txt
//    tail deneme.txt
//
//    vim deneme.txt
//    g ==> ilk stır için kullanıyoruz
//
//
//    cat deneme.txt
//    tac deneme.txt
//
//    tail deneme.txt       ==> sondan 10 satırı gösterir.
//    tail -n 15 deneme.txt ==> sondan 15 satırı göster
//    tail -f deneme.txt    ==> yeni yazılan yerleri gösterir.
//
//            # tek dosya
//    tar: tape archive
//    tar -cf butun.tar ./*       2-) kernel (çekirdek) ==> Yazılım ile Donanım arasındaki haberleşmeyi sağlıyor
//     ==> sıkıştırma yapmadan
//tar -zcf butun.tar.gz ./*  ==> sıkıştırma yaparak saklamak

//gzip -9 deneme.txt
//gzip -9 ./*

//gunzip deneme.txt   ==> dosya sıkıştır
//gunzip ./*          ==> dosya açmak

//# zip
//sudo apt-get install zip
//zip -r butun.zip ./*
//
//# unzip
//sudo apt-get install unzip
//unzip butun.zip


//###########################################################
//1-) Masa üstüne deneme adında bir dizin oluşturalım
//2-) bu deneme dizinin içine java.txt dosyası oluşturalım
//3-) java.txt dosyasının içine Ben java öğreniyorum yazalım.
//4-) bu oluşturduğumuz java.txt içine son satırına "son satır" yazalım.
//5-) bulunduğumuz yeri adını bulalım (pwd)
//6-) sil.txt dosyası oluşturalım bunu komutlarla silelim.
//7-) deneme dizininin sıkıştıralım sonra bu sıkıştırılmış dizini açalım (zip
//
//

}
