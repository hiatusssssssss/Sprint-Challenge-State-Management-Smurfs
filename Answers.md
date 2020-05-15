1. What problem does the context API help solve?
prop drilling
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions are functions that i can seperate and call at any time that calls for a state change, state changes come from the reducer and keeps all state that trigger upon actions and store is our global store of all state

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
storing globally vs within the component, usually dpends on the size of the project. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
gives us access to async actions

1. What is your favorite state management system you've learned and this sprint? Please explain why!
redux. i have no idea why
