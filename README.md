# First Storybook

First attempt at using Storybook to build out some React components with tests
Use the components to build the app

## Steps

1. Setup

- Create a component folder in src. Create a new folder in here for each component
- Change config.js to get the stories files from components folder (instead of the automatically created stories folder)

1. Image component:

- It should render an image, given a path
- Create an Image component - needs at least a url and title attribute
- Specify proptypes
- Create accompanying story file with default story
- Add testing with Storyshots and Jest
- Select useful addons

1. Input component with label

- Needs placeholder, name and type attributes
- include an onChange to collect the input

1. Button

- Variations for submit, convert etc

1. Put these components into a basic screen layout and render in the app

- Show an input field
- When you type something in the input and press submit, show an alert.
- Add the image in some way
