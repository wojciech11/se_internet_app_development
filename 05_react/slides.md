---
marp: true
theme: gaia
color: #000
colorSecondary: #333
backgroundColor: #fff
style: |
    section.lead h1 {
    text-align: center;
    }

---
<!-- _class: lead -->
# Programowanie App Internetowych

React

![width:300px](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)

---
<!-- _class: lead -->
## React

Benefits:

- JSX - JSX is a syntax extension to JavaScript with react;
- Virtual Document Object Model (DOM)
- Performance - There are several ways to speed up the react application by using virtual DOM because it reduces the re-render time;
- One-way data-binding - Information flows in one direction.

---
<!-- _class: lead -->
## JSX

From [react.dev](https://react.dev):

```jsx
function MyButton() {
  return (
    <button>I'm a button</button>
  );
```

---
<!-- _class: lead -->
## Components

```jsx
function MyButton() {
  return (<button>I'm a button</button>);
}

const app = document.getElementById('app');
ReactDOM.render(<><h1>Develop. Preview. Ship. 🚀 </h1><MyButton /></>, app);
```

---
<!-- _class: lead -->
## props

```jsx
function MyButton(props) {
  return (<button>I'm a {props.what}</button>);
}

ReactDOM.render(<MyButton what="Login Button" />, app);
```

---
<!-- _class: lead -->
## JSX - styling

```jsx
function MyButton() {
  return (<button>I'm a button</button>);
}

var front_color = 'red'

const app = document.getElementById('app');
ReactDOM.render(<>
  <h1 style={{color: front_color }}>Develop. Preview. Ship. 🚀 </h1>
  <MyButton />
</>, app);
```

---
<!-- _class: lead -->
## Responding to events

```jsx
function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```

---
<!-- _class: lead -->
## State

```jsx
function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
```

`useState` -  built-in Hook

---
<!-- _class: lead -->
## State

How would you implement sharing the data between state between components?

---
<!-- _class: lead -->
## Hooks

- see [API reference on built-in React Hooks](https://react.dev/reference/react),
- notice: reducer pattern.

---
<!-- _class: lead -->
## React

- Redux - predictable state container for JS Apps;
- [React with Redux](React Redux).

---
<!-- _class: lead -->
## Dziękuję
