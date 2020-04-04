# Basic-Portfolio
basic portfolio using HTML and CSS (HW week 1)

## What is this repo?

This is a basic personal portfolio used to introduce myself and showcase my work with web development.

### Link to Live-pages

https://bauter.github.io/Basic-Portfolio/

## How was this project created?

-Coding was done using Visual Studio Code ("https://code.visualstudio.com/") a text editor can be downloaded from their website.

-The styling for this project was done using basic CSS styling.

## Where to start ##

-Start by creating three html files:

    -index.html

    -portfolio.html

    -contact.html

-Then create an 'assets' directory, inside create two additional directories:

    -css

    -images/img

-Inside the 'css' directory add your css file:

    -style.css

-Inside the 'images/img' directory, store your images you plan to use.

### Whats in each file?

#### 'index.html'

-Index.html is going to be the 'home' page. Here include:

    -A header with NAME and nav links (to other html files).

    -A  Main-Container, used to display personal picture and a briek 'About Me' section.

    -A footer 

##### NOTE
-This is the main layout for each html page as well (besides what each section contains).

#### 'portfolio.html'

-Portfolio.html is going to be the page dedicated to listing the projects, include:

    -A header with NAME and nav links (to other html files).

    -A Main-Container, used to hold images representing each project with links to each.

    -A footer

#### 'contact.html'

-Contact.html is the page with a contact form (email), include:
    
    -A header with NAME and nav links (to other html files).

    -A Main-Container, used to hold a form with three inputs (Name, email, and message).

    -A footer

##### NOTE
-A javascript file will need to be added to add functionality to this contact form (event listener for submit button and add. code to make the form function).

### BONUS

-Create a 'JS' directory inside the 'assets' directory, inside include:

    -'app.js' file to write the javascript code.

##### NOTE

-Make use of JQUERY library by linking this CDN into the head tags of the 'contact.html' file.

-link:
```
   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

```

be sure to link the JS file inside the head tags of 'contact.html' as well.

-example:
```
 <script src="assets/js/app.js"></script>


```

#### 'app.js'

-Start by creating an event listener for the submit button, then assign the id's of each form input to a variable, and use those variables to create form validation.

```
$(document).ready(function(){

    // Event listener for submit button
    $("#submit").on('click', function() {
       //define the input ids to variables
       let name = $("#fullName");
       let email = $('#email');
       let message = $('#message');

        //Use an 'if' statement for form validation
        if (name.val() === '' || email.val() === '' || message.val() === '' ) {
            // Alert the user not all fields have value
            alert("Please fill out the form");
        } else {
            // Alert the user the message was successfully sent
            alert("Submission successful, thanks for reaching out!");
            
        }
    });

});

```

##### NOTE

-To save time and avoid writing add. code for your form, visit "https://formspree.io".

#### Guidelines for Collaboration

-As I am still new to coding, and my initial projects will be used to create a portfolio to show to potential employers, i ask that no modifications are made at this time.

**However**

 -Any input to improve my coding would be GREATLY appreciated. I am not opposed to the files being pulled for the sake of modifying and using as an example to teach/explain alt. methods, better practice, etc. Again I would ask they not be pushed to the repo to modify the initial document, but instead be sent to me an some alt. way.

 --Thank you for taking the time to look over this 'README' file--