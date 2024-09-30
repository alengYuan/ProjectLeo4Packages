# Tickerjs @ProjectLeo &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue)](https://github.com/alengYuan/ProjectLeo4Packages/blob/main/npm-tickerjs/LICENSE) [![npm version](https://img.shields.io/npm/v/@projectleo/tickerjs)](https://www.npmjs.com/package/@projectleo/tickerjs) ![npm type definitions](https://img.shields.io/npm/types/%40projectleo%2Ftickerjs) [![bundle size](https://img.shields.io/badge/bundle%20size-3.37%20kB-brightgreen)](https://www.unpkg.com/@projectleo/tickerjs)

Tickerjs provides a more easier way to request animation frames.

## Installation

```shell
npm install @projectleo/tickerjs
```

## Examples

Basic example:

```javascript
import { requestAnimationFrames } from '@projectleo/tickerjs'

const cancelAnimationFrames = requestAnimationFrames({
    actionOnFrame() {
        console.log(performance.now())
    },
})

setTimeout(cancelAnimationFrames, 5000)
```

Complicated example:

```javascript
import {
    twentyFour,
    thirty,
    requestAnimationFrames,
    getStructuredTime,
} from '@projectleo/tickerjs'

/* some code */

const { minute: totalMinutes, second: totalSeconds } = getStructuredTime(
    thirty.second,
    'minute',
)

requestAnimationFrames({
    totalTime: thirty.second,
    frameRate: twentyFour.fps,
    actionOnStart() {
        audioElement.play()
    },
    actionOnFrame({ remainingTime, frameCount }) {
        /* some code */

        const { minute: remainingMinutes, second: remainingSeconds } =
            getStructuredTime(remainingTime, 'minute')

        ctx.drawImage(imageFrames[frameCount], 0, 0)
        ctx.fillText(
            `${remainingMinutes}:${remainingSeconds} / ${totalMinutes}:${totalSeconds}`,
            4,
            20,
        )

        /* some code */
    },
    actionOnEnd() {
        audioElement.pause()
    },
})
```

## APIs

### Core function

```typescript
/**
 * @throws {RangeError} `NaN`, `0`, negative numbers and non-integers are not valid for `totalTime` and `frameRate`.
 * @throws {RangeError} `Infinity` is not valid for `frameRate`.
 */
const requestAnimationFrames: (args: {
    totalTime?:⁰ number;
    frameRate?:¹ number;
    actionOnStart?:² () => void;
    actionOnFrame:³ (args: {
        remainingTime:⁴ number;
        frameCount:⁵ number;
        time:⁶ number;
    }) =>⁷ void | {
        continueHandleFrames: boolean;
    };
    actionOnEnd?:⁸ () => void;
}) =>⁹ (never | (() => void));
```

-   ⁰ [`totalTime`]: Total time of animation, in milliseconds, if it is not specified, its value is `Infinity`.
-   ¹ [`frameRate`]: Frame rate of animation, if it is not specified, the value of it is usually 60 (fps), but will generally match the display refresh rate in most web browsers as per W3C recommendation.
-   ² [`actionOnStart`]: Called when the animation starts.
-   ³ [`actionOnFrame`]: Called at every valid frames, it means that not every logical frames could call it if the specified frame rate is higher than display refresh rate.
-   ⁴ [`remainingTime`]: Remaining time of animation, in milliseconds.
-   ⁵ [`frameCount`]: Frame counts calculated from one, it doesn't always increase one by one if the specified frame rate is higher than display refresh rate.
-   ⁶ [`time`]: Same as the parameter of callback for `requestAnimationFrame`.
-   ⁷ [`actionOnFrame()`]: It could return a value to end the animation in advance, and `actionOnEnd` would be called.
-   ⁸ [`actionOnEnd`]: Called when the animation ends.
-   ⁹ [`requestAnimationFrames()`]: It would return a function used to cancel remaining animation frames, if use this function, `actionOnEnd` would not be called.

### Configuration function

You may use polyfill if you need your application to run in any runtime that doesn't support `requestAnimationFrame()` and `cancelAnimationFrame()`. Tickerjs provides a function to help you to let them work with `requestAnimationFrames()` without affecting the global variable.

```typescript
const specifyAnimationFrameManager: (args: {
    requestAnimationFrame:⁰ (callback: (time: number) => void) => number;
    cancelAnimationFrame:¹ (handle: number) => void;
}) => void;
```

-   ⁰ [`requestAnimationFrame`]: [🔗 Description on MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame).
-   ¹ [`cancelAnimationFrame`]: [🔗 Description on MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/cancelAnimationFrame).

### Utility function

```typescript
type StructuredTimeWithDayUnit = {
    day: number;
    hour: number;
    minute: number;
    second: number;
    millisecond: number;
};

type StructuredTimeWithHourUnit = {
    hour: number;
    minute: number;
    second: number;
    millisecond: number;
};

type StructuredTimeWithMinuteUnit = {
    minute: number;
    second: number;
    millisecond: number;
};

type StructuredTimes = {
    day: StructuredTimeWithDayUnit;
    hour: StructuredTimeWithHourUnit;
    minute: StructuredTimeWithMinuteUnit;
};

const getStructuredTime:
    <T extends keyof StructuredTimes>(totalMilliseconds:⁰ number, highestUnit:¹ T) =>²
    StructuredTimes[T];
```

-   ⁰ [`totalMilliseconds`]: Total time to be structured, in milliseconds.
-   ¹ [`highestUnit`]: The highest unit to be used when structuring time, you can only choose one from `'day'`, `'hour'` and `'minute'`.
-   ² [`getStructuredTime()`]: It would return an object that contains structured time fields, fields are based on specified `highestUnit`.

Tickerjs provides a series of commonly used numerical constants:

|Number|Object|Property|Property|Property|Property|Property|Property|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|**1**|**one**|*millisecond*|*second*|***minute***|***hour***|***day***|***fps***|
|**2**|**two**|*millisecond*|*second*|***minute***|***hour***|***day***|*fps*|
|**3**|**three**|*millisecond*|***second***|***minute***|***hour***|***day***|*fps*|
|**5**|**five**|*millisecond*|***second***|***minute***|*hour*|*day*|*fps*|
|**7**|**seven**|*millisecond*|*second*|*minute*|*hour*|***day***|*fps*|
|**10**|**ten**|*millisecond*|***second***|***minute***|*hour*|*day*|*fps*|
|**12**|**twelve**|*millisecond*|*second*|*minute*|***hour***|*day*|*fps*|
|**14**|**fourteen**|*millisecond*|*second*|*minute*|*hour*|***day***|*fps*|
|**15**|**fifteen**|*millisecond*|***second***|***minute***|*hour*|***day***|*fps*|
|**20**|**twenty**|*millisecond*|***second***|***minute***|*hour*|*day*|*fps*|
|**21**|**twentyOne**|*millisecond*|*second*|*minute*|*hour*|***day***|*fps*|
|**24**|**twentyFour**|*millisecond*|*second*|*minute*|*hour*|*day*|***fps***|
|**25**|**twentyFive**|*millisecond*|*second*|*minute*|*hour*|*day*|***fps***|
|**28**|**twentyEight**|*millisecond*|*second*|*minute*|*hour*|***day***|*fps*|
|**29**|**twentyNine**|*millisecond*|*second*|*minute*|*hour*|***day***|*fps*|
|**30**|**thirty**|*millisecond*|***second***|***minute***|*hour*|***day***|***fps***|
|**31**|**thirtyOne**|*millisecond*|*second*|*minute*|*hour*|***day***|*fps*|
|**45**|**fortyFive**|*millisecond*|***second***|***minute***|*hour*|*day*|*fps*|
|**48**|**fortyEight**|*millisecond*|*second*|*minute*|*hour*|*day*|***fps***|
|**50**|**fifty**|*millisecond*|*second*|*minute*|*hour*|*day*|***fps***|
|**60**|**sixty**|*millisecond*|*second*|*minute*|*hour*|*day*|***fps***|
|**90**|**ninety**|*millisecond*|***second***|***minute***|*hour*|*day*|***fps***|
|**120**|**oneHundredTwenty**|*millisecond*|*second*|*minute*|*hour*|*day*|***fps***|
|**144**|**oneHundredFortyFour**|*millisecond*|*second*|*minute*|*hour*|*day*|***fps***|
|**240**|**twoHundredForty**|*millisecond*|*second*|*minute*|*hour*|*day*|***fps***|
|**300**|**threeHundred**|*millisecond*|*second*|*minute*|*hour*|*day*|***fps***|
|**360**|**threeHundredSixty**|*millisecond*|*second*|*minute*|*hour*|*day*|***fps***|
|**500**|**fiveHundred**|*millisecond*|*second*|*minute*|*hour*|*day*|***fps***|

If you need other specific values for `totalTime` of `requestAnimationFrames`, these functions would be useful:

```typescript
const second: (second: number) => number;
const minute: (minute: number) => number;
const hour: (hour: number) => number;
const day: (day: number) => number;
```

## Troubleshooting

> ### ⚠️ After I unpacking values from time numbers, some strange errors are thrown.

Time numbers are proxy values, not pure objects, don't use destructuring assignment syntax on them.

> ### ⚠️ Animation sometimes would end before reaching expected frame counts.

If the total time of animation is specified, animation would always end when remaining time is exhausted. Depending on the refresh rate of display, if the specified frame rate is higher than display refresh rate, animation may end before reaching expected frame counts because of the runtime's calculation accuracy error.

> ### ⚠️ When I use tickerjs in some browsers directly, some errors are thrown.

Tickerjs uses some latest JavaScript features in source code, the exported bundle also has not been processed by JavaScript compiler like Babel, you need to handle it yourself.

## FAQ

<details open>
<summary>
<h3 style="display: inline;">Whether tickerjs has the same behavior with <code>requestAnimationFrame</code>?</h3>
</summary>
Yes, like <code>requestAnimationFrame</code>, tickerjs would be paused in most browsers when running in background tabs or hidden <code>&lt;iframe></code>s. But the remaining time of animation would always be decreased, you should handle additional logic outside the tickerjs if you need to stop the remaining time being decreased.
</details>

<details open>
<summary>
<h3 style="display: inline;">If I use tickerjs on animation which has static frame rate and total frames, is there anything I should pay attention to?</h3>
</summary>
Always getting current frame count from the parameter of <code>actionOnFrame</code> would ensure that the expected picture frame can be drawn. Because the actual frame rate is depending on refresh rate of display and busy level of runtime, sometimes the count of animation's total frames couldn't reach the expected maximum value, if you always hope it reaches maximum value, just don't set <code>totalTime</code>, but return one specific value (which means the animation can be over) in <code>actionOnFrame</code> when the expected value is reached.
</details>

<details open>
<summary>
<h3 style="display: inline;">When would <code>actionOnStart</code> and <code>actionOnEnd</code> be called?</h3>
</summary>
<code>actionOnStart</code> would always be called immediately after <code>requestAnimationFrames</code> is called, tickerjs would ensure that <code>actionOnStart</code> can be called and then call <code>actionOnFrame</code> at least one time. <code>actionOnEnd</code> would always be called immediately when remaining time is exhausted or <code>actionOnFrame</code> returns one value which means the animation can be over, but if the condition of the end of animation is exhaustion of time, <code>actionOnEnd</code> may not be called immediately after last <code>actionOnFrame</code> was called, because the <code>actionOnFrame</code> may not be called at last physical frame.
</details>

<details open>
<summary>
<h3 style="display: inline;">Whether tickerjs could work with third party animation libraries?</h3>
</summary>
Yes, if the animation library you use needs you to call <code>requestAnimationFrame</code> manually, because the behavior of the two code samples below is almost the same:

```javascript
// without tickerjs

function callback(time) {
    doSomething(time)

    requestAnimationFrame(callback)
}

requestAnimationFrame(callback)

// with tickerjs

requestAnimationFrames({
    actionOnFrame({ time }) {
        doSomething(time)
    },
})
```

</details>

## License

Tickerjs is [MIT](https://github.com/alengYuan/ProjectLeo4Packages/blob/main/npm-tickerjs/LICENSE) licensed.
