import { v4 as uuidv4 } from 'uuid';

function renderElapsedString(elapsed, runningSince) {
    let totalElapsed = elapsed;
    if (runningSince) {
        totalElapsed += Date.now() - runningSince;
    }
    return msToHuman(totalElapsed);
}

function msToHuman(ms) {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor(ms / 1000 / 60 / 60);

    const humanized = [
        pad(hours.toString(), 2),
        pad(minutes.toString(), 2),
        pad(seconds.toString(), 2),
    ].join(':');

    return humanized;
}

function pad(numberString, size) {
    let padded = numberString;
    while (padded.length < size) padded = `0${padded}`;
    return padded;
}

function newTimer(attrs = {}) {
    const timer = {
        title: attrs.title || 'Timer',
        project: attrs.project || 'Project',
        id: uuidv4(),
        elapsed: 0,
    };

    return timer;
}

export default {
    msToHuman,
    pad,
    renderElapsedString,
    newTimer,
}