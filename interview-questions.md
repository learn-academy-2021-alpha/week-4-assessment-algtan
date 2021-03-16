# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What is an instance variable in Ruby? How is it different from other variables?

  Your answer:
  An instance variable in Ruby is a variable within a class that can be used to store information.

  Researched answer:
  In Ruby, an instance variable is distinguished with the '@' symbol placed at the beginning. The instance variable is locally scoped to the object (instance of a class), meaning it is only accessible within that object.


2. What is a block in Ruby?

  Your answer:
  A block in Ruby is a method of running code multiple times, or iterating through an enumerable to something with its values and/or indices.

  Researched answer:
  In Ruby, blocks are anonymous functions (functions without names) that are passed to a method.


3. Ruby has an implicit return. What does that mean?

  Your answer:
  The last line in a method will be what is returned without having to explicitly put a "return" statement in the method.

  Researched answer:
  For a method, Ruby will return the value of the last evaluated expression without having to use the keyword "return."


4. What is object-oriented programming? How is it different than functional programming?

  Your answer:
  Object-oriented programming (OOP) is a way of programming, in which objects serve as the basis for how information is managed.

  Researched answer:
  Object-oriented programming is a way of programming, in which objects serve as the basis for the code. Objects can be thought of as containers for data and methods, and these containers can be changed without affecting the rest of the code. Functional programming on the other hand uses functions to build software, avoiding shared state and mutable data.


5. What is the difference between a class and an object?

  Your answer:
  A class is the blueprint for an object, whereas an object is an instance of a class.

  Researched answer:
  Classes are specific functions used as a template for the creation of objects. A class will define the object (a.k.a. instance) properties and behavior (methods). Classes are reusable similar to functions, whereas an object would be similar to a variable of the class.


6. STRETCH: What is `attr_accessor`?

  Your answer:
  The `attr_accessor` is a way of creating getters and setters for instance variables in Ruby.

  Researched answer:
  The attribute accessor `attr_accessor` allows instance variables to be accessible to be changed or returned without having to create setter and getter methods inside a class.


## Looking Ahead: Terms for Next Week
- MVC: acronym for model-view-controller. The MVC is a software design pattern used to distinguish the code into different sections that serve different purposes. This includes how data is maintained, how the user interface looks like, and how everything functions together.
- PostgreSQL: one type of Structured Query Languages (SQL), which is used to work with relational databases. PostgreSQL works with databases with an objected-oriented approach.
- API: acronym for Application Programming Interface and it serves as a software intermediary that allows two applications to talk to each other. This facilitates actions such as the sending/receiving of data.
- CRUD: acronym for Create, Read, Update, Delete. These functions are necessary when it comes to persistent data (data that sticks around long term).
- Ruby on Rails: a Ruby framework for web applications, which provides structure for databases, web services, and web pages.
- ORM: acronym for Object-Relational Mapping, which is a technique that allows one to work in a database with an object-oriented approach.
- Active Record: a Rails ORM that takes data from a database and allows one to treat that data like a Ruby object.
