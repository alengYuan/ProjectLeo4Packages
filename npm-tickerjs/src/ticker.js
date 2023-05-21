const _ratioOfSecondsToMilliseconds = 1000
const _ratioOfMinutesToSeconds = 60
const _ratioOfHoursToMinutes = 60
const _ratioOfDaysToHours = 24

/**
 * @param {number} second
 * @returns {number}
 */
export const second = second =>
    second * _ratioOfSecondsToMilliseconds

/**
 * @param {number} minute
 * @returns {number}
 */
export const minute = minute =>
    minute * _ratioOfMinutesToSeconds * _ratioOfSecondsToMilliseconds

/**
 * @param {number} hour
 * @returns {number}
 */
export const hour = hour =>
    hour *
    _ratioOfHoursToMinutes *
    _ratioOfMinutesToSeconds *
    _ratioOfSecondsToMilliseconds

/**
 * @param {number} day
 * @returns {number}
 */
export const day = day =>
    day *
    _ratioOfDaysToHours *
    _ratioOfHoursToMinutes *
    _ratioOfMinutesToSeconds *
    _ratioOfSecondsToMilliseconds

/**
 * @typedef {{
 * millisecond:number,
 * second:number,
 * minute:number,
 * hour:number,
 * day:number,
 * fps:number,
 * }} TimeNumber
 */

/**
 * @param {{value:number}} target
 * @param {keyof TimeNumber} prop
 * @returns {TimeNumber[keyof TimeNumber]}
 */
const _timeConverter = (target, prop) =>
    ({
        millisecond: target.value,
        second: second(target.value),
        minute: minute(target.value),
        hour: hour(target.value),
        day: day(target.value),
        fps: target.value,
    }[prop])

const _timeProxyHandler = {
    /**
     * @param {{value:number}} target
     * @param {string|symbol} prop
     * @returns {TimeNumber[keyof TimeNumber]}
     */
    get(target, prop) {
        switch (prop) {
            case 'millisecond':
            case 'second':
            case 'minute':
            case 'hour':
            case 'day':
            case 'fps':
                return _timeConverter(target, prop)
            default:
                return NaN
        }
    },
    /**
     * @returns {boolean}
     */
    set() {
        return false
    },
}

/**
 * @type {TimeNumber}
 */
// HACK: It's reasonable, when the proxy is still matched.
// @ts-ignore
export const one = new Proxy({ value: 1 }, _timeProxyHandler)

/**
 * @type {TimeNumber}
 */
// HACK: It's reasonable, when the proxy is still matched.
// @ts-ignore
export const two = new Proxy({ value: 2 }, _timeProxyHandler)

/**
 * @type {TimeNumber}
 */
// HACK: It's reasonable, when the proxy is still matched.
// @ts-ignore
export const three = new Proxy({ value: 3 }, _timeProxyHandler)

/**
 * @type {TimeNumber}
 */
// HACK: It's reasonable, when the proxy is still matched.
// @ts-ignore
export const five = new Proxy({ value: 5 }, _timeProxyHandler)

/**
 * @type {TimeNumber}
 */
// HACK: It's reasonable, when the proxy is still matched.
// @ts-ignore
export const seven = new Proxy({ value: 7 }, _timeProxyHandler)

/**
 * @type {TimeNumber}
 */
// HACK: It's reasonable, when the proxy is still matched.
// @ts-ignore
export const ten = new Proxy({ value: 10 }, _timeProxyHandler)

/**
 * @type {TimeNumber}
 */
// HACK: It's reasonable, when the proxy is still matched.
// @ts-ignore
export const twelve = new Proxy({ value: 12 }, _timeProxyHandler)

/**
 * @type {TimeNumber}
 */
// HACK: It's reasonable, when the proxy is still matched.
// @ts-ignore
export const fourteen = new Proxy({ value: 14 }, _timeProxyHandler)

/**
 * @type {TimeNumber}
 */
// HACK: It's reasonable, when the proxy is still matched.
// @ts-ignore
export const fifteen = new Proxy({ value: 15 }, _timeProxyHandler)

/**
 * @type {TimeNumber}
 */
// HACK: It's reasonable, when the proxy is still matched.
// @ts-ignore
export const twenty = new Proxy({ value: 20 }, _timeProxyHandler)

/**
 * @type {TimeNumber}
 */
// HACK: It's reasonable, when the proxy is still matched.
// @ts-ignore
export const twentyOne = new Proxy({ value: 21 }, _timeProxyHandler)

/**
 * @type {TimeNumber}
 */
// HACK: It's reasonable, when the proxy is still matched.
// @ts-ignore
export const twentyFour = new Proxy({ value: 24 }, _timeProxyHandler)

/**
 * @type {TimeNumber}
 */
// HACK: It's reasonable, when the proxy is still matched.
// @ts-ignore
export const twentyFive = new Proxy({ value: 25 }, _timeProxyHandler)

/**
 * @type {TimeNumber}
 */
// HACK: It's reasonable, when the proxy is still matched.
// @ts-ignore
export const twentyEight = new Proxy({ value: 28 }, _timeProxyHandler)

/**
 * @type {TimeNumber}
 */
// HACK: It's reasonable, when the proxy is still matched.
// @ts-ignore
export const twentyNine = new Proxy({ value: 29 }, _timeProxyHandler)

/**
 * @type {TimeNumber}
 */
// HACK: It's reasonable, when the proxy is still matched.
// @ts-ignore
export const thirty = new Proxy({ value: 30 }, _timeProxyHandler)

/**
 * @type {TimeNumber}
 */
// HACK: It's reasonable, when the proxy is still matched.
// @ts-ignore
export const thirtyOne = new Proxy({ value: 31 }, _timeProxyHandler)

/**
 * @type {TimeNumber}
 */
// HACK: It's reasonable, when the proxy is still matched.
// @ts-ignore
export const fortyFive = new Proxy({ value: 45 }, _timeProxyHandler)

/**
 * @type {TimeNumber}
 */
// HACK: It's reasonable, when the proxy is still matched.
// @ts-ignore
export const fortyEight = new Proxy({ value: 48 }, _timeProxyHandler)

/**
 * @type {TimeNumber}
 */
// HACK: It's reasonable, when the proxy is still matched.
// @ts-ignore
export const fifty = new Proxy({ value: 50 }, _timeProxyHandler)

/**
 * @type {TimeNumber}
 */
// HACK: It's reasonable, when the proxy is still matched.
// @ts-ignore
export const sixty = new Proxy({ value: 60 }, _timeProxyHandler)

/**
 * @type {TimeNumber}
 */
// HACK: It's reasonable, when the proxy is still matched.
// @ts-ignore
export const ninety = new Proxy({ value: 90 }, _timeProxyHandler)

/**
 * @type {TimeNumber}
 */
// HACK: It's reasonable, when the proxy is still matched.
// @ts-ignore
export const oneHundredTwenty = new Proxy({ value: 120 }, _timeProxyHandler)

/**
 * @type {TimeNumber}
 */
// HACK: It's reasonable, when the proxy is still matched.
// @ts-ignore
export const oneHundredFortyFour = new Proxy({ value: 144 }, _timeProxyHandler)

/**
 * @type {TimeNumber}
 */
// HACK: It's reasonable, when the proxy is still matched.
// @ts-ignore
export const twoHundredForty = new Proxy({ value: 240 }, _timeProxyHandler)

/**
 * @type {TimeNumber}
 */
// HACK: It's reasonable, when the proxy is still matched.
// @ts-ignore
export const threeHundred = new Proxy({ value: 300 }, _timeProxyHandler)

/**
 * @type {TimeNumber}
 */
// HACK: It's reasonable, when the proxy is still matched.
// @ts-ignore
export const threeHundredSixty = new Proxy({ value: 360 }, _timeProxyHandler)

/**
 * @type {TimeNumber}
 */
// HACK: It's reasonable, when the proxy is still matched.
// @ts-ignore
export const fiveHundred = new Proxy({ value: 500 }, _timeProxyHandler)

/**
 * @param {{
 * totalTime?:number,
 * frameRate?:number,
 * actionOnStart?:()=>void,
 * actionOnFrame:(args:{
 * remainingTime:number,
 * frameCount:number,
 * time:number,
 * })=>void|{continueHandleFrames:boolean},
 * actionOnEnd?:()=>void,
 * }} args
 * @returns {never|(()=>void)}
 * @throws {RangeError} `NaN`, `0`, negative numbers and non-integers are not valid for "`totalTime`" and "`frameRate`".
 * @throws {RangeError} `Infinity` is not valid for "`frameRate`".
 */
export const requestAnimationFrames = ({
    totalTime,
    frameRate,
    actionOnStart,
    actionOnFrame,
    actionOnEnd,
}) => {
    const zero = 0
    if (
        typeof totalTime !== 'undefined' &&
        (isNaN(totalTime) || totalTime <= zero || !Number.isInteger(totalTime))
    ) {
        throw new RangeError(
            'NaN, 0, negative numbers and non-integers are not valid for "totalTime".',
        )
    }
    if (
        typeof frameRate !== 'undefined' &&
        (isNaN(frameRate) || frameRate <= zero || !Number.isInteger(frameRate))
    ) {
        throw new RangeError(
            'NaN, 0, negative numbers and non-integers are not valid for "frameRate".',
        )
    }
    if (typeof frameRate !== 'undefined' && !isFinite(frameRate)) {
        throw new RangeError('Infinity is not valid for "frameRate".')
    }

    const minimumRemainingTime = 0
    const initialFrameCount = 0
    const oneFrame = 1

    let remainingTime = totalTime ?? Infinity
    let frameCount = initialFrameCount

    const specificFrameRate = typeof frameRate === 'undefined' ? NaN : frameRate
    const totalFrames = Math.floor(
        remainingTime * specificFrameRate / _ratioOfSecondsToMilliseconds,
    )

    let requestID = NaN
    let startTime = NaN
    let previousTime = NaN

    /**
     * @param {number} time
     */
    const handleTimesSideEffect = time => {
        const actualInterval = time - previousTime

        remainingTime -= actualInterval
        remainingTime = Math.max(remainingTime, minimumRemainingTime)

        previousTime = time
    }

    /**
     * @param {number} time
     */
    const nextStepWithoutSpecificFrameRate = time => {
        handleTimesSideEffect(time)

        if (remainingTime > minimumRemainingTime) {
            frameCount += oneFrame
            const { continueHandleFrames } = actionOnFrame({
                remainingTime,
                frameCount,
                time,
            }) ?? { continueHandleFrames: true }
            if (continueHandleFrames) {
                requestID = requestAnimationFrame(
                    nextStepWithoutSpecificFrameRate,
                )
                return
            }
        }

        actionOnEnd && actionOnEnd()
    }

    /**
     * @param {number} time
     */
    const nextStepWithSpecificFrameRate = time => {
        handleTimesSideEffect(time)

        if (remainingTime > minimumRemainingTime) {
            const logicalFrameCount =
                Math.floor(
                    (time - startTime) * specificFrameRate /
                        _ratioOfSecondsToMilliseconds,
                ) + oneFrame

            if (logicalFrameCount > frameCount) {
                frameCount = logicalFrameCount
                const { continueHandleFrames } = actionOnFrame({
                    remainingTime,
                    frameCount,
                    time,
                }) ?? { continueHandleFrames: true }
                if (!continueHandleFrames) {
                    actionOnEnd && actionOnEnd()
                    return
                }
            }

            if (frameCount < totalFrames) {
                requestID = requestAnimationFrame(nextStepWithSpecificFrameRate)
                return
            }
        }

        actionOnEnd && actionOnEnd()
    }

    /**
     * @param {number} time
     */
    const firstStep = time => {
        actionOnStart && actionOnStart()

        frameCount += oneFrame
        const { continueHandleFrames } = actionOnFrame({
            remainingTime,
            frameCount,
            time,
        }) ?? { continueHandleFrames: true }
        if (!continueHandleFrames) {
            actionOnEnd && actionOnEnd()
        } else {
            startTime = time
            previousTime = time
            requestID = requestAnimationFrame(
                isNaN(specificFrameRate)
                    ? nextStepWithoutSpecificFrameRate
                    : nextStepWithSpecificFrameRate,
            )
        }
    }

    requestID = requestAnimationFrame(firstStep)
    return () => {
        cancelAnimationFrame(requestID)
    }
}