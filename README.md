# Via Vision Tracker
<p>Tracking all user activities &amp; stored via an object, and ability to simply call all this into one function vision()</p>

<p>The code is primarily used for tracking website visits and user interactions.</p>

<p>Simply call vision() to show all objects of that user activities. *The data tracking begins before calling vision(), it begins on page load.</p>

<div class="markdown prose w-full break-words dark:prose-invert light">

This is a complex data structure that contains various properties and nested objects. Here is a detailed explanation of each property and object:
<ul>
 	<li><code>get</code>: This is an object that contains key-value pairs of the GET parameters passed in the URL.</li>
 	<li><code>page</code>: This is an object that contains information about the current page being viewed. It has properties such as:
<ul>
 	<li><code>domain</code>: The domain of the current page.</li>
 	<li><code>number</code>: The number of the current page.</li>
 	<li><code>dir</code>: The full URL of the current page.</li>
 	<li><code>breadcrumb</code>: An array of URLs of all the pages that the user has visited in their current session.</li>
 	<li><code>trace</code>: A string representation of the user's navigation path through the website, constructed from the <code>breadcrumb</code> array.</li>
 	<li><code>size</code>: The dimensions of the current page.</li>
 	<li><code>referrer</code>: The URL of the page that the user came from to reach the current page.</li>
</ul>
</li>
 	<li><code>interest</code>: This is an object that contains information about the user's interests on the current page. It has properties such as:
<ul>
 	<li><code>title</code>: An array of all the titles of the elements on the page that the user has shown an interest in.</li>
 	<li><code>read</code>: An array of all the elements on the page that the user has read.</li>
 	<li><code>select</code>: An array of all the elements on the page that the user has selected.</li>
</ul>
</li>
 	<li><code>cta</code>: An array of all the calls-to-action elements on the page that the user has shown an interest in.</li>
 	<li><code>form</code>: An array of all the forms on the page that the user has shown an interest in.
<ul>
 	<li><code>action</code>: The action of the form</li>
</ul>
</li>
 	<li><code>timeframe</code>: The time in seconds that the user has spent on the current page.</li>
 	<li><code>datetime</code>: The date and time when the data was collected.</li>
 	<li><code>token</code>: A token that uniquely identifies the user.</li>
 	<li><code>lead</code>: A lead that uniquely identifies the user.</li>
</ul>
In summary, this data structure contains information about the user's browsing session, including the pages they have visited, the elements they have shown interest in, the forms they have interacted with, and their time spent on the current page.

</div>
<br>
<p>Example of object array:</p>
<pre>
{
    "get": {
        "productId": "101",
        "category": "electronics"
    },
    "page": {
        "domain": "www.demostore.com",
        "number": "3",
        "dir": "https://www.demostore.com/product.html?productId=101&category=electronics",
        "breadcrumb": [
            "/home.html",
            "/category.html?category=electronics",
            "/product.html?productId=101&category=electronics"
        ],
        "trace": "/home.html > /category.html > /product.html",
        "size": "1200 x 700",
        "referrer": "https://www.demostore.com/category.html?category=electronics"
    },
    "interest": {
        "title": [
            "Samsung Galaxy S21 Ultra 5G",
            "Features",
            "Specifications",
            "Reviews",
            "Buy Now"
        ],
        "read": [
            "Features",
            "Specifications",
            "Reviews"
        ],
        "select": [
            "Buy Now"
        ]
    },
    "cta": [
        {
            "href": "https://www.demostore.com/checkout.html",
            "class": "btn-primary",
            "id": "buy-now-btn"
        }
    ],
    "form": [
        {
            "title": "Leave a review",
            "action": "https://www.demostore.com/submitreview.php",
            "type": "post",
            "inputs": [
                {
                    "name": "name",
                    "type": "text",
                    "placeholder": "Enter your name"
                },
                {
                    "name": "review",
                    "type": "textarea",
                    "placeholder": "Enter your review"
                }
            ],
            "submit": "Submit Review"
        }
    ],
    "timeframe": 180,
    "datetime": "2022-12-01 12:00:00",
    "token": "2022120112000000ABCD",
    "lead": "2022120112000000XYZ"
}

</pre>

<p>In this example, the <code>data</code> object contains various properties and nested objects:</p>
<ul><li><code>get</code>: an object that contains the product Id and category of the product the user is currently viewing</li><li><code>page</code>: an object that contains information about the current page being viewed such as domain, number, the full URL of the current page, an array of URLs of all the pages that the user has visited in their current session, trace of user's navigation, size and referrer</li><li><code>interest</code>: an object that contains information about the user's interests on the current page. It has properties such as: title, read and select</li><li><code>cta</code>: an array of call-to-action elements on the page that the user has shown an interest in, with nested element attributes such as href, class and id</li><li><code>form</code>: an array of all the forms on the page that the user has shown an interest in, with nested element</li></ul>
