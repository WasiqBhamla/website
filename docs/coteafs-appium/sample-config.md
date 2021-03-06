---
title: Config file
id: sample-config
---

## Sample Config File

Config file is main resource of this framework where all the necessary config setup for servers and devices
are done.
For naming convention of the file, refer the details mentioned [here](/projects/coteafs-appium/config-basics/).

```yaml
server: &default_server
  host: 0.0.0.0
  appium_path: /Users/in-wasiq.bhamla/.nvm/versions/node/v14.15.4/lib/node_modules/appium/build/lib/main.js
  session_override: true
  logs:
    level: DEBUG
    path: logs/appium-server.log
    timestamp: true
    local_timezone: true
    debug_spacing: true

servers:
  android:
    <<: *default_server
    port: 4723
    allow_insecure:
      - adb_screen_streaming
    android:
      suppress_adb_kill: true
  ios:
    <<: *default_server
    port: 4725
    ios:
      wda_port: 8101
  browserstack:
    protocol: HTTPS
    cloud: BROWSERSTACK
    user_name: ${env:CLOUD_USER}
    password: ${env:CLOUD_KEY}

device: &default_device
  os: ANDROID
  type: REAL
  language: US
  session_timeout: 120000
  others:
    clear_files: true
    no_reset: false
    full_reset: true
    clear_logs: true
  playback:
    stream:
      enabled: false
      width: 700
      height: 1024
      quality: HIGH
      bit_rate: 50
    screenshot:
      on_error: true
    record:
      enabled: false
      time_limit: 5
      android:
        size: 800x720
      ios:
        fps: 30
    delay:
      before_swipe: 200
      after_swipe: 100
      before_tap: 0
      after_tap: 0
      implicit: 1
      explicit: 5

devices:
  android:
    <<: *default_device
    name: emulator-5554
    version: 8.1
    automation: UIAUTOMATOR2
    type: SIMULATOR
    android:
      avd:
        name: Pixel_3_XL_API_27
        launch_timeout: 60000
        ready_timeout: 60000
        args: -gpu swiftshader_indirect
      app:
        install_timeout: 60000
        type: HYBRID
        path: apps/android/VodQA.apk
  android_bs:
    name: Samsung Galaxy S10
    automation: UIAUTOMATOR2
    cloud_capabilities:
      os_version: 9.0
      device: Samsung Galaxy S10
      app: ${env:APP}
      project: Project Appium
      build: Build-1
      name: Test 1
      browserstack.appium_version: 1.20.2
    playback:
      screenshot:
        on_error: true
    android:
      app:
        ignore_unimportant_views: false
  ios_bs:
    name: iPhone 12 Pro Max
    os: IOS
    automation: XCUI
    cloud_capabilities:
      os_version: 14
      device: iPhone 12 Pro Max
      app: ${env:APP_IOS}
      project: Project Appium
      build: Build-1
      name: IOS_Test 1
      browserstack.appium_version: 1.20.2
  iphone:
    <<: *default_device
    name: iPhone 12 Pro
    version: 14.4
    automation: XCUI
    type: SIMULATOR
    os: IOS
    ios:
      app:
        path: apps/ios/wdio-app.app.zip
        type: HYBRID
```
