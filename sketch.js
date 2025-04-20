let leaves = [];
let angles = []; // 儲存每個笑臉的旋轉角度

function setup() {
// 產生一個全視窗的畫布
createCanvas(windowWidth, windowHeight);
// 畫布顏色為9a8c98
background(154, 140, 152);

// 生成40個笑臉
for (let i = 0; i < 50; i++) {
leaves.push({
x: random(width),
y: random(height),
size: random(30, 50),
color: color(random(255), random(255), random(255))
});
angles.push(random(TWO_PI)); // 初始化每個笑臉的旋轉角度
}
}

function draw() {
  // 背景顏色隨滑鼠移動改變
  let bgColor = map(mouseY, 0, height, 100, 255);
  background(bgColor, 140, 152);

  let sizeOffset = map(mouseX, 0, width, 20, 80);

  for (let i = 0; i < leaves.length; i++) {
    let leaf = leaves[i];
    let angle = angles[i];

    angles[i] += 0.02;

    push();
    translate(leaf.x, leaf.y);
    rotate(angle);

    fill(leaf.color);
    noStroke();
    ellipse(0, 0, leaf.size + sizeOffset, leaf.size + sizeOffset);

    fill(0);
    let eyeOffset = (leaf.size + sizeOffset) / 5;
    ellipse(-eyeOffset, -eyeOffset, eyeOffset / 2, eyeOffset / 2);
    ellipse(eyeOffset, -eyeOffset, eyeOffset / 2, eyeOffset / 2);

    noFill();
    stroke(0);
    strokeWeight(2);
    let mouthWidth = (leaf.size + sizeOffset) / 2;
    arc(0, eyeOffset / 2, mouthWidth, mouthWidth / 2, 0, PI);

    pop();
  }
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布大小
}

function mousePressed() {
  // 每次點擊新增一個笑臉
  leaves.push({
    x: mouseX,
    y: mouseY,
    size: random(30, 50),
    color: color(random(255), random(255), random(255))
  });
  angles.push(random(TWO_PI)); // 初始化旋轉角度
}

function keyPressed() {
  if (key === 'C' || key === 'c') {
    // 按下 C 鍵清除所有笑臉
    leaves = [];
    angles = [];
  }
}
