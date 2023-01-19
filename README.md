# Preact-easy-title

Easy title for [Preact](https://github.com/preactjs/preact).

## Installation

```
npm i preact-easy-title
```

## Example

```jsx
import Title from "preact-easy-title";

const websiteName = "Preact";

export function MainPage() {
  return (
    <div>
      <Title>{ websiteName }</Title>
    </div>
  );
}
export function AboutPage() {
  return (
    <div>
      <Title>{ "About | " + websiteName }</Title>
    </div>
  );
}
export function ContactPage() {
  return (
    <div>
      <Title>Contact | { websiteName }</Title>
    </div>
  );
}
```

## License

MIT
