# wdio-mobileNweb
WebdriverIO with Appium &amp; Chrome capabilities for Mobile &amp; Web Test Automation

# Tech Stack
WebdriverIO 8.##.#

# Language
JavaScript

# Reporting
Allure
Spec

# Test JS Framework
Mocha

# Local Environment Setup (Mac OS & Windows)

Mac Terminal - Run => brew install node  
Windows Installer - https://nodejs.org/en#home-downloadhead

Download Android Studio(Windows & Mac) - https://developer.android.com/studio/install  
(Set the env variables for Node and Android Studio as necessary)

# Install Appium Dependecies
Run => npm i -g appium@next

# Install Appium Doctor through node: 
npm install -g appium-doctor

# Check status of installation: 
appium-doctor

# Check status of dependencies for android & iOS: 
appium-doctor --android ; appium-doctor --ios

# Install UIAutomator2 for Android through node: 
appium driver install uiautomator’version_number’
For e.g.: appium driver install uiautomator2@2.12.6

# Create Android Emulator
Run =>

# Create iOS Simulator
Run => 

# Project Framework Setup in Local
Clone the Repo from [GitHub](https://github.com/Siva-Nimble/wdio-mobileNweb)

Run => git clone https://github.com/Siva-Nimble/wdio-mobileNweb.git

Run => npm install

# Web and Mobile Test Cofigurations
You can configure Web Automation ( i.e., Browser, Parallel Test, Retries, Reporting etc ) as per needs by editing [wdio.conf.js](https://github.com/Siva-Nimble/wdio-mobileNweb/blob/main/wdio.conf.js) file.

You can configure Mobile Automation ( i.e., Android/iOS, Parallel Test, Retries, Device Farms, Reporting etc ) as per needs by editing [wdio.android.conf.js](https://github.com/Siva-Nimble/wdio-mobileNweb/blob/main/wdio.android.conf.js) and [wdio.iOS.conf.js](https://github.com/Siva-Nimble/wdio-mobileNweb/blob/main/wdio.iOS.conf.js) files.  

# Run Tests in Local
Web  
npm run wdio:web

Mobile  
npm run wdio:android  
npm run wdio:ios

To Generate Allure report  
npm run report
