# Standard javascript setTimeout with clearTimeout as returned function

## Motivation

I was tired from saving of timeout ID and when I had more than 2 it was a mess.
The timeout function is very simple and it is using standard setTimeout and clearTimeout at the background.

## Example
```js
import timeout from 'better-timeout';

const clear = timeout(() => {
  console.log('hello');
}, 5000);

clear();
```

It is safe to call clear function multiple times. It will call clearTimeout just once.
