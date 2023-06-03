var img=[];
img[0]="https://blog.geekster.in/wp-content/uploads/2021/09/Most-popular-full-stack-featured-image.png";
img[1]="https://blog.geekster.in/wp-content/uploads/2022/06/React-projects-featured-image-1024x512.png";
img[2]="https://blog.geekster.in/wp-content/uploads/2021/11/top-6-awesome-t-Jobs-in-Demand-2022-featured-Image.png";
i=0;
let image = document.getElementById("slider-img");

function nextImg() {
if(i<img.length-1)
i++;
else
i=0;
image.src=img[i];
}
function prevImg(){
i--;
if(i==-1)
i=2;
image.src=img[i];
}