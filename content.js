chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "start") {
            start();
        }
    }
);

async function start() {
    alert("starting...");

    var slides = document.getElementsByClassName("Y2SkMErw");
    console.log(slides);
    for (var i = 0; i < slides.length; i++) {
        await Do(slides, i);
    }
}
async function Do(slides, i) {
    try {
        slides[i].click();
        await sleep(5);
        await setTimeout(async () => {

            await sleep(5);
            // document.getElementsByClassName("jiP9Bjx2 C2ngYs9r")[0].click();
            document.getElementsByClassName("jiP9Bjx2 C2ngYs9r")[0].click();
            await sleep(2);
            document.getElementsByClassName("BaqMDxgp XRaktsFq dp4yRDc1")[0].click();
            await sleep(2);
        }, 5000);
        await sleep(7 + i);
    } catch (ex) {
        console.log("RERAN")
        await Do(slides, i);
    }
}

function sleep(seconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, seconds * 1000);
    });

}