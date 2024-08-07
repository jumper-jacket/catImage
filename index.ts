type ImageProperties = {
    heigth: number,
    id: string,
    url: string,
    width: string,
};

const fetchImage = async () :Promise<ImageProperties> => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search")
    console.log(res);
    const result: [ImageProperties] = await res.json();
    console.log(result[0]);
    return result[0];
};

const changeImage = async () => {
    const img = document.querySelector('#img') as HTMLImageElement;
    const newImage = await fetchImage();
    img.src = newImage.url;
    img.style.objectFit = 'contain';
    img.style.maxWidth = '80vw';
    img.style.maxHeight ='80vh';
}

const setBodyStyle = () => {
    document.body.style.margin = '0';
    document.body.style.height = '100vh';
    document.body.style.display = 'flex';
    document.body.style.alignItems = 'center';
    document.body.style.justifyContent = 'center';
}

setBodyStyle();

changeImage();