- [ ] Mention two parts of Express that you learned about this week.
<!-- Routing: A way to select which request hanlder function is executed based on the URL visited on the HTTP method used. Just a way to break an application into smaller parts based on route -->

<!-- 
Views: To provide a way to dynmically render HTML on the server and even generate it using other languages. -->




- [ ] Describe Middleware?
<!-- They're functions that extends software. Middleware can monitor requests and do something with the information from the request, and also can stop the request or has the object to do nothing. They're three types of middleware built in, third party, and custom. Can also be used for globally servers. -->




- [ ] Describe a Resource?
<!-- To primary data in the context of an API. It can be a collection like a 'users', or 'post' that are available on the server. -->





- [ ] What can the API return to help clients know if a request was successful?

<!-- When the http status code tell us that the specific http request was successfully completed.  These code are between (200-206) for a successful client request -->



- [ ] How can we partition our application into sub-applications?
<!-- Express routers offer a way to break our app into multiple sub-apps, making it easier to maintain. Each router can have its own middleware -->