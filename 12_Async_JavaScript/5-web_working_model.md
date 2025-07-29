##### 🧠 How the Web Works

**_ 🔁 1. Client-Server Communication Model _**

    Follows a Request-Response model, also known as Client-Server Architecture.

    The client (usually a browser) sends a request to the web server, which returns a response.

    Applies both when fetching full webpages or just data from APIs.

**_ 🌐 2. What Happens When You Access a Web Server? _**
📍 Step 1: DNS Lookup

    The browser doesn’t directly know the IP of restcountries.eu or any domain.

    A DNS (Domain Name Server) resolves this domain into a real IP address.

    Think of DNS like the internet’s phone book.

🧠 Example Breakdown:

    URL: https://104.27.142.889:443/rest/v2

        https:// → Protocol

        104.27.142.889 → IP address (resolved from domain by DNS)

        :443 → Port (443 for HTTPS, 80 for HTTP)

        /rest/v2 → Resource (endpoint/path)

🔗 Step 2: TCP/IP Socket Connection

    Once the IP is known, a TCP/IP connection is established.

    This creates a two-way communication line between browser and server.

💡 About Protocols:

    TCP (Transmission Control Protocol): Breaks data into chunks (packets) for transfer.

    IP (Internet Protocol): Routes those packets to the destination via IP addresses.

    Packets can take different routes to improve speed.

📡 3. Making the HTTP Request
🔐 Protocol:

    HTTP = HyperText Transfer Protocol

    HTTPS = HTTP over TLS/SSL (encrypted & secure)

🧾 HTTP Request Structure:

    Start Line:

        Method: GET, POST, PUT, PATCH, DELETE

        URL target: e.g., /rest/v2/alpha

        HTTP version: e.g., HTTP/1.1

    Headers: Metadata (e.g., browser info, language, time)

    Body (optional): Data sent to server (usually with POST, PUT)

📥 4. Receiving the HTTP Response
🧾 Response Structure:

    Start Line:

        HTTP Version

        Status Code: 200 OK, 404 Not Found, 500 Server Error, etc.

    Headers: Metadata about the response (e.g., content-type, caching info)

    Body: The actual content — could be:

        HTML, JSON, images, etc.

🧱 5. Multiple Requests for a Web Page

    The first request returns the HTML document.

    Browser parses it and makes more requests:

        CSS files

        JS scripts

        Images

        Fonts, etc.

    Each asset = one more HTTP request/response cycle.

🚚 6. How TCP/IP Sends the Data

    TCP: Breaks data into packets and reassembles them at the destination.

    IP: Ensures each packet is routed efficiently to its target.

    Sending smaller chunks helps optimize delivery across busy networks.
