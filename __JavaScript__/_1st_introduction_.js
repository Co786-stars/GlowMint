/*
Introduction to JavaScript :-
- JavaScript started as a simple browser scripting language but has grown into a versatile, standalone language powering 
  both front-end and back-end development through engines like V8 and platforms like Node.js.

Extra Intro Detail of js :-
- JavaScript is not only for browsers—it can run on servers, databases (like MongoDB shell), mobile apps, and even IoT devices.
- Modern JavaScript engines use JIT (Just-In-Time) compilation, which makes JS code run very fast, almost like compiled languages.
- That’s why JavaScript is everywhere now: websites, servers, apps, and even smart devices.


What is JavaScript?
- JavaScript is a lightweight, interpreted scripting language created to make web pages interactive and dynamic.
- Scripts are written directly in HTML and run automatically when a page loads.
- No special compilation is needed—JavaScript executes as plain text.


Why is it called “JavaScript”?
- Originally named “LiveScript” when created in 1995.
- Java was highly popular at the time, so it was renamed JavaScript to leverage Java’s fame, positioning it as a “younger brother.”
- Today, JavaScript is completely independent of Java and follows its own standard: ECMAScript. means now it has no relation to Java.



Where can JavaScript run?
- Initially, JavaScript ran only in web browsers, where it powered interactive websites.
- Today, it runs not only in browsers but also on servers (via Node.js) and on any device with a JavaScript engine.
- Fun fact: JavaScript can even run inside databases (like MongoDB’s shell) and embedded systems (IoT devices).

JavaScript engines:
- Every browser has an embedded engine, sometimes called a "JavaScript virtual machine."
- These engines don’t just read code—they optimize it using techniques like Just-In-Time (JIT) compilation,
  which makes JavaScript almost as fast as compiled languages in many cases.
- Different browsers use different engines, each with its own codename:
    • V8 – used in Chrome, Opera, and Edge (also powers Node.js)
    • SpiderMonkey – used in Firefox (the very first JS engine ever created)
    • Chakra – used in Internet Explorer
    • JavaScriptCore / Nitro / SquirrelFish – used in Safari

Why remember these names?
- These codenames often appear in developer articles and performance benchmarks.
- Example: If a feature is supported by V8, it will likely work in Chrome, Opera, and Edge.
- Hidden detail: Engines evolve separately, so a new feature may appear in one engine months before others.
  That’s why developers often check compatibility tables (like MDN or "Can I Use") before using modern JS features.


How do JavaScript engines work?
- Engines follow three basic steps to run JavaScript code: Parsing, Compilation, Execution. 
- Parsing: Reads and analyzes the script to understand its structure.
- Compilation: Converts the script into machine code using JIT compilation.
- Execution: Runs the machine code (very fast) on the device.
  Engines also optimize the code during and after execution by monitoring data flow and improving performance dynamically.



What in-browser JavaScript can do?
- Manipulate the web page (DOM + CSS)
    • Dynamically change HTML content, structure, and CSS styles in real-time
    • Create, update, or remove elements instantly
    • Animate elements and build interactive UI components

- Respond to user actions 
    • React to clicks, mouse movements, keyboard input, and touch gestures
    • Handle form submissions, validations, and provide instant feedback
    • Enable drag-and-drop functionality and custom event handling

- Communicate with servers 
    • Fetch data asynchronously using AJAX, Fetch API, or WebSockets
    • Send data back to the server without reloading the page
    • Enable real-time applications such as chat apps and live notifications

- Store data locally
    • Use cookies, localStorage, and sessionStorage for persistence
    • Save user preferences, login sessions, and temporary data
    • Provide offline functionality with IndexedDB and Service Workers

- Access some hardware (with user permission)
    • Camera and microphone for video calls, voice recording, or AR apps
    • GPS/location services for maps, ride-hailing, or delivery tracking
    • File access only when the user explicitly selects files via <input> or drag-and-drop
    • Clipboard API for copy-paste operations (with permission)

- Enhance user experience
    • Build Progressive Web Apps (PWAs) that work offline
    • Integrate with APIs like Notifications, Vibration, and Speech Recognition
    • Create games, visualizations, and interactive dashboards directly in the browser

Note:
- These capabilities make JavaScript the backbone of modern web applications.
- All actions are sandboxed for safety, meaning JavaScript cannot harm your system directly.
- Permissions ensure user privacy and control over sensitive features.




What in-browser JavaScript cannot do?

- No direct file system access
    • Cannot freely read, write, or delete files on your computer
    • File access only when the user explicitly selects files via <input> or drag-and-drop

- No secret hardware access
    • Cannot secretly turn on camera, microphone, or GPS without explicit user permission
    • No hidden surveillance or background monitoring

- No cross-tab or cross-website access 
    • Cannot access data from other browser tabs or windows (Same Origin Policy)
    • Example: A page from site.com cannot read your gmail.com tab

- No system-level operations
    • Cannot run programs or scripts on your operating system
    • Cannot install software, modify system files, or access OS functions directly

- Limited network requests 
    • Can only freely contact the same server the page came from
    • Contacting other servers requires their permission (via CORS headers)
    • Cannot bypass firewalls or network restrictions

- No direct hardware control 
    • Cannot control USB devices, printers, or external drives directly
    • Cannot access Bluetooth devices unless the user grants permission via Web Bluetooth API

- No permanent background execution
    • JavaScript in browsers cannot run forever in the background
    • Execution stops when the tab is closed (except for Service Workers with limited scope)

Why these restrictions exist?
- To protect user safety, privacy, and system integrity
- Prevent malicious websites from stealing data or harming your computer
- These limitations apply only to browser JavaScript (Node.js has different capabilities)



What makes JavaScript unique?

- Full integration with HTML and CSS
    • The only language that natively manipulates the DOM and styles
    • Enables dynamic, interactive web pages

- Simple for beginners, powerful for experts
    • Easy to learn for small scripts
    • Scales up to complex apps like Google Maps, Facebook, or Netflix

- Universal browser support 
    • Runs in all modern browsers without plugins
    • Works instantly when embedded in HTML

- Safe execution environment
    • Sandboxed to prevent harm to the user’s computer
    • Built-in restrictions ensure security

- Dual environment capability 
    • Same language works in browser (client-side) and server (Node.js)
    • Enables full-stack development with one language

- Massive ecosystem 
    • Rich libraries and frameworks (React, Angular, Vue, Express)
    • Huge community and open-source support

- Constantly evolving
    • ECMAScript standards add new features every year
    • Modern JavaScript supports async/await, modules, classes, and more

- Beyond the browser 
    • Runs on servers, databases (MongoDB shell), mobile apps, and IoT devices
    • Powers desktop apps (Electron), cross-platform frameworks, and smart devices


Why these matter:
- JavaScript is the "Swiss Army knife" of web technologies
- Combines accessibility, versatility, and power in one language
- That’s why it remains the number one language for web development worldwide



Is JavaScript interpreted or compiled?
- short answer: both (it's complicated)
  Historical context
    • in the 1990s, javascript engines were simple interpreters
    • they read code line by line
    • immediately executed each line
    • no compilation step

- This made javascript:
    • easy to develop (no build step)
    • slower for complex operations

- Modern reality: jit (just-in-time) compilation 
  today's engines (v8, spidermonkey, javascriptcore) use a 3 tier system:
    • interpreter → quick start, executes immediately
    • base compiler → optimizes hot code (frequently run)
    • optimizing compiler → aggressive optimization
  
  example: google chrome's v8 engine
  source code → interpreter (ignition) → bytecode
                ↓
  hot code → compiler (turbofan) → optimized machine code


- Step-by-step how modern js works :
    • parsing: engine reads your js code
    • ast: creates abstract syntax tree (structure)
    • interpretation: converts to bytecode (fast execution)
    • profiling: watches for "hot" code (frequently run)
    • compilation: compiles hot code to optimized machine code
    • re-optimization: can de-optimize if assumptions break
    • garbage collection: cleans up unused memory automatically

    

Why use another language over JavaScript?
- JavaScript is the main language of the web, but sometimes developers want extra features or easier syntax . 
  That’s why other languages exist which transpile/convert into JavaScript so they can run in the browser.

- Examples of "languages over JavaScript":
    • CoffeeScript → Shorter, cleaner syntax.
    • TypeScript → Adds strict typing (by Microsoft).
    • Flow → Another typing system (by Facebook).
    • Dart → Google’s language, can run on its own or convert to JS.
    • Brython → Write browser apps in Python.
    • Kotlin → Modern language that can target JS or Node.

- In short:
  JavaScript works everywhere with HTML/CSS, but these "languages over JS" give extra power, safety, or convenience once you know JS.
  Transpiler → Translator: converts one high-level language to another (HLL → HLL)/(e.g. TypeScript → JS).
  Compiler → Converts high-level code into machine code (binary) for the computer(HLL → LLL)/(e.g. C++ → machine code).
  Interpreter → Runs code line by line directly, without converting to another language(line by line execution) .

What is the difference between compiler and transpiler?
- A compiler translates high-level programming language (HLL) code into low-level machine code (LLL) that the computer's processorcan execute directly.
- A transpiler converts one high-level programming language (HLL) into another HLL (e.g., TypeScript → JavaScript, Flow → JavaScript, Brython → JavaScript).


What is the file extension of transpiled and JavaScript files?
- Transpiled files usually have the same extension as the target language. For example, TypeScript files have a .ts extension, but after transpilation to JavaScript, they become .js files.
- JavaScript files have a .js extension.

How to lik javascript file in html?
- You can link a JavaScript file in an HTML document using the <script> tag with the src attribute. For example:
  <script src="path/to/yourfile.js"></script>

Where is the place to link javascript file in html?
- You can link a JavaScript file in the <head> section or just before the closing </body> tag of your HTML document. 
  Placing it before </body> is often preferred to ensure that the HTML content loads before the script runs.

- Example where we can link javascript file in html:
  -------------------------------------------------
  <head>
    <script src="path/to/yourfile.js"></script>
  </head>
  ------------------------------------------------
  <body>
    <!-- HTML content -->
    <script src="path/to/yourfile.js"></script>
  </body>
  -------------------------------------------------

*/