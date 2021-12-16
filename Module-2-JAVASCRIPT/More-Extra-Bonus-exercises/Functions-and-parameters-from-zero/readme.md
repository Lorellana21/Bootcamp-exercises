# Functions and parameters

## Phases

### Phase 1

Make a function that writes `potato` 10 times in the console, the function will be called `ten()`

### Phase 2

Now I would like to write different words. So, let's modify our `ten()` function to accept a `word` parameter, and we're going to call the function 3 times, passing it a different word each time:

```
ten('Potato`);
ten('Avocado`);
ten('Pizza');
```

### Phase 3

I want more: what if I want to write a different number of times each time? When I call my function in these ways it would write the words the number of times I wish:

```
ten('potato', 10);
ten('avocado', 7);
ten('Pizza', 50);
```
Once this is done, we will rename the function `ten` to `writeThis`;

### Phase 4

Now we have seen that we can pass raw data to a function through the parameters. We could also pass this data if we already have them stored in constants and even functions that return data!!!!

How crazy! Let's rescue our beloved `getRandomNumber()` from the intermediate evaluation exercise, for those who don't remember it was something like this:

```
function getRandomNumber(max) {
return Math.ceil(Math.random() \* max);
}
```

This function would generate a random number from 0 to the number we pass as a parameter.

What would we have to write in our `writeThis` function to make it write the words we pass it a random number of times from 0 to 10?

Hint:

```
writeThis('potato',?);
writeThis('avocado'?);
writeThis('pizza',?);
```

### Phase 5

Now we have a little more control over the invention and it seems that we can control different results of functions according to the values we pass to their parameters...

Someone noticed that we are writing the words we want and said: Hey, I don't have one or two words, but I have a list of words and numbers. Could you write it for me?

The list is as follows:

```
const myWordList = [
{
text: 'Pencil',
total: 6
},
{
text: 'Thermo',
total: 2
},
{
text: 'TV',
total: 8
},
{
text: 'Phone',
total: 4
}
];
```

To do this we will create a new function `writeMyArray` that will accept an array as a parameter, run through it and write each word the specified number of times using our `writeThis` function.

### Phase 6

Now that we have achieved that, a colleague appears and tells us: hey, if you can do that, I have an API that returns something very similar, I could pass you the url so that instead of pulling an array put in fire and brimstone in the code, we could pull the data returned by a server. ok?

URL: [https://beta.adalab.es/ejercicios-extra/js-funciones-y-parametros-desde-cero/data.json](https://beta.adalab.es/ejercicios-extra/js-funciones-y-parametros-desde-cero/data.json)

For this we need to know how to use [fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
