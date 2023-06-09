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
## JSX

```jsx
function MyButton() {
  return (<button>I'm a button</button>);
}

const app = document.getElementById('app');
ReactDOM.render(<><h1>Develop. Preview. Ship. 🚀 </h1><MyButton /></>, app);
```

---
<!-- _class: lead -->
## JSX

```jsx
function MyButton() {
  return (<button>I'm a button</button>);
}

const front_color="red"

const app = document.getElementById('app');
ReactDOM.render(<><h1>Develop. Preview. Ship. 🚀 </h1><MyButton /></>, app);
```

---
<!-- _class: lead -->
## React

- React Props
- ReactJS State
- ReactJS Components
- React with Redux
