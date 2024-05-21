export default interface HookInterface {
  readonly id?: number;
  readonly title: String;
  readonly description: string;
  readonly example: string;
  readonly reference: string[];
  readonly usage: string[];
  readonly troubleshooting: string[];
}

export const emptyHook: HookInterface = {
  id: 0,
  title: "",
  description: "",
  example: "",
  reference: [],
  usage: [],
  troubleshooting: [],
};

export const populatedHooks: HookInterface[] = [
  {
    id: 1,
    title: "useActionState",
    description:
      "useActionState is a Hook that allows you to update state based on the result of a form action.",
    example:
      "const [state, formAction] = useActionState(fn, initialState, permalink?);",
    reference: ["useActionState(action, initialState, permalink?)"],
    usage: ["Using information returned by a form action"],
    troubleshooting: ["My action can no longer read the submitted form data"],
  },
  {
    id: 2,
    title: "useCallback",
    description:
      "useCallback is a React Hook that lets you cache a function definition between re-renders.",
    example: "const cachedFn = useCallback(fn, dependencies)",
    reference: ["useCallback(fn, dependencies)"],
    usage: [
      "Skipping re-rendering of components",
      "Updating state from a memoized callback",
      "Preventing an Effect from firing too often",
      "Optimizing a custom Hook",
    ],
    troubleshooting: [
      "Every time my component renders, useCallback returns a different function",
      "I need to call useCallback for each list item in a loop, but it’s not allowed",
    ],
  },

  {
    id: 3,
    title: "useContext",
    description:
      "useContext is a React Hook that lets you read and subscribe to context from your component.",
    example: "const value = useContext(SomeContext)",
    reference: ["useContext(SomeContext)"],
    usage: [
      "Passing data deeply into the tree",
      "Updating data passed via context",
      "Specifying a fallback default value",
      "Overriding context for a part of the tree",
      "Optimizing re-renders when passing objects and functions",
    ],
    troubleshooting: [
      "My component doesn’t see the value from my provider",
      "I am always getting undefined from my context although the default value is different",
    ],
  },
  {
    id: 4,
    title: "useDebugValue",
    description:
      "useDebugValue is a React Hook that lets you add a label to a custom Hook in React DevTools",
    example: "useDebugValue(value, format?)",
    reference: ["useDebugValue(value, format?)"],
    usage: [
      "Adding a label to a custom Hook",
      "Deferring formatting of a debug value",
    ],
    troubleshooting: [],
  },
  {
    id: 5,
    title: "useDeferredValue",
    description:
      "useDeferredValue is a React Hook that lets you defer updating a part of the UI",
    example: "const deferredValue = useDeferredValue(value)",
    reference: ["useDeferredValue(value, initialValue?)"],
    usage: [
      "Showing stale content while fresh content is loading",
      "Indicating that the content is stale",
      "Deferring re-rendering for a part of the UI",
    ],
    troubleshooting: [],
  },
  {
    id: 6,
    title: "useEffect",
    description:
      "useEffect is a React Hook that lets you synchronize a component with an external system.",
    example: "useEffect(setup, dependencies?)",
    reference: ["useEffect(setup, dependencies?)"],
    usage: [
      "Connecting to an external system",
      "Wrapping Effects in custom Hooks",
      "Controlling a non-React widget",
      "Fetching data with Effects",
      "Specifying reactive dependencies",
      "Updating state based on previous state from an Effect",
      "Removing unnecessary object dependencies",
      "Removing unnecessary function dependencies",
      "Reading the latest props and state from an Effect",
      "Displaying different content on the server and the client",
    ],
    troubleshooting: [
      "My Effect runs twice when the component mounts",
      "My Effect runs after every re-render",
      "My Effect keeps re-running in an infinite cycle",
      "My cleanup logic runs even though my component didn’t unmount",
      "My Effect does something visual, and I see a flicker before it runs",
    ],
  },
  {
    id: 7,
    title: "useId",
    description:
      "useId is a React Hook for generating unique IDs that can be passed to accessibility attributes",
    example: "const id = useId()",
    reference: ["useId()"],
    usage: [
      "Generating unique IDs for accessibility attributes",
      "Generating IDs for several related elements",
      "Specifying a shared prefix for all generated IDs",
      "Using the same ID prefix on the client and the server",
    ],
    troubleshooting: [],
  },
  {
    id: 8,
    title: "useImperativeHandle",
    description:
      "useImperativeHandle is a React Hook that lets you customize the handle exposed as a ref.",
    example: "useImperativeHandle(ref, createHandle, dependencies?)",
    reference: ["useImperativeHandle(ref, createHandle, dependencies?)"],
    usage: [
      "Exposing a custom ref handle to the parent component",
      "Exposing your own imperative methods",
    ],
    troubleshooting: [],
  },

  {
    id: 9,
    title: "useInsertionEffect",
    description:
      "useInsertionEffect allows inserting elements into the DOM before any layout Effects fire.",
    example: "useInsertionEffect(setup, dependencies?)",
    reference: ["useInsertionEffect(setup, dependencies?)"],
    usage: ["Injecting dynamic styles from CSS-in-JS libraries"],
    troubleshooting: [],
  },

  {
    id: 10,
    title: "useLayoutEffect",
    description:
      "useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.",
    example: "useLayoutEffect(setup, dependencies?)",
    reference: ["useLayoutEffect(setup, dependencies?)"],
    usage: ["Measuring layout before the browser repaints the screen"],
    troubleshooting: [
      "I’m getting an error: “useLayoutEffect does nothing on the server”",
    ],
  },
  {
    id: 11,
    title: "useMemo",
    description:
      "useMemo is a React Hook that lets you cache the result of a calculation between re-renders.",
    example: "const cachedValue = useMemo(calculateValue, dependencies)",
    reference: ["useMemo(calculateValue, dependencies)"],
    usage: [
      "Skipping expensive recalculations",
      "Skipping re-rendering of components",
      "Memoizing a dependency of another Hook",
      "Memoizing a function",
    ],
    troubleshooting: [
      "My calculation runs twice on every re-render",
      "My useMemo call is supposed to return an object, but returns undefined",
      "Every time my component renders, the calculation in useMemo re-runs",
      "I need to call useMemo for each list item in a loop, but it’s not allowed",
    ],
  },
  {
    id: 12,
    title: "useOptimistic",
    description:
      "useOptimistic is a React Hook that lets you optimistically update the UI.",
    example:
      "const [optimisticState, addOptimistic] = useOptimistic(state, updateFn);",
    reference: ["useOptimistic(state, updateFn)"],
    usage: ["Optimistically updating forms"],
    troubleshooting: [],
  },
  {
    id: 13,
    title: "useReducer",
    description:
      "useReducer is a React Hook that lets you add a reducer to your component.",
    example: "const [state, dispatch] = useReducer(reducer, initialArg, init?)",
    reference: ["useReducer(reducer, initialArg, init?)", "dispatch function"],
    usage: [
      "Adding a reducer to a component",
      "Writing the reducer function",
      "Avoiding recreating the initial state",
    ],
    troubleshooting: [
      "I’ve dispatched an action, but logging gives me the old state value",
      "I’ve dispatched an action, but the screen doesn’t update",
      "A part of my reducer state becomes undefined after dispatching",
      "My entire reducer state becomes undefined after dispatching",
      "I’m getting an error: “Too many re-renders”",
      "My reducer or initializer function runs twice",
    ],
  },
  {
    id: 14,
    title: "useRef",
    description:
      "useRef is a React Hook that lets you reference a value that’s not needed for rendering.",
    example: "const ref = useRef(initialValue)",
    reference: ["useRef(initialValue)"],
    usage: [
      "Referencing a value with a ref",
      "Manipulating the DOM with a ref",
      "Avoiding recreating the ref contents",
    ],
    troubleshooting: ["I can’t get a ref to a custom component"],
  },
  {
    id: 15,
    title: "useState",
    description:
      "useState is a React Hook that lets you add a state variable to your component.",
    example: "const [state, setState] = useState(initialState)",
    reference: [
      "useState(initialState)",
      "set functions, like setSomething(nextState)",
    ],
    usage: [
      "Adding state to a component",
      "Updating state based on the previous state",
      "Updating objects and arrays in state",
      "Avoiding recreating the initial state",
      "Resetting state with a key",
      "Storing information from previous renders",
    ],
    troubleshooting: [
      "I’ve updated the state, but logging gives me the old value",
      "I’ve updated the state, but the screen doesn’t update",
      "I’m getting an error: “Too many re-renders”",
      "My initializer or updater function runs twice",
      "I’m trying to set state to a function, but it gets called instead",
    ],
  },
  {
    id: 16,
    title: "useSyncExternalStore",
    description:
      "useSyncExternalStore is a React Hook that lets you subscribe to an external store.",
    example:
      "const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)",
    reference: [
      "useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)",
    ],
    usage: [
      "Subscribing to an external store",
      "Subscribing to a browser API",
      "Extracting the logic to a custom Hook",
      "Adding support for server rendering",
    ],
    troubleshooting: [
      "I’m getting an error: “The result of getSnapshot should be cached”",
      "My subscribe function gets called after every re-render",
    ],
  },
  {
    id: 17,
    title: "useTransition",
    description:
      "useTransition is a React Hook that lets you update the state without blocking the UI.",
    example: "const [isPending, startTransition] = useTransition()",
    reference: ["useTransition()", "startTransition function"],
    usage: [
      "Marking a state update as a non-blocking Transition",
      "Updating the parent component in a Transition",
      "Displaying a pending visual state during the Transition",
      "Preventing unwanted loading indicators",
      "Building a Suspense-enabled router",
      "Displaying an error to users with an error boundary",
    ],
    troubleshooting: [
      "Updating an input in a Transition doesn’t work",
      "React doesn’t treat my state update as a Transition",
      "I want to call useTransition from outside a component",
      "The function I pass to startTransition executes immediately",
    ],
  },
];
