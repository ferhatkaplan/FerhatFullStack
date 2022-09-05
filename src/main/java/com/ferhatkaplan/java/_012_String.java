package com.ferhatkaplan.java;

import java.util.Locale;

public class _012_String {
    public static void main(String[] args) {
        //String primitive type değildir.
        String dataValue = "Merhabalar Nasılsınız";
        System.out.println("Karakter Sayısı: " + dataValue.length());
        System.out.println("trim: başından veya sonunda boşlukları al" + dataValue.trim().length());
        System.out.println("M ile mi başlıyor" + dataValue.startsWith("M"));
        System.out.println("z ile mi bitiyor" + dataValue.endsWith("z"));
        System.out.println("bütün harfler küçük olsun" + dataValue.toLowerCase());
        System.out.println("bütün harfler büyük olsun" + dataValue.toUpperCase());

        //charAt: biz sayı veririz bize harf döner ==> sıfırıncı indisten başlar bize harf döner
        System.out.println(dataValue.charAt(0));
        System.out.println(dataValue.charAt(20));
        System.out.println(dataValue.charAt(dataValue.length() - 1));


    }
}
