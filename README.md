# funkycorp-codechallenge
This repository is for the code challenge activity

## Installing Demo Project

1.Clone from the github repo
```
git clone https://github.com/smoothlikejazz/funkycorp-codechallenge
```

2.Install dependency packages
```
npm install
```

3.Run the installed project via webkit local server
This will start demo server on port 7900 [demo site](http://localhost:7900/)
```
npm run serve
```

## Highlevel Plan
1.Setup boiler plate react project

2.Create baseline Data structure for employee
  * Employee thumb url
  * Employee description
  * employee background image

3.Create service that generates random employee list objects

4.Implement Bottom employee thumbnails

5.Implement Panel and thumbnail Component

6.Integrate Animation

7.Fix any responsive (mobile/desktop) styling needed

8.Unit test components 

Extra

9.Hook up to mock json api, place in loaders

## Known Issues

If manually resizing the browser to test responsive views, Going from the 3 panel list item to the 1 panel
The thumbnail grid will show as if 3 employees are still selected. (Means that user will be unable to select employee that seems already selected)
 
 * This can be fixed by removing panelList items when scaling down. Choosing not to for the Demo so we can see the responsive changes when resizing.
 * When initially loaded in users viewport
 
 ## Test Cases
 | Browser        | Status       |
 | ------------- |:-------------:| 
 | Chrome      | Pass | 
 | Safari      | Pass      | 
 | Firefox | Pass      |
 | IE 11+ | pending (VMWare)      | 
 
