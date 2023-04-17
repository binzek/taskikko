# Taskikko - Take Charge of Your Tasks

Taskikko is a minimalist todo management app that allows you to create and check off tasks with ease.

## Usage

- [Visit the app](https://taskikko.wajid.me)
- Type your todo in the given input box and _Enter_ or click the **+** button
- Once you completed the task or if you want to remove a task, just check off the checkbox and it's gone

## Try Locally

- Open terminal, type these commands one by one

  ```
  $ git clone https://github.com/wajid-nv/taskikko.git

  $ cd taskikko

  $ npm install

  $ npm run dev
  ```

- Then visit _https://localhost:5173/_ in your browser

## What I Used

- [React](https://react.dev/)
- [Tailwind](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vite](https://vitejs.dev/)

## What I learned

- I got more familiar with **React base concepts**.
- I got more practiced with **Tailwind CSS** such as _dark mode_, _animations_, etc.
- Working with `localStorage` to store future-needed items such as theme and existing todos.
- I tried to make it minimal and good looking as I can.
- I implemented theme remembering as

  ```js
  // Get <html> from DOM
  const html = document.getElementsByTagName("html")[0];

  // Local variable theme initializing
  localStorage.theme;

  // Adding local theme ('' or 'dark') to classes of <html>
  html.classList = localStorage.theme;

  //Changing the local variable to '' and 'dark', then to class, as user clicks on button
  <DarkModeButton
    onClick={() => {
      if (localStorage.theme === "") {
        localStorage.theme = "dark";
      } else {
        localStorage.theme = "";
      }
      html.classList = localStorage.theme;
    }}
  ></DarkModeButton>;
  ```

- Todos remembering as

  ```js
  // Declaring the toDos array and its state
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    // Storing the empty array to local variable when there is no value
    // This is to prevent errors for new users
    if (!localStorage.toDos) {
      localStorage.toDos = JSON.stringify(toDos);
    }

    // Set the value of local variabel to array on every reload
    setToDos(JSON.parse(localStorage.toDos));
  }, []);

  useEffect(() => {
    // Set the values of array to local variable each time the toDos array changes
    localStorage.toDos = JSON.stringify(toDos);
  }, [toDos]);
  ```

- It was really hard to work with some bugs. But managed to fix them all. Learned a lot of things throughout the development.

## Acknowledgment

- I referred [Colorhunt](https://colorhunt.co) for finding good color combos and uses [Coolors](https://coolors.co) for generating custom color palette
- I got a matching favicon from [Flaticon](https://flaticon.com)

## License

Distributed under the [MIT License](https://opensource.org/license/mit/). See `LICENSE` for more information.
