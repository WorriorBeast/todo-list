# todo-list

Todo list to help keep track and organize any projects whether it's personal or work related. The user can edit
the todo project whenever needed. For the important projects that are urgent, the user can select the priority 
option to display the tab in the sidebar as important. All tabs are sorted into two groups. Priority and 
non-priority. Within each group the tabs are organized alphabetically. 

Live Demo: https://worriorbeast.github.io/todo-list/

Objective:
   - Implement the SOLID principles to the best of my ability
   - Practice and refine my ability to create reusable modules
   - Use local storage method to store information into user's device

What I learned:

During the restaurant-page project, I couldn't figure out how to export classes, but while working on the project I
figured out how to export classes. It seems an error was being thrown because I was exporting the class itself
rather than exporting in an explicit object.

This was my first time using the local storage method and JSON to parse and stringify. At first, local storage
was confusing, but once I figured out that local storage only stores string and to store information I had to convert
to string I got the hang of it.

For upcoming projects, I will have to plan out the backend in more detail to make building the page easier. For
example, I knew I would store all the information from the form into an object literal, but what I did not take into
account was that I would have to change the checklist data type from array to object to store the text and whether 
or not a checkbox is checked. This could have been prevented with more thorough planning because from early on I 
knew I wanted to add a feature that updates the checkbox status as user toggles the checkbox. As a result I spent
extra time modifying multiple files to accommodate the new data type.

As a by product from trying to not violate any of the SOLID principles, when I implemented a new feature, modifying
files required very little work and for the most part didn't break the page or other features. The simplicity of
adding and modifying modules made me realize the importance of great clean and organized code.

Images:

Clock alert, delete, and plus icon svg were downloaded from https://pictogrammers.com/library/mdi/ 

Beach by studio4rt:
https://www.freepik.com/free-vector/seaside-vacation-empty-beach-with-umbrella-sun-loungers-hot-sand-traveling-exotic-island-country-tropical-paradise-with-turquoise-ocean-waves-palm-trees_28850038.htm#fromView=search&page=1&position=38&uuid=98bdf98f-5046-4c0c-80cb-ff3c6cb4ecf3
[Seaside vacation empty beach with umbrella sun loungers on hot sand Traveling in exotic island country tropical paradise with turquoise ocean waves and palm trees](src/icons/seaside-vacation-empty-beach.png)