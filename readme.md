# Countdown Timer mini app using Js
![Tux, the Linux mascot](/assets/clock.svg)

.html file
----------
+ adding js file using `script:src` in the end of body tag
+ adding style file using `link rel=stylesheet` in head tag
+ adding `link, rel=icon` in the head tag adds a logo icon to the title bar
+ to import fonts, `link` tag is better than `@import`
    + `@import` defers the loading of included resourse, until the file is fetched.
    + also for `SEO` stuff, `link` is better, as it preloads the font.
+ `link, preconnect` - The preconnect link relation type is used to indicate an origin that will be used to fetch required resources. Initiating an early connection, which includes the DNS lookup, TCP handshake, and optional TLS negotiation, allows the user agent to mask the high latency costs of establishing a connection.

### Semantic elements - clearly define the content
* form, table, article, section, header, footer, nav

### Non semantic elements - don't define the content
* div, span

```
- All the divs in a parent take the same width as the maximum width child element in that parent.
- eg: the .timer will take the width as of the text of the h1 & vice versa.
```

.css file
---------
+ remove pre default margin, padding from whole document. using astericks * {}
+ apply common things to the body tag
+ `display: flex`, `justify-content` & `align-items` reverse their role based on the `flex-direction`.
+ 

### Css Box Model
+ each element represented as a rectangular box.
+ every box is composed of 4 edges
    + content edge
    + padding edge
    + border edge
    + margin edge
+ by default `box-sizing` is `content-box`
+ the default behaviour on `border-box` can be altered using `backgroung-clip`

.js file
--------
+ To enter a specific date to the Date object -> `new Date("July 16, 2021 00:00:00")`
+ .getTime() gives the date converted to milliseconds
+ setInterval(functionName, time in millis) to loop a function after every specific duration of time.

```
querySelectorAll is much faster than getElementsByTagName and getElementsByClassName when accessing a member of the collection because of the differences in how live and non-live collections are stored.
```

```
innerText returns all text contained by an element and all its child elements. innerHtml returns all text, including html tags, that is contained by an element.
```