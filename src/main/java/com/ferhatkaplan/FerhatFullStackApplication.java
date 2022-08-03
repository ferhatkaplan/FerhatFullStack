package com.ferhatkaplan;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//exclude; dahil etmemek
@SpringBootApplication(exclude = {
        org.springframework.boot.autoconfigure.security.servlet.SecurityFilterAutoConfiguration.class,
        org.springframework.boot.actuate.autoconfigure.security.servlet.ManagementWebSecurityAutoConfiguration.class,
}
)
public class FerhatFullStackApplication {

    public static void main(String[] args) {
        System.setProperty("spring.devtools.restart.enabled", "false"); //devtools active inactive
        System.setProperty("java.awt.headless", "false"); // Disabled headless
        SpringApplication.run(FerhatFullStackApplication.class, args);
    }
}
