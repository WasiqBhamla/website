---
title: Sample TestNG Yaml
id: sample-testng
---

This is sample `testng.yaml` file for demonstration purpose.

```yaml
name: coteafs-appium Test Suite
listeners:
  - com.github.wasiqb.coteafs.listeners.ConfigListener
  - com.github.wasiqb.coteafs.listeners.SuiteListener
  - com.github.wasiqb.coteafs.listeners.TestListener
  - com.github.wasiqb.coteafs.listeners.ExecutionListener
  - com.github.wasiqb.coteafs.listeners.DataProviderListener
  - com.github.wasiqb.coteafs.listeners.AnnotationTransformer
  - com.github.wasiqb.coteafs.listeners.SuiteResultReporter
tests:
  - name: Android Test
    parameters: { server: browserstack, device: android_bs }
    classes:
      - name: com.github.wasiqb.coteafs.appium.android.VodQATest
        includedMethods:
          - test01Login
          - test02NativeView
          - test03LongPress
          - test04Rotation
          - test05Slider
          - test06VerticalSwipe
          - test07DragDrop
          - test09PushPullFile
          - test10ScrollOnDeviceUntilElement
          - test11ScrollOnElementUntilElement
        excludedMethods:
          - test08DoubleTap
```
