/*
 * Author: Rafael De Castro
 * Contact: hello@via.vision
 * Author URI: https://via.vision/
 * Contact me for extra license privileges!
 * Author- Proof of Code: https://github.com/viavision/tracker/
 * license: GNU General Public License v3.0
 * license URI: https://github.com/viavision/tracker/blob/main/LICENSE
 * Version: 2.5
 */
 
   
    function noAdminBar() {
    // Define an array of CMS admin bar IDs or selectors
    var cmsAdminBars = [
    '#wpadminbar', // WordPress
    '#joomla-adminbar', // Joomla
    '#toolbar', // Drupal
    '.admin__data-grid', // Magento
    '.admin-bar', // Shopify
    '.wix-settings-sidebar', // Wix
    '.sqs-edit-mode-bar', // Squarespace
    '#typo3-admin-panel', // TYPO3
    '.c5-edit-mode', // Concrete5
    '#ee-sidebar', // ExpressionEngine
    '#modx-panel', // MODX
    '.cms-admin-bar', // SilverStripe
    '.umbraco-overlay', // Umbraco
    '.txp-header', // Textpattern
    '.radiantadmin', // Radiant CMS
    '.arc-toolbar', // Arc XP
    '#admin-navbar', // OpenCart
    '.ghost-admin-bar', // Ghost
    '#backend-toolbar', // October CMS
    '#header-nav', // PrestaShop
    '#main-toolbar', // Pimcore
    '.cp-nav', // Craft CMS
    '#adminheader', // Bolt CMS
    '#pw_bar', // ProcessWire
    '.cmsms-toolbar', // CMS Made Simple
    '.contao-backend-toolbar', // Contao
    // Add more admin bar IDs or selectors for other CMS here
    ];
    let dontTrack = true;
    cmsAdminBars.forEach(function(adminBar) {
    if ($(adminBar).length > 0) {
        dontTrack = false;
    }
    });
    console.log(dontTrack);
    return dontTrack;
    }

     
    function GET(name) {
        let parameters = window.location.search.substring(1).split("&"),
        get = {};
        
        for (let i = 0; i < parameters.length; i++) {
        let keyValuePair = parameters[i].split("=");
        let key = decodeURIComponent(keyValuePair[0]);
        let value = decodeURIComponent(keyValuePair[1]);
        get[key] = value;
        }
        if(name) { 
        return get[name];
        } else {
        return get;
        }
    }
    
    // Function to track and store GET data history
    function getHistory() {
        
        let existingHistory = saved(`getHistory`);
        //work on this and make more then one records
        
        if (existingHistory && existingHistory !== `false`) {
        existingHistory.ls ?? `7b3b0a13-154a-ed11-bba2-002248425606`;
        existingHistory.lscc ?? `a57c041f-154a-ed11-bba2-002248425606`;
        } else {
        existingHistory = {ls: `7b3b0a13-154a-ed11-bba2-002248425606`, lscc: `a57c041f-154a-ed11-bba2-002248425606`};
        }
        
        // Merge GET() into existingHistory
        Object.assign(existingHistory, GET());
        
        save(`getHistory`, existingHistory);
        
    } getHistory(); // Call the function to track and store GET data history - per refresh only
    
    // Function to track and store href data history
    
    function hrefHistory() {
        const currentDate = new Date();
        const dateTime = `${currentDate.getUTCDate()}/${currentDate.getUTCMonth() + 1}/${currentDate.getUTCFullYear()} ${currentDate.getUTCHours()}:${currentDate.getUTCMinutes()}:${currentDate.getUTCSeconds()}`;
    
        let existingHistory = saved(`hrefHistory`) || {}; // Initialize as an object
    
        // Assign the current URL to the dateTime key in the existing history object
        existingHistory[dateTime] = window.location.href;
    
        save(`hrefHistory`, existingHistory);
    }
    
    hrefHistory(); // Call the function to track and store GET data history - per refresh only

    
    function profile() {
        
    let token = startTime = false;
    let profileData = saved('profile');
    
    if (profileData && profileData.token) { // If profile has use
        token = profileData.token;
    }
    
    if (profileData && profileData.startTime) { // If profile has use
        startTime = profileData.startTime;
    }
    
    const twentyFourHoursInMilliseconds = 24 * 60 * 60 * 1000;
    const currentDate = new Date();
    const dateTime = `${currentDate.getUTCDate()}/${currentDate.getUTCMonth() + 1}/${currentDate.getUTCFullYear()} ${currentDate.getUTCHours()}:${currentDate.getUTCMinutes()}:${currentDate.getUTCSeconds()}`;
    const referrer = document.referrer;
    
    function isTokenExpired(token) {
    return token ? Date.now() - parseInt(token.split('|')[0], 10) >= twentyFourHoursInMilliseconds : true;
    }
    
    if (!token || isTokenExpired(token)) {
    token = btoa(unescape(encodeURIComponent(`${Date.now()}|${Math.floor(500001 * Math.random())}`))).replace(/=/g, '');
    startTime = dateTime; // Create startTime
    }
    
    let profile = 
    {
    'token': token || ``, // From start
    'startTime': startTime || ``, // From start
    'referrer': referrer || ``, // From start
    'hrefHistory': saved(`hrefHistory`) || `{}`, // History
    'getHistory': saved(`getHistory`) || `{}` // History
    }
    
    console.log(profile);
    
    save(`profile`, profile);
    
    } profile();


    // To use the profile data, simply call the profile() function:
    let profileData = saved(`profile`);
    console.log(profileData);

    /*
    function uniqueArray(array) {
        var uniqueArray = [];
        for (var value of array) -1 === uniqueArray.indexOf(value) && uniqueArray.push(value);
        return uniqueArray;
    }
    */

  
    function findOuterHTML(targetOuterHTML) {
    const matchingElements = [];
    $(`*`).each(function () {
    const elementOuterHTML = this.outerHTML;
    if (elementOuterHTML === targetOuterHTML) {
    matchingElements.push(this);
    }
    });
    return $(matchingElements);
    }
    
    
    function testLocalStorageSize() {
    if (localStorage && !localStorage.getItem('size')) {
    var i = 0;
    try {
    // Test up to 10 MB
    for (i = 250; i <= 10000; i += 250) {
    localStorage.setItem('test', new Array((i * 1024) + 1).join('a'));
    console.log(`Successfully stored ${i} KB of data.`);
    }
    } catch (e) {
    localStorage.removeItem('test');
    localStorage.setItem('size', i - 250);
    console.log(`An error occurred at ${i} KB. 'size' set to ${i - 250} KB.`);
    }
    }
    } testLocalStorageSize(); // Call the function to execute the code
    
    
    function save(name, data) {
    sessionStorage.setItem(name, JSON.stringify(data));
    }
    
    
    function saved(name) {
    const userDataString = sessionStorage.getItem(name);
    if (userDataString !== undefined && userDataString !== `undefined` && userDataString) {
    console.log(userDataString);
    return JSON.parse(userDataString);
    }
    return null;
    }
    
        
    function Xtag(type, name, attributes) { //Google analytics
        console.log(attributes);
        function gtag() {
            dataLayer.push(arguments);
        }
        if(!name){name = `Unknown`;}
        (window.dataLayer = window.dataLayer || []), gtag("js", new Date()), gtag(type, name, attributes);
        //send the rest to dynamics
    }
    
    
    // This will check if $ has loaded. If not, it will add to <head>
    window.onload = function() {
    if (!window.jQuery) {
      var head = document.getElementsByTagName(`head`)[0];
      var script = document.createElement(`script`);
      script.type = `text/javascript`;
      script.src = `http://code.jquery.com/jquery-latest.min.js`;
      head.appendChild(script);
    }
    }
    
    
    function defer(method) {
    if (window.jQuery) {
      method();
    } else {
      setTimeout(function() { defer(method) }, 50);
    }
    }

    // This will wait until $ is loaded then fire your logic
    defer(function () {

    $ = jQuery;
    $(document).ready(function() {
    
    
    let serverName = `https://via.vision`; // Server Name - replace here
    let restAPI = `wp-json`; 
    // or let restAPI = `api`;
    let nameSpace = `v`; // Namespace from register_rest_route
    let version = `1`; // Version from register_rest_route
    
    let ajaxurl = `${serverName}/${restAPI}/${nameSpace}/${version}/`; // Construct the correct URL
    
    $.ajax({
    type: `POST`,
    url: ajaxurl,
    async: true,
    cache: false,
    dataType: `json`,
    data: {
    key: `123`, // Replace with your actual secret key
    href: window.location.href,
    type: `getIntent`,
    },
    // ... other settings ...
    success: function(response) {
    console.log('Received response:', response);

    // Initialize an empty object to store merged data
    var mergedData = {};

    // Loop through each object in the response
    $.each(response, function(index, item) {
        // Loop through the properties of each object
        $.each(item, function(element, data) {
            // Check if the property already exists in mergedData
            if (mergedData[element]) {
                // Merge the data with existing data
                mergedData[element].hover = (mergedData[element].hover || 0) + (data.hover || 0);
                mergedData[element].click = (mergedData[element].click || 0) + (data.click || 0);
            } else {
                // If the property doesn't exist, add it to mergedData
                mergedData[element] = {
                    hover: data.hover || 0,
                    click: data.click || 0
                };
            }
        });
    });

    console.log(mergedData);

    // Now you have the merged data, you can save it or use it as needed
    if (mergedData) {
        // Assuming the `save` function is correctly defined and works as expected
        save(`intent`, mergedData);
        showIntent(true);
        // Set the box-shadow and -webkit-box-shadow styles for an element with ID "exampleElement"
        $(`.element-counter`).addClass(`glow`);
    }
    },
    error: function(response) {
        console.log('Failed:', response);
        // Handle error message here
    }
    });


      function showIntent(config) {
          
      console.log(GET('view'));
      
      if(GET('view') !== 'intent') {return false;}
      
      $(`.element-counter`).remove();

      if(JSON.stringify(saved(`intent`))){
      
      //console.log(saved(`intent`));

      $.each(saved(`intent`), function(key, val) { //outerHTML

        if(key && val){
        
        //console.log(`start-------`);
        
        //console.log(key);
        //console.log(val);
        
        //console.log(`end-------`);
        
        if (findOuterHTML(key).length > 0) { // Check if the element exists
        
        let element = findOuterHTML(key);
        
        let elementOffset = element.offset();
        
        let elementTop = elementLeft = 0; 
        
        //if(elementOffset.top) elementTop = (elementOffset.top - $(window).scrollTop()) + (element.height() / 2) + 25;
        //if(elementOffset.left) elementLeft = (elementOffset.left - $(window).scrollLeft()) + (element.width() / 2) - 160 / 2;
                
        if(elementOffset.top) elementTop = (elementOffset.top) + (element.outerHeight()) + 30;
        if(elementOffset.top) elementLeft = (elementOffset.left) + (element.outerWidth() / 2);

        let counter = `<div class="element-counter" style="top:${elementTop}px;left:${elementLeft}px;">`;
        
        if(val.hover){
        
        const name = val.hover === 1 ? `hover` : `hovers`;
        
        counter += `<div class="element-dash element-hover"><b>${val.hover}</b><span>${name}</span></div>`;
        
        }
        
        if(val.click){
        
        const name = val.click === 1 ? `click` : `clicks`;
        
        counter += `<div class="element-dash element-click"><b>${val.click}</b><span>${name}</span></div>`;
        
        }
        
        if(element.prop("tagName")){
        
        //counter += `<div class="element-dash element-tag"> ${element.prop("tagName").toLowerCase()}</div>`;
        
        if(element.text()){
            
        //const title = element.text().toLowerCase(); ///this doubles the text not sure why????
        
        //counter += `<div class="element-extra"><div class="element-dash element-text"> ${title}</div></div>`;
        
        }
        
        }
        
        counter += `</div>`;
        
        if(config === true){
        //findOuterHTML(key).after(counter);
        $('body').after(counter); //this is what adds all markers, maybe on function if set to false it blocks it
        //$(counter).appendTo(element);
        }
        
        }
        
        }

      });

      }

      } showIntent(true);
      
      
      if(noAdminBar()) {

      /*
      $(window).scroll(function() {
        $(`.element-counter`).remove();
        scrollTimer = setTimeout(function() {
          showIntent(true); //if false wont show markers
        }, 2000);
      });
      */

      ///append data
      
      //let cta = $(`input, textarea, button, a, label, p, h1, h2, h3, h4, h5, h6`);
      let cta = $(`input, textarea, button, a, label`);
      
      
      let intent = {};

      if(saved(`intent`)){

      intent = saved(`intent`);

      }
      
      cta.on(`click mouseenter`, function(event) {

        event.preventDefault();

        let outerHTML = $(this).prop(`outerHTML`);

        if(!intent[outerHTML]){

        intent[outerHTML] = {};

        }

        let countElementClass = `click`;
        if(event.type === `mouseenter`){ countElementClass = `hover`; }

        intent[outerHTML][countElementClass] = (intent[outerHTML][countElementClass] || 0) + 1;

        //console.log(`${event.type} event on:`, outerHTML);

        //console.log(intent[outerHTML]);
        
        /*
        
        $(`.console-counter`).remove();

        let counter = ``;

        $.each(intent[outerHTML], function(key, val) {

            counter += `<div class="console-counter console-${key}">${key}: ${val} - ${outerHTML}</div>`;

        });

        findOuterHTML(outerHTML).after(counter);
        
        */

        save(`intent`, intent);

        showIntent(true); //if false wont show markers
        
      });
      
      
      } // If no admin bar

    // CSS
    jQuery(`body`).append(
    `
    <style>
    .element-counter { 
    position: absolute !important;
    transform: translate(-50%, -50%) !important;
    display: block !important;
    background: #eee !important;
    color: #000 !important;
    padding: 8px !important;
    border-radius: 7px !important;
    border: 1px #dddddd solid !important;
    font-size: 14px !important;
    font-weight: 400 !important;
    font-family: monospace !important;
    width: 160px !important;
    margin-left: 0px !important;
    max-width: 160px !important;
    text-align: center !important;
    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.35) !important;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.35) !important;
    -webkit-transition: all 0.2s linear 0.2s !important;
    -o-transition: all 0.2s linear 0.2s !important;
    transition: all 0.2s linear 0.2s !important;
    z-index: 999999 !important;
    opacity: 0.8 !important;
    }
    .element-extra {
    overflow: hidden !important;
    height: 0 !important;
    float: left !important;
    width: 100% !important;
    -webkit-transition: all 0.2s linear 0.2s !important;
    -o-transition: all 0.2s linear 0.2s !important;
    transition: all 0.2s linear 0.2s !important;
    }
    .element-counter:hover > .element-extra {
    height: 60px !important;
    }
    .element-dash {
    padding: 5px 7px !important;
    margin: 0 !important;
    background: white !important;
    color: #000 !important;
    border-radius: 7px !important;
    border: #0000001c 1px solid !important;
    width: calc(50% - 4px) !important;
    float: left !important;
    }
    .element-dash *{
    display: block;
    }
    .element-dash span {
    font-size: 10px;
    }
    .element-counter .element-dash:nth-child(1){
    float: left !important;
    }
    .element-counter .element-dash:nth-child(2){
    float: right !important;
    }
    .element-click { color: red !important; }
    .element-hover { color: green !important; }
    
    .element-counter:hover, 
    .element-counter:focus{
    -webkit-box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22) !important;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22) !important;
    z-index: 9999999 !important;
    opacity: 1 !important;
    }
    .element-counter::before {
    content: '' !important;
    position: absolute !important;
    width: 13px !important;
    height: 13px !important;
    background-color: #efefef !important;
    transform: translate(-50%, -50%) rotate(-45deg) !important;
    top: 0px !important;
    left: 80px !important;
    z-index: -1 !important;
    border-top: 1px #dddddd solid !important;
    border-right: 1px #dddddd solid !important;
    }
    .element-text {
    width: 100% !important;
    margin: 8px 0 0 0 !important;
    height: 50px !important;
    }
    .glow {
    box-shadow: 0 14px 28px rgba(0, 255, 83, 0.6), 0 10px 10px rgba(0, 53, 19, 0.22) !important;
    -webkit-box-shadow: 0 14px 28px rgba(0, 255, 83, 0.6), 0 10px 10px rgba(0, 53, 19, 0.22) !important;
    }
    </style>
    `
    );


        // Main tracking trigger
        
        function sendRecordData() {
                    
            let serverName = `https://via.vision`; // Server Name - replace here
            let restAPI = `wp-json`; 
            // or let restAPI = `api`;
            let nameSpace = `v`; // Namespace from register_rest_route
            let version = `1`; // Version from register_rest_route
            
            let ajaxurl = `${serverName}/${restAPI}/${nameSpace}/${version}/`; // Construct the correct URL
            
            // or let ajaxurl = `${ajax_object.api_url}${nameSpace}/${version}/`; // Construct the correct URL with ajax_object.api_url; // Get API base URL from localized data
            
            var intentData = {
                key: `123`, // Replace with your actual secret key
                sync: JSON.stringify({
                href: window.location.href,
                token: saved(`profile`).token
                }),
                profile: JSON.stringify(saved(`profile`)),
                intent: JSON.stringify(saved(`intent`)),
                type: `insert`
            }
            
            console.log(intentData);
            
            $.ajax({
                type: `POST`,
                url: ajaxurl,
                async: true,
                cache: false,
                dataType: `json`,
                data: intentData,
                // ... other settings ...
                success: function(response) {
                    console.log('Received response:', response);
                    // Now try parsing the response
                },
                error: function(xhr, status, error) {
                    console.log('Failed:', error);
                    // Handle error message here
                }
            });
            
        }
        
        
        if(noAdminBar()) {
        
        // Send data
        if(JSON.stringify(saved(`intent`))) { // Normal page load
            sendRecordData();
        }


        document.addEventListener("mouseleave", function(event){

            if(event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight))
            {
                if (event.pageY - jQuery(window).scrollTop() <= 1)
                { // On page leave
                    console.log('page mouse leave - unload!!!!');
                    sendRecordData();
                }

            }
        });
        
        }



    });

    
    });