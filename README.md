![Logo](https://user-images.githubusercontent.com/72107589/149128610-e2e79c72-2df6-4315-b632-1a71c5ef84f4.png)

ReactLightModal is a modal library, built in typescript light and accessible. It's goal is to provide easy, flexible, configurable and accessible way to display modals for your application.

## Documentation

[See our Storybook Documentation](https://reactlightmodal.dame.vin)

## Authors

- [@raphaeldamevin](https://www.github.com/damevin)

## Installation

Install ReactLightModal with npm

```bash
npm install @damevin/reactlightmodal
```

Install ReactLightModal with yarn

```bash
yarn add @damevin/reactlightmodal
```

## Usage/Examples

```javascript
import Modal from '@damevin/reactlightmodal';
import React, {useState} from "react;

const [modal, setModal] = useState(false);

const toggleModal = () => {
    setModal(!modal)
}

function App() {
  return (
      <Modal />
  )
}
```

## Props

| Name            | Type          | Required | Description                                                              | Default value     |
| --------------- | ------------- | -------- | ------------------------------------------------------------------------ | ----------------- |
| canClose        | `boolean`     | `false`  | Display cross button on the top-right of the modal box                   | `true`            |
| closeBtnContent | `JSX.element` | `false`  | Custom content add on the close button (exemple: personalized icon, ...) | `{<span>X</span}` |
| footerContent   | `JSX.element` | `false`  | Custom content to add to the footer (exemple: action buttons, ...)       | `{}`              |
| haveFooter      | `boolean`     | `false`  | If his value is true, the modal have footer element                      | `false`           |
| isOpen          | `boolean`     | `true`   | If his value is true, the modal is displayed                             | `false`           |
| modalContent    | `JSX.element` | `true`   | Content of the modal                                                     | `{}`              |
| title           | `string`      | `false`  | Modal header title                                                       | `""`              |

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.
