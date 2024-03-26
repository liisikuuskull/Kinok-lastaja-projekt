package com.controllers;

import java.net.URL;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UrlCheckController {
    private final String SITE_IS_UP = "Site is up!";
    private final String SITE_IS_DOWN = "Site is down!";

    @GetMapping("/check")
    public String getUrlStattusMessage(@RequestParam String url) {
        String returnMessageString = "";
        URL urlObj = new URL toURL();

        return returnMessageString;

    }

    private void toURL() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'toURL'");
    }
}
