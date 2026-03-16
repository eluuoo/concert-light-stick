Concert light stick: Collective Resonance Network

Author: Yilu Tan

Date: February 9, 2026 

1.User Instructions (Operation Manual)

Local Environment Setup：

1） Prepare files: Make sure the app.js, package.json, index.html, and style.css folders are located in your project directory.

2） Install dependencies: Open the terminal in the project folder and run: npm install

3） Start the server: Run the following command to start the Node.js server: npm start

4） Access the application:

* Laptop (Mac/PC): Open http://localhost:3000 in Chrome or Safari browser. This will be the "stage view".
  
* Mobile device (iPhone/Android): Since the mobile sensors require a secure connection, you must use services like Render (HTTPS URL) or local tunnels (such as npx localtunnel --port 3000) to access the application on your mobile device.

Interaction logic
  
1） Connection: Click the "Initialize Sensors" button on the mobile device.

2） Permissions: When prompted by iOS/Android, you must select "Allow" to grant access to the motion and direction sensors.

3）Interaction method: Shake the phone to change the color of the electronic support stick. (To be realized in the future)

* Every time you shake the device, a signal will be sent to all connected devices via WebSocket.
  
* Visual feedback: The "collective ripple" (blur) will appear simultaneously on your laptop screen and on the screens of all other connected users, creating a shared visual atmosphere.

  
2. Optional Introduction (Core Concept)
   
This is a networked creative programming work aimed at exploring the intersection between individual initiative and collective presence. The inspiration comes from the cheering sticks at concerts, which change their flashing frequency and color according to the stage effects. This project redefines ubiquitous smartphones as "remote fueling sticks", thereby converting physical energy into a shared digital space.

The work creates a real-time feedback loop using WebSocket (Socket.io) and p5.js. When users shake their devices, they not only change their private interface but also participate in the "collective resonance". This interaction reflects the delicate balance between the individual (each stick's unique color) and the collective (the synchronized ripples on the main stage), simulating the emotional bonds present in large-scale live performances.
Video demonstration: https://youtu.be/VeWY1L-Ys94


3. Future Development
In the future, we plan to use shaking devices to achieve the flickering interaction, which will better replicate the experience of shaking support sticks during concerts. Currently, the interface is not very aesthetically pleasing and we will continue to improve it.


4. Acknowledgements
* Library reference: -p5.j s for generative visual rendering.
* Socket.io for low-latency two-way communication.
* Express.js for powerful server-side routing.
* Inspiration sources: - The "Digital Coexistence" concept discussed in the WCC2 lecture.
* Traditional concert fan culture and the aesthetics of synchronized glow sticks (cheering sticks).
* Technical support: Guidance on iOS sensor permission protocols and Node.js deployment strategies.
