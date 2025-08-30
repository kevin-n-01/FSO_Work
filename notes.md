
``` mermaid
sequenceDiagram
    participant browser
    participant server
    
    browser->>server: POST new note
    activate server
    server-->>browser: GET notes
    deactivate server

    activate browser
    Note left of browser: Browser reloads notes page
    browser->>server: 
    deactivate browser


```