let mobilenet;

let puffin;

function modelReady() {
    console.log('Model is ready!');
    mobilenet.classify(puffin, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        let label = results[0].label;
        let confidence = results[0].confidence;
        fill(0);
        textSize(34);
        text(label, 10, height - 100);
        text(confidence, 10, height - 50);
        
    }
}

function imageReady() {
    console.log('Image is ready!');
    image(puffin, 0, 0, width, height);
}

function setup() {
    createCanvas(640, 480);
    puffin = createImg('images/puffin.jpg', imageReady)
    puffin.hide();
    background(0);
    mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}

