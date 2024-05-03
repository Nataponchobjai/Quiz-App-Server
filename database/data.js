export default [
  {
    id: 1,
    question: "What is JSX in React?",
    options: [
      "A syntax extension for JavaScript",
      "A library for managing UI components",
      "A method to pass props in a component",
    ],
  },
  {
    id: 2,
    question: "How can you update the state of a component?",
    options: [
      "this.state = { value: newValue }",
      "this.setState({ value: newValue })",
      "state.value = newValue",
    ],
  },
  {
    id: 3,
    question: "What is a higher-order component in React?",
    options: [
      "A component that returns another component",
      "A function that takes a component and returns a new component",
      "A component that passes its props to its child components",
    ],
  },
  {
    id: 4,
    question: "What is the purpose of keys in React lists?",
    options: [
      "To enhance performance during updates",
      "To uniquely identify elements",
      "Both to enhance performance during updates and to uniquely identify elements",
    ],
  },
  {
    id: 5,
    question:
      "Which lifecycle method is called right before a component is unmounted?",
    options: [
      "componentDidMount()",
      "componentWillUnmount()",
      "componentDidUpdate()",
    ],
  },
  {
    id: 6,
    question: "Which hook is used to manage state in a functional component?",
    options: ["useReducer()", "useState()", "useEffect()"],
  },
  {
    id: 7,
    question: "What does useEffect do in a React component?",
    options: [
      "It synchronizes data to an external source",
      "It handles DOM manipulations",
      "It performs side effects in function components",
    ],
  },
  {
    id: 8,
    question: "How do you pass a prop from parent to child component?",
    options: [
      "<Child prop=value />",
      "<Child {prop=value} />",
      "<Child prop={value} />",
    ],
  },
  {
    id: 9,
    question: "Which method in a React class component is required?",
    options: ["constructor()", "render()", "componentDidMount()"],
  },
  {
    id: 10,
    question: "What is Redux mainly used for?",
    options: [
      "Server-side rendering",
      "State management in JavaScript apps",
      "Data fetching",
    ],
  },
];

export const answers = [0, 1, 1, 2, 1, 1, 2, 2, 1, 1];
