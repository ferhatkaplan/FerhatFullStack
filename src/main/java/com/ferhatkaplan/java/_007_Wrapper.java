package com.ferhatkaplan.java;

public class _007_Wrapper {
    public static void main(String[] args) {
        //psvm ===> TAB

        //Data type: Primitive + Wrapper
        //Primitive Type
        // 8 tane türü vardır.
        //ilke Türler javanın 100/100 OOP olmamasına neden olandır.
        //Hafıza Stack Memory kullanır.
        //instance (new ) kullanmadan çalışır.
        //null değer alamazlar.
        //bazen primitive türleri Wrapper yapılara çevirmekn zorunda kalırız.
        //String primitive Değildir.

        // primitive Type : 8 tane primitive Type vardır.
        // tamsayılar:  b<s<i<l
        Byte b1 = 127;
        Short s1 = 128;
        Integer i1 = 1555155;
        Long l1 = 151515151545L;

        // virgüllü sayılar: float<double
        Float f2=15.45f;
        Double d2=1555115.415;

        // boolean: true veya false
        Boolean b3=true;
        b3=false;
        b3=3>1;//true
        b3=1>5; //false

        //karakter: char
        Character c4='@';
        System.out.println(c4);

        /////////////////////////////////////////////////////////////////////////////////////////////
        //Wrapper Type (Sarmalayıcı Type)
        //Data type: Primitive + Wrapper
        //Gelişmiş tiplerdir
        //Hafıza Heap Memory kullanır.
        //instance (new ) kullanıyoruz.
        //null değer verebiliriz..
        //String wrapper type.

        Byte  wb1 = 127;
        Short ws1 = 128;
        Integer wi1 = 1555155;
        Long wl1 = 151515151545L;

        // virgüllü sayılar: float<double
        Float wf2=15.45f;
        Double wd2=1555115.415;

        // boolean: true veya false
        Boolean wb3=true;

        //karakter: char
        Character  wc4='@';
        System.out.println(c4);

        //String
        String kelime="Veriler";

        //Diziler
        //Classlar

        }
}
