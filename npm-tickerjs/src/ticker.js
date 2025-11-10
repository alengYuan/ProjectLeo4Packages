const _ratioOfDaysToHours = 24
const _ratioOfHoursToMinutes = 60
const _ratioOfMinutesToSeconds = 60
const _ratioOfSecondsToMilliseconds = 1000
const _ratioOfMinutesToMilliseconds =
    _ratioOfMinutesToSeconds * _ratioOfSecondsToMilliseconds
const _ratioOfHoursToMilliseconds =
    _ratioOfHoursToMinutes * _ratioOfMinutesToMilliseconds
const _ratioOfDaysToMilliseconds =
    _ratioOfDaysToHours * _ratioOfHoursToMilliseconds

/**
 * @type {(second:number)=>number}
 */
export const second = second =>
    second * _ratioOfSecondsToMilliseconds

/**
 * @type {(minute:number)=>number}
 */
export const minute = minute =>
    minute * _ratioOfMinutesToMilliseconds

/**
 * @type {(hour:number)=>number}
 */
export const hour = hour =>
    hour * _ratioOfHoursToMilliseconds

/**
 * @type {(day:number)=>number}
 */
export const day = day =>
    day * _ratioOfDaysToMilliseconds

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
 * @type {<KEY extends keyof TimeNumber>(
 * target:{value:number},
 * prop:KEY,
 * )=>TimeNumber[KEY]}
 */
const _timeConverter = (target, prop) =>
    ({
        millisecond: target.value,
        second: second(target.value),
        minute: minute(target.value),
        hour: hour(target.value),
        day: day(target.value),
        fps: target.value,
    })[prop]

const _timeProxyHandler = {
    /**
     * @type {(
     * target:{value:number},
     * prop:string|symbol,
     * )=>TimeNumber[keyof TimeNumber]}
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
     * @type {()=>boolean}
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
 * @type {(callback:(time:number)=>void)=>any}
 */
let _requestNextOpportunity = _ => {
    console.error('Valid `requestAnimationFrame()` is required.')

    return NaN
}

/**
 * @type {(handle:any)=>void}
 */
let _cancelNextOpportunity = _ => {
    console.error('Valid `cancelAnimationFrame()` is required.')
}

/**
 * @type {<T>(args:{
 * requestAnimationFrame:(callback:(time:number)=>void)=>T,
 * cancelAnimationFrame:(handle:T)=>void,
 * })=>void}
 */
export const specifyAnimationFrameManager = ({
    requestAnimationFrame: request,
    cancelAnimationFrame: cancel,
}) => {
    _requestNextOpportunity = request
    _cancelNextOpportunity = cancel
}

if (
    'requestAnimationFrame' in globalThis &&
    'cancelAnimationFrame' in globalThis
) {
    specifyAnimationFrameManager({
        requestAnimationFrame: globalThis.requestAnimationFrame,
        cancelAnimationFrame: globalThis.cancelAnimationFrame,
    })
} else if ('setImmediate' in globalThis && 'clearImmediate' in globalThis) {
    specifyAnimationFrameManager({
        requestAnimationFrame: callback =>
            setImmediate(() =>
                callback(performance.now())),
        cancelAnimationFrame: clearImmediate,
    })
}

/**
 * @type {(args:{
 * totalTime?:number,
 * frameRate?:number,
 * actionOnStart?:()=>void,
 * actionOnFrame:(args:{
 * remainingTime:number,
 * frameCount:number,
 * delta:number,
 * time:number,
 * })=>void|{continueHandleFrames:boolean},
 * actionOnEnd?:()=>void,
 * })=>(never|(()=>void))}
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
    if (
        typeof totalTime !== 'undefined' &&
        (isNaN(totalTime) || totalTime <= 0 || !Number.isInteger(totalTime))
    ) {
        throw new RangeError(
            'NaN, 0, negative numbers and non-integers are not valid for "totalTime".',
        )
    }
    if (
        typeof frameRate !== 'undefined' &&
        (isNaN(frameRate) || frameRate <= 0 || !Number.isInteger(frameRate))
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

    const specificFrameRate = frameRate ?? NaN
    const totalFrames = Math.floor(
        remainingTime * specificFrameRate / _ratioOfSecondsToMilliseconds,
    )

    /**
     * @type {any}
     */
    let requestID = NaN
    let startTime = NaN
    let previousTime = NaN

    let factorOnFrameCount = NaN
    let factorOnTimeInterval = NaN

    /**
     * @type {(time:number)=>void}
     */
    const handleTimesSideEffect = time => {
        remainingTime -= time - previousTime
        if (remainingTime < minimumRemainingTime) {
            remainingTime = minimumRemainingTime
        }

        previousTime = time
    }

    /**
     * @type {(time:number)=>void}
     */
    const nextStepWithoutSpecificFrameRate = time => {
        handleTimesSideEffect(time)

        if (remainingTime > minimumRemainingTime) {
            frameCount += oneFrame

            const { continueHandleFrames } = actionOnFrame({
                remainingTime,
                frameCount,
                delta:
                    (time - factorOnTimeInterval) /
                    _ratioOfSecondsToMilliseconds,
                time,
            }) ?? { continueHandleFrames: true }

            factorOnTimeInterval = time

            if (continueHandleFrames) {
                requestID = _requestNextOpportunity(
                    nextStepWithoutSpecificFrameRate,
                )

                return
            }
        }

        actionOnEnd && actionOnEnd()
    }

    /**
     * @type {(time:number)=>void}
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
                    delta:
                        (frameCount - factorOnFrameCount) / specificFrameRate,
                    time,
                }) ?? { continueHandleFrames: true }

                factorOnFrameCount = frameCount

                if (!continueHandleFrames) {
                    actionOnEnd && actionOnEnd()

                    return
                }
            }

            if (frameCount < totalFrames) {
                requestID = _requestNextOpportunity(
                    nextStepWithSpecificFrameRate,
                )

                return
            }
        }

        actionOnEnd && actionOnEnd()
    }

    /**
     * @type {(time:number)=>void}
     */
    const firstStep = time => {
        actionOnStart && actionOnStart()

        frameCount += oneFrame

        const { continueHandleFrames } = actionOnFrame({
            remainingTime,
            frameCount,
            delta: 0,
            time,
        }) ?? { continueHandleFrames: true }

        factorOnFrameCount = frameCount
        factorOnTimeInterval = time

        if (!continueHandleFrames) {
            actionOnEnd && actionOnEnd()
        } else {
            startTime = time
            previousTime = time
            requestID = _requestNextOpportunity(
                isNaN(specificFrameRate)
                    ? nextStepWithoutSpecificFrameRate
                    : nextStepWithSpecificFrameRate,
            )
        }
    }

    requestID = _requestNextOpportunity(firstStep)

    return () => {
        _cancelNextOpportunity(requestID)
    }
}

/**
 * @typedef {{
 * day:number,
 * hour:number,
 * minute:number,
 * second:number,
 * millisecond:number,
 * }} StructuredTimeWithDayUnit
 */

/**
 * @type {(totalMilliseconds:number)=>StructuredTimeWithDayUnit}
 */
const _getStructuredTimeWithDayUnit = totalMilliseconds => {
    const remainingHours = totalMilliseconds % _ratioOfDaysToMilliseconds
    const remainingMinutes = remainingHours % _ratioOfHoursToMilliseconds
    const remainingSeconds = remainingMinutes % _ratioOfMinutesToMilliseconds
    const remainingMilliseconds =
        remainingSeconds % _ratioOfSecondsToMilliseconds

    const day =
        (totalMilliseconds - remainingHours) / _ratioOfDaysToMilliseconds
    const hour =
        (remainingHours - remainingMinutes) / _ratioOfHoursToMilliseconds
    const minute =
        (remainingMinutes - remainingSeconds) / _ratioOfMinutesToMilliseconds
    const second =
        (remainingSeconds - remainingMilliseconds) /
        _ratioOfSecondsToMilliseconds

    return { day, hour, minute, second, millisecond: remainingMilliseconds }
}

/**
 * @typedef {{
 * hour:number,
 * minute:number,
 * second:number,
 * millisecond:number,
 * }} StructuredTimeWithHourUnit
 */

/**
 * @type {(totalMilliseconds:number)=>StructuredTimeWithHourUnit}
 */
const _getStructuredTimeWithHourUnit = totalMilliseconds => {
    const remainingMinutes = totalMilliseconds % _ratioOfHoursToMilliseconds
    const remainingSeconds = remainingMinutes % _ratioOfMinutesToMilliseconds
    const remainingMilliseconds =
        remainingSeconds % _ratioOfSecondsToMilliseconds

    const hour =
        (totalMilliseconds - remainingMinutes) / _ratioOfHoursToMilliseconds
    const minute =
        (remainingMinutes - remainingSeconds) / _ratioOfMinutesToMilliseconds
    const second =
        (remainingSeconds - remainingMilliseconds) /
        _ratioOfSecondsToMilliseconds

    return { hour, minute, second, millisecond: remainingMilliseconds }
}

/**
 * @typedef {{
 * minute:number,
 * second:number,
 * millisecond:number,
 * }} StructuredTimeWithMinuteUnit
 */

/**
 * @type {(totalMilliseconds:number)=>StructuredTimeWithMinuteUnit}
 */
const _getStructuredTimeWithMinuteUnit = totalMilliseconds => {
    const remainingSeconds = totalMilliseconds % _ratioOfMinutesToMilliseconds
    const remainingMilliseconds =
        remainingSeconds % _ratioOfSecondsToMilliseconds

    const minute =
        (totalMilliseconds - remainingSeconds) / _ratioOfMinutesToMilliseconds
    const second =
        (remainingSeconds - remainingMilliseconds) /
        _ratioOfSecondsToMilliseconds

    return { minute, second, millisecond: remainingMilliseconds }
}

/**
 * @typedef {{
 * day:StructuredTimeWithDayUnit,
 * hour:StructuredTimeWithHourUnit,
 * minute:StructuredTimeWithMinuteUnit,
 * }} StructuredTimes
 *
 * @type {<KEY extends keyof StructuredTimes>(
 * totalMilliseconds:number,
 * highestUnit:KEY,
 * )=>StructuredTimes[KEY]}
 */
export const getStructuredTime = (totalMilliseconds, highestUnit) =>
    ({
        day: _getStructuredTimeWithDayUnit(totalMilliseconds),
        hour: _getStructuredTimeWithHourUnit(totalMilliseconds),
        minute: _getStructuredTimeWithMinuteUnit(totalMilliseconds),
    })[highestUnit]