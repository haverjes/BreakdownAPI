
# What we need done by 3/23
- Develop Customer Screen
  - Simple interface to create and read a service ticket.
  - Focus on those two features.  Everything else can wait.

- Dispatcher Screen
  - Needs to show current tickets.
    - Assign a Driver to a ticket.
    - Add comments to a ticket.

At this stage, there is a ton of room for scope creep.  If you have an idea to fancy things up a bit, go for it.  But avoid focusing on any additional features until these core requirements have been built.  


## How to build
After playing around with code from BootStrap Studio, it became clear that converting that code for React would take too long and provide sub-par results.  So instead of the original plan, lets keep things simple:

- Stick to basic bootstrap components.  Use either: 
  - [ReatStrap](https://reactstrap.github.io/components)
  - [React-Bootstrap](https://react-bootstrap.github.io/components/alerts/)
- Use Bootstrap color standards.  These are demonstrated for Alerts and Buttons from both of the links above.
- For tables, use [React-Bootstrap-Table](https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/about.html)
- Check UserTest.jsx for examples of using the API.
  - For reference, you can find the documentation for the API and models in [our repo](https://github.com/xie-classes/project-team_stovall/tree/feature/newTemplate/Project/API%20Documentation)
  - Contact Jesse for questions or suggestions regarding the API.

## Next Steps
I made a file for the Customer Home page, CustHome.jsx.  It's pretty much empty save for some comments I added to help direct development. The UI described in it is absurdly simple, but it would make for a good starting point. I would appreciate it if you guys could take a look and let me know if this helps and if you have any thoughts on what would make it a better starting point for you.

## Tips
Just some thoughts that might help you out.
- Don't get hung up on JavaScript vs TypeScript vs JSX.  For the most part, it's all JavaScript as far as you're concerned. 
  - TypeScript is just JS with strong types (And we only use it in the API Client)
  - JSX is JS that can handle DOM elements directly while injecting more JS.  It's what our react components return to the browser so it's mostly HTML, though boostrap does translate some of it.
    - Just remember to close all opened tags or the IDE might throw a fit.  (eg. Even an IMG tag should be closed with a trailing '/')
- IDE:  I recommend Visual Studio 2019 (Community edition is free) 
  - I also recommend ReSharper, a plugin from JetBrains that is free to students through the GitHub education pack.
    - It's great for deep syntax highlighting and finding JS errors VS might miss.
  - When building/debugging components, remember that you don't need to restart the instance.  Just make changes to the code, hit save, and the browser will refresh itself.
  - In addition to the IDE, install [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) for your browser (this link is for Chrome).  This helps by making the state of loaded components available for review. 
- When possible, build and use sub-components
  - Eg.  If a page includes more than one table, make them separate components.
  - If you're not sure if you can break something out as another component, go ahead and leave it as is.  It can always be done later.
- Bottom Line:  It doesn't have to look amazing, or even useful.  It just has to work at this point.  We can make it nice later.


## Now the Tough Choices
I know no one wants to focus on the project during break, but as of today we have two weeks before the next presentation where we will be expected to have some functionality to demonstrate. So the choice in front of you is how much stress do you want to work through next week.  

Either this week or next, we will need to assign specific tasks to people.  So do be thinking about where in your schedule you can carve out some time.  
