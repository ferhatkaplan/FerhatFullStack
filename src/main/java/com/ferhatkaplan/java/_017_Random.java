package com.ferhatkaplan.java;

import java.util.Random;

public class _017_Random {
    public static void main(String[] args) {
        double rastgele1=Math.round(Math.random()*4+1);
        System.out.println(rastgele1);

        Random random=new Random();
        int  rastgele2=random.nextInt(4)+1;
        System.out.println(rastgele2);

    }
}
